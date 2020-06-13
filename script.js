
let score = 0;

let robot1 = {
  coords: [314, 940, 0.2618],
  container: ['none', 'none', 'none', 'none', 'none', 'none'],
  dynamixels: [0, 0, 0, 0, 0, 0],
  curr_state: 0,
  strategy: [{name: 'finish'}]
}

//TODO
let robot2 = {
  coords: [215.625, 664.06+5000, 3.14],
  container: ['none', 'none', 'none', 'none', 'none', 'none'],
  dynamixels: [0, 0, 0, 0, 0, 0],
  curr_state: 0,
  strategy: [{name: 'finish'}]
}

let buoys = [
  [670, 100, 'red'],
  [300, 400, 'red'],
  [450, 510, 'green'],
  [450, 1080, 'red'],
  [300, 1200, 'green'],
  [950, 400, 'green'],
  [1100, 800, 'red'],
  [1270, 1200, 'green'],
  [1065, 1650, 'green'],
  [1355, 1650, 'red'],
  [1005, 1955, 'red'],
  [1395, 1955, 'green']
]

let euc = (p1, p2) => Math.hypot(p1[0]-p2[0], p1[1]-p2[1])

function controlRobot(robot) {
  c = robot.strategy[robot.curr_state];

  if(c == undefined) return;

    if(c.name == 'move') {
      speed = c.speed ? c.speed : ROBOT_SPEED_STD;

      var dist = euc(robot.coords, c.point);
      var ort = [(c.point[0]-robot.coords[0])/dist, (c.point[1]-robot.coords[1])/dist];

      if(dist >= speed * (DT/1000)) {
        robot.coords[0] += speed * (DT/1000) * ort[0];
        robot.coords[1] += speed * (DT/1000) * ort[1];
      }

      if(Math.abs(robot.coords[2] - c.point[2]) >= 0.15) {
        robot.coords[2] += ANGULAR_SPEED_STD * (DT/1000) * Math.sign(c.point[2] - robot.coords[2]);
      }

      if(dist < speed * (DT/1000) && Math.abs(robot.coords[2] - c.point[2]) < 0.15) {
        robot.coords[0] = c.point[0];
        robot.coords[1] = c.point[1];
        robot.coords[2] = c.point[2];
        robot.curr_state++;
      }
    }

    if(c.name == 'take') {
      if(c.delay > 0) {
        c.delay -= DT;
      } else {
        buoys[c.bouy_id][0] = -1000;
        robot.container[c.place_id] = buoys[c.bouy_id][2];
        robot.curr_state++;
      }
    }
    
    if(c.name == 'sleep') {
      if(c.time > 0) {
        c.time -= DT;
      } else {
        robot.curr_state++;
      }
    }

    if(c.name == 'put5') {
      if(c.time > 0) {
        c.time -= DT;
      } else {
        for(var i=0; i<5; i++) {

          px = robot.coords[0]+125*cos(robot.coords[2])+(75*i-150)*sin(robot.coords[2]);
          py = robot.coords[1]-125*sin(robot.coords[2])+(75*i-150)*cos(robot.coords[2]);

          buoys.push([px, py, c.bouys[i]]);
        }
        robot.curr_state++;
      }
    }
    
    if(c.name == 'dynamixel') {
      if(c.time > 0) {
        c.time -= DT;
      } else {

        for(let i=0; i<6; i++) {
          if(c.values[i] != 15) robot.dynamixels[i] = c.values[i]

          if(c.values[i] >=3 && c.values[i] <= 5) {
            drop(robot, i, CONT_PERIMETER[i], (i%2 == 0 ? OFF_L : OFF_R)[c.values[i]])
          }
        }
        robot.curr_state++;
      }
    }

    if(c.name == 'drop') {
      if(c.time > 0) {
        c.time -= DT;
      } else {
        for(var i=0; i<c.places.length; i++) {
          drop(robot, c.places[i], CONT_PERIMETER[c.places[i]], c.offsets[i]);
        }

        robot.curr_state++;
      }
    }
    
    if(c.name == 'addscore') {
      score += c.score;

      document.getElementById('score').innerHTML='<b>SCORE: </b>' + round(score)+'<span style="color:gray;">(abs max 129)</span>';

      robot.curr_state++;
    }
    
    if(c.name == 'stm') {
      //kek
      robot.curr_state++;
    }
}

function drop(robot, i, bouy_pos, offset) {
  if(robot.container[i] != 'red' && robot.container[i] != 'green') return;

  px = robot.coords[0]+bouy_pos[0]*cos(robot.coords[2])+bouy_pos[1]*sin(robot.coords[2]) + offset[0];
  py = robot.coords[1]-bouy_pos[0]*sin(robot.coords[2])+bouy_pos[1]*cos(robot.coords[2]) + offset[1];
  
  buoys.push([px, py, robot.container[i]/*(i>0? 'green' : 'red')*/]);
  robot.container[i] = 'none';
}

time = 0;

function setup() {
  setupBoard();

  for(var i=0; i<12; i++) buoys.push([3000 - buoys[i][0], buoys[i][1], buoys[i][2] == 'red' ? 'green' : 'red']);

  //document.getElementById('text_json1').innerHTML =
  //JSON.stringify({strategy1: robot1.strategy, strategy2: robot2.strategy}, null, '\t');

  //setInterval(() => controlRobot(robot1), DT);

  //setInterval(() => controlRobot(robot2), DT);

  setInterval(function() {
    if(robot1.strategy[robot1.curr_state] != undefined && robot1.strategy[robot1.curr_state].name != 'finish' && robot1.curr_state < robot1.strategy.length-1) {
      document.getElementById('time').innerHTML='&emsp;&emsp;<b>TIME: </b>' + ((time+=1)/50)
    }
  }, 20);
}

function restart() {
  time = 0;
  score = 0;

  robot1.coords = [314, 940, 0.2618];
  //robot2.coords = [215.625, 664.06, 3.14];

  robot1.container = ['none', 'none', 'none', 'none', 'none', 'none'];
  //robot2.container = ['none', 'none', 'none', 'none', 'none', 'none'];

  robot1.curr_state = 0;
  //robot2.curr_state = 0;

  buoys = [
    [670, 100, 'red'],
    [300, 400, 'red'],
    [450, 510, 'green'],
    [450, 1080, 'red'],
    [300, 1200, 'green'],
    [950, 400, 'green'],
    [1100, 800, 'red'],
    [1270, 1200, 'green'],
    [1065, 1650, 'green'],
    [1355, 1650, 'red'],
    [1005, 1955, 'red'],
    [1395, 1955, 'green']
  ];

  for(var i=0; i<12; i++) buoys.push([3000 - buoys[i][0], buoys[i][1], buoys[i][2] == 'red' ? 'green' : 'red']);

  /*
  var json = JSON.parse(document.getElementById('text_json1').value);
  robot1.strategy = json.strategy1;
  robot2.strategy = json.strategy2;
  */
  
  robot1.strategy = adaptStrategy(strategy);

  //robot1.strategy = strategy_A2;

  //document.getElementById('text_json1').value = JSON.stringify(json, null, '\t');
}

let sample_x = 0, sample_y = 0, sample_w = 0;

let mouse_locked = false

let mouse_inside = () => sample_x <= 3000 && sample_y <=2000 && sample_x >=0 && sample_y >=0

function mousePressed() {
  if (!mouse_locked && mouse_inside()) {
    mouse_locked = true;

    console.log('['+ 
    Number(sample_x, 0.05).toFixed(2) + ', ' +
    Number(sample_y, 0.05).toFixed(2) + ', ' +
    Number(sample_w, 0.05).toFixed(2) + ']');

    if(selected_move != undefined) {
      x = Number(sample_x / 1000, 0.05).toFixed(2)
      y = Number(2 - sample_y / 1000, 0.05).toFixed(2)
      w = Number(sample_w, 0.05).toFixed(2)

      selected_move.x = x;
      selected_move.y = y;
      selected_move.yaw = w;
      
      document.getElementById(selected_move_note + "_x").value = selected_move.x;
      document.getElementById(selected_move_note + "_y").value = selected_move.y;
      document.getElementById(selected_move_note + "_yaw").value = selected_move.yaw;

      robot1.strategy = adaptStrategy(strategy)
    }

  } else {
    mouse_locked = false;
  }
}

function keyPressed() {
  if (key =='a' || key == 'A') sample_w += Math.PI / 12;
  if (key =='d' || key == 'D') sample_w -= Math.PI / 12;
}