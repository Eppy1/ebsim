
let _rect = (x, y, w, h) => rect(x*SCALE, y*SCALE, w*SCALE, h*SCALE);
let _arc = (x, y, r, start, end) => arc(x*SCALE, y*SCALE, r*SCALE, r*SCALE, start, end);

function drawBuoy(x, y, color) {
  strokeWeight(1);
  fill(color == 'red' ? RED : GREEN);
  ellipse(x * SCALE, y * SCALE, 2 * BUOY_R * SCALE);
}

function drawBuoys() {
  buoys.forEach(function(b, i, bs) { 
    drawBuoy(b[0], b[1], b[2]);
    strokeWeight(0);
    fill("#000");
    text(''+i, b[0]*SCALE+BUOY_R*SCALE, b[1]*SCALE-BUOY_R*SCALE)
  });
}

function drawRobot(robot, transparent) {
  coords = robot.coords
  container = robot.container

  if(container != undefined && !transparent) {
    CONT_PERIMETER.forEach(function(p, i, ps) {
      if(container[i] != 'none') {   
        px = coords[0]+p[0]*cos(coords[2])+p[1]*sin(coords[2]);
        py = coords[1]-p[0]*sin(coords[2])+p[1]*cos(coords[2]);
        
        drawBuoy(px, py, container[i]);
      }
    });
  }

  if(transparent) {
    strokeWeight(1);
    noFill();

    line(SCALE * coords[0], 
      SCALE * coords[1],
      SCALE * (coords[0] + 100*cos(coords[2])),
      SCALE * (coords[1] - 100*sin(coords[2])));
  } else {
    strokeWeight(0);
    fill(BLUE);
  }

  beginShape();

  ROBOT_PERIMETER.forEach(function(p, i, ps) { 
    px = SCALE * (coords[0]+p[0]*cos(coords[2])+p[1]*sin(coords[2]));
    py = SCALE * (coords[1]-p[0]*sin(coords[2])+p[1]*cos(coords[2]));
    vertex(px, py);
  });

  endShape(CLOSE);

  if(container != undefined && !transparent) {
    CONT_PERIMETER.forEach(function(p, i, ps) {
      if(true/*container[i] != 'none'*/) {   
        px = coords[0]+p[0]*cos(coords[2])+p[1]*sin(coords[2]);
        py = coords[1]-p[0]*sin(coords[2])+p[1]*cos(coords[2]);
        fill("#000");
        text(i+"-" + robot.dynamixels[i], px*SCALE+BUOY_R*SCALE, py*SCALE-BUOY_R*SCALE)
      }
    });
  }

  strokeWeight(1);
  noFill();

  beginShape();

  ROBOT_PERIMETER_TOP.forEach(function(p, i, ps) { 
    px = SCALE * (coords[0]+p[0]*cos(coords[2])+p[1]*sin(coords[2]));
    py = SCALE * (coords[1]-p[0]*sin(coords[2])+p[1]*cos(coords[2]));
    vertex(px, py);
  });

  endShape(CLOSE);
}

function drawDecor() {
  /* BACKGROUND */
  background('#e1f1fd');
  translate(BTAB, BTAB);

  /* BOARD */
  stroke('#000');
  strokeWeight(2);
  fill('#C1D8F0')
  rect(0, 0, WIDTH, HEIGHT)

  /* PORTS */
  strokeWeight(0);
  fill(RED);
  _rect(0, 1070, 400, 30);
  _rect(2600, 1070, 400, 30);
  _rect(1250, 1700, 100, 300);
  _rect(1850, 1700, 100, 300);

  fill(GREEN);
  _rect(2600, 500, 400, 30);
  _rect(0, 500, 400, 30);
  _rect(1050, 1700, 100, 300);
  _rect(1650, 1700, 100, 300);

  /* ANCHOR */
  fill(0x00, 0x5a, 0xff, 64);
  _arc(0, 500, 800, -1.57, 0, PIE)
  _arc(3000, 500, 800, 3.14, 4.71, PIE)

  fill(0xfe, 0xfe, 0xfe, 127);
  _arc(0, 1100, 800, 0, 1.57, PIE)
  _arc(3000, 1100, 800, 1.57, 3.14, PIE)

  /* LIGHTHOUSES */
  strokeWeight(2);
  fill(BLUE);
  _rect(0, -222, 450, 222);
  fill(YELLOW);
  _rect(2550, -222, 450, 222);

  /* GROUNDED ZONES */
  strokeWeight(2);
  fill(LTGRAY);
  _rect(640.5, -134, 1059.5-640.5, 134);
  _rect(1940.5, -134, 1059.5-640.5, 134);

  _rect(-134, 1390.5, 134, 1809.5-1390.5);
  _rect(3000, 1390.5, 134, 1809.5-1390.5);


  /* PORT WALLS */
  strokeWeight(0);
  fill(DKGRAY);
  _rect(889, 1850, 22, 150);
  _rect(2089, 1850, 22, 150);
  _rect(1489, 1700, 22, 300);
}

function drawPath(strategy) {
  //TODO
  let prev_pt = undefined

  for(let cmd of strategy) {
    if('move' == cmd.name) {
      if(prev_pt) {
        strokeWeight(1);
        noFill();
        line(SCALE * prev_pt[0], SCALE * prev_pt[1], SCALE * cmd.point[0], SCALE * cmd.point[1]);
      }

      prev_pt = cmd.point;
    }
  }
}

function draw() {
  drawDecor();

  drawPath(robot1.strategy)

  if(selected_move != undefined) {
    stroke(GREEN);
    drawRobot({coords: [selected_move.x*1000, 2000 - selected_move.y*1000, selected_move.yaw], container: undefined, dynamixels: undefined}, true);
    stroke("#000");
  }

  if(semi_selected_move != undefined) {
    stroke(color(0, 0x76, 0x44, 127));
    drawRobot({coords: [semi_selected_move.x*1000, 2000 - semi_selected_move.y*1000, semi_selected_move.yaw], container: undefined, dynamixels: undefined}, true);
    stroke("#000");
  }

  drawBuoys();

  drawRobot(robot1, false);
  drawRobot(robot2, false);

  sample_x = (mouseX-BTAB)/SCALE;
  sample_y = (mouseY-BTAB)/SCALE;

  drawRobot({coords: [sample_x, sample_y, sample_w], container: undefined, dynamixels: undefined}, true);
/*
  document.getElementById('coords').innerHTML =
  ` <span style="display:inline-block; width:4em"><b>X:</b> ${round(sample_x)}</span>
    <span style="display:inline-block; width:4em"><b>Y:</b> ${round(sample_y)}</span>
    <span style="display:inline-block; width:4em"><b>W:</b> ${(sample_w).toFixed(2)}</span>`;
    */
}

function setupBoard() {
  var canvas = createCanvas(WIDTH+BTAB*2, HEIGHT+BTAB*2);
  canvas.parent('sketch-holder');
  frameRate(30);
}