let json_src = `{
	"config_version": "2.0.0",
	"patterns": {
        "move_to_port": {
            "priority": 150,
            "comment": "test",
            "commands": [
                {
					"add_score": {
						"comment": " TODO (fix it pls)",
                        "score": 0,
						"set_time": 1000
					}
                },
                {
                    "send_stm_cmd": {
                        "cmd": "SetLowDynamixelsPoses",
                        "cmd_params": "000000"
                    }
                },
                {
                    "move": {
                        "x": 0.244,
                        "y": 1.177,
                        "yaw": -0.52,
                        "speed": 0.2
                    }
                },
				{
					"add_score": {
						"comment": "2 points for putting the lighthouse on the rocky area before the game starts (TODO)",
                        "score": 2,
						"set_time": 120
					}
				}
            ]
        },
        "starter_device_strategy_blue": {
            "priority": -145,
            "comment": "key w8",
            "dependencies": [],
            "commands": [
              {
                "wait_status": {
                  "cmd": "StatusStarterDevice",
                  "status": "4",
                  "time": 10000,
                  "set_time": 100
                }
              }
            ]
        },      
        "big_port_take_top_pair": {
            "priority": 129,
            "comment": "test",
            "commands": [
                {
                    "send_stm_cmd": {
                        "cmd": "SetLowDynamixelsPoses",
                        "cmd_params": "922999",
                        "sync": false
                    }
                },
                {
                    "move": {
                        "x": 0.39,
                        "y": 1.256,
                        "yaw": -0.52,
                        "speed": 0.3
                    }
                },
                {
                    "move": {
                        "x": 0.39,
                        "y": 1.7,
                        "yaw": -0.52,
                        "speed": 0.5
                    }
                },
                {
                    "send_stm_cmd": {
                        "cmd": "SetLowDynamixelsPoses",
                        "cmd_params": "911999"
                    }
                },
                {
                    "sleep": {
                        "comment": "#TAKE 1 1 2 2",
                        "time": 0.5
                    }
                }
            ]
        },
        "activate_lighthouse": {
            "priority": 128,
            "comment": "test",
            "commands": [
                {
                    "move": {
                        "x": 0.3,
                        "y": 1.78,
                        "yaw": -0.52,
                        "speed": 0.5
                    }
                },
                {
                    "send_stm_cmd": {
                        "cmd": "0xb1",
                        "sync": false,
                        "cmd_params": "1"
                    }
                },
                {
                    "move": {
                        "x": 0.3,
                        "y": 1.90,
                        "yaw": -0.52,
                        "speed": 1,
                        "check_zero_speed": true,
                        "off_avoidance": true,
                        "obstacle": false
                    }
                },
                {
                    "sleep": {
                        "time": 0.5
                    }
                },
                {
                    "move": {
                        "x": 0.3,
                        "y": 1.849,
                        "yaw": -0.52,
                        "speed": 0.4
                    }
                },
                {
                    "send_stm_cmd": {
                        "cmd": "0xb2",
                        "sync": false,
                        "cmd_params": "1"
                    }
                },
                {
                    "add_score": {
                      "comment": "for activating the lighthouse during the game (2+13)",
                      "score": 13
                    }
                },
                {
                    "send_stm_cmd": {
                        "cmd": "0xa2",
                        "cmd_params": "1"
                    }
                }
            ]
        },
        "big_port_take_bot_pair": {
            "priority": 127,
            "comment": "test",
            "commands": [
                {
                    "send_stm_cmd": {
                        "cmd": "SetLowDynamixelsPoses",
                        "cmd_params": "999229",
                        "sync": false
                    }
                },
                {
                    "move": {
                        "x": 0.39,
                        "y": 1.139,
                        "yaw": -1.57,
                        "speed": 0.5
                    }
                },
                {
                    "move": {
                        "x": 0.39,
                        "y": 0.80,
                        "yaw": -1.57,
                        "speed": 0.5
                    }
                },
                {
                    "send_stm_cmd": {
                        "comment": "#TAKE 4 4 3 3",
                        "cmd": "SetLowDynamixelsPoses",
                        "cmd_params": "999119"
                    }
                }
            ]
        },
        "lift_up_windsocks": {
            "priority": 126,
            "comment": "test",
            "commands": [
                {
                    "move": {
                        "x": 0.15,
                        "y": 0.55,
                        "yaw": 0.52,
                        "speed": 0.4
                    }
                },
                {
                    "send_stm_cmd": {
                        "cmd": "0xb3",
                        "sync": false,
                        "cmd_params": "1"
                    }
                },
                {
                    "move": {
                        "x": 0.15,
                        "y": 0.105,
                        "yaw": 0.52,
                        "obstacle": false,
                        "speed": 0.2,
                        "off_avoidance": true
                    }
                },
                {
                    "move": {
                        "comment": "action (0.92 = 0.52 + 0.4)",
                        "x": 0.72,
                        "y": 0.105,
                        "yaw": 0.52,
                        "obstacle": false,
                        "check_zero_speed": true,
                        "speed": 0.9
                    }
                },
                {
                    "move": {
                        "comment": "1.12 = 0.92 + 0.2",
                        "x": 0.8,
                        "y": 0.11,
                        "yaw": 1.12,
                        "obstacle": false,
                        "speed": 0.4
                    }
                },
                {
                    "move": {
                        "x": 0.75,
                        "y": 0.4,
                        "yaw": 0.52,
                        "obstacle": false,
                        "speed": 0.5
                    }
                },
                {
                    "send_stm_cmd": {
                        "cmd": "0xb2",
                        "sync": false,
                        "cmd_params": "1"
                    }
                },
                {
                    "add_score": {
                      "comment": "15 points if both windsocks are lifted up by the end of the game",
                      "score": 15
                    }
                }
            ]
        },
        "small_port_push_pair": {
            "priority": 125,
            "comment": "test",
            "commands": [
                {
                    "move": {
                        "x": 1.815,
                        "y": 0.6,
                        "yaw": 0.52,
                        "speed": 0.5
                    }
                },
                {
                    "send_stm_cmd": {
                        "cmd": "SetLowDynamixelsPoses",
                        "cmd_params": "499994"
                    }
                },
                {
                    "move": {
                        "x": 1.790,
                        "y": 0.17,
                        "yaw": 0.52,
                        "speed": 0.3
                    }
                },
                {
                    "add_score": {
                      "comment": "pair",
                      "score": 6
                    }
                },
                {
                    "move": {
                        "comment": "move some back #DROP 2 1",
                        "x": 1.790,
                        "y": 0.22,
                        "yaw": 0.52,
                        "speed": 0.4
                    }
                },
                {
                    "send_stm_cmd": {
                        "cmd": "SetLowDynamixelsPoses",
                        "cmd_params": "099990"
                    }
                }
            ]
        },

        "small_port_drop23": {
            "priority": 124,
            "comment": "test",
            "commands": [
                {
                    "move": {
                        "comment": "rotation",
                        "x": 1.8,
                        "y": 0.27,
                        "yaw": 2.62,
                        "speed": 0.4
                    }
                },
                {
                    "sleep": {
                        "time": 0.2
                    }
                },
                {
                    "send_stm_cmd": {
                        "cmd": "SetLowDynamixelsPoses",
                        "cmd_params": "944999"
                    }
                },
                {
                    "move": {
                        "x": 1.8,
                        "y": 0.35,
                        "yaw": 2.62,
                        "speed": 0.4
                    }
                },
                {
                    "add_score": {
                      "comment": "pair",
                      "score": 6
                    }
                },
                {
                    "sleep": {
                        "time": 0.1
                    }
                },
                {
                    "send_stm_cmd": {
                        "cmd": "SetLowDynamixelsPoses",
                        "cmd_params": "900999"
                    }
                },
                {
                    "move": {
                        "x": 1.8,
                        "y": 0.40,
                        "yaw": 2.62,
                        "speed": 0.4
                    }
                },
                {
                    "move": {
                        "x": 1.8,
                        "y": 0.36,
                        "yaw": 4.71,
						"speed": 0.3,
						"dist": 0.019
                    }
                },
                {
                    "sleep": {
                        "time": 1
                    }
                },
                {
                    "send_stm_cmd": {
                        "cmd": "SetLowDynamixelsPoses",
                        "cmd_params": "999449"
                    }
                },
                {
                    "move": {
                        "x": 1.8,
                        "y": 0.75,
                        "yaw": 4.71,
                        "speed": 0.4
                    }
                },
                {
                    "add_score": {
                      "comment": "pair",
                      "score": 6
                    }
                },
                {
                    "send_stm_cmd": {
                        "cmd": "SetLowDynamixelsPoses",
						"cmd_params": "999009",
						"sync": false
                    }
                }
            ]
        },

		"grip_bouys": {
			"priority": 123,
			"commands":[
				{
					"move": {
						"x": 0.55,
						"y": 0.4,
						"yaw": 3.14,
						"speed": 0.4,
						"dist": 0.15
					}
				},
				{
					"move": {
						"x": 0.4,
						"y": 0.4,
						"yaw": 3.14,
						"speed": 0.3,
						"obstacle": false,
						"dist": 0.06
					}
				},
				{
					"move": {
						"x": 0.09,
						"y": 0.4,
						"yaw": 3.14,
						"speed": 0.15,
                        "check_zero_speed": true,
                        "off_avoidance": true,
                        "obstacle": false
					}
				},
				{
					"sleep": {
						"time": 1
					}
				},
                {
                    "send_stm_cmd": {
                        "cmd": "0xb5",
                        "cmd_params": ""
                    }
                },
				{
					"sleep": {
						"time": 10
					}
				}
			]
		},
		"drop_bouys": {
			"priority": 122,
			"commands":[
				{
					"move": {
						"x": 0.2,
						"y": 0.4,
						"yaw": 1.57,
						"speed": 0.3,
						"off_avoidance": true,
						"obstacle": false
					}
				},
				{
					"move": {
						"x": 0.2,
						"y": 0.77,
						"yaw": 1.57,
						"speed": 0.3,
						"off_avoidance": true,
						"obstacle": false
					}
				},
				{
					"move": {
						"x": 0.2,
						"y": 0.8,
						"yaw": 1.57,
						"speed": 0.05,
						"off_avoidance": true,
						"obstacle": false,
						"corr_enable":false
					}
				},
                {
                    "send_stm_cmd": {
                        "cmd": "0xb7",
                        "cmd_params": ""
                    }
                },
                {
                    "sleep": {
                        "time": 3
                    }
				},
                {
                    "add_score": {
                      "comment": "(2*3 + 2) #PUT5 red green red green red",
                      "score": 8
                    }
                },
                {
                    "send_stm_cmd": {
                        "cmd": "0xb6",
                        "cmd_params": ""
                    }
                }
			]
		},
        "anchor_south": {
            "priority": 120,
            "comment": "TODO",
            "commands": [
                {
                    "move": {
                        "x": 0.2,
                        "y": 0.65,
                        "yaw": 1.57,
                        "speed": 0.5
                    }
                },
                {
                    "add_score": {
                      "comment": "M[X] = (10+5)/2 #FINISH",
                      "score": 7
                    }
                },
                {
                    "sleep": {
                        "time": 125
                    }
                }
            ]
        },
        "anchor_north": {
            "priority": -120,
            "comment": "TODO",
            "commands": [
                {
                    "move": {
                        "x": 0.2,
                        "y": 1.66,
                        "yaw": 4.71,
                        "speed": 0.5
                    }
                },
                {
                    "add_score": {
                      "comment": "M[X] = (10+5)/2 #FINISH",
                      "score": 7
                    }
                },
                {
                    "sleep": {
                        "time": 125
                    }
                }
            ]
        }
    }
}
`;


let strategy;
let patterns_container;
let current_pattern = undefined, current_pattern_name;

let selected_move = undefined, semi_selected_move = undefined, selected_move_note;

function updParamValue(index, param) { ///TODO type when add new param
    var command = current_pattern.commands[index]

    for(var c in command) {
        var type = typeof(current_pattern.commands[index][c][param]);
        var val = document.getElementById(`cmd_${index}_${param}`).value;

        if(type == "number") val = Number(val)
        if(type == "boolean") val = (val == 'true')

        current_pattern.commands[index][c][param] = val;
    }

    //robot1.strategy = adaptStrategy(strategy);
    unityInstance.SendMessage('Comm', 'setScenario', convertToNewFormat(adaptStrategy(strategy)));
}

function deleteCommand(command, c, index) {
    if(c == 'move') {
        selected_move_note = undefined
    }
    current_pattern.commands.splice(index, 1);
    showPatternInfo(current_pattern_name);
}

function swapTwoCommands(index1, index2) {
    [current_pattern.commands[index1], current_pattern.commands[index2]] = 
    [current_pattern.commands[index2], current_pattern.commands[index1]];

    showPatternInfo(current_pattern_name);
}

function addParam(c, index, typename, param) {
    value = ""
    switch(typename) {
        case "int":
            value = Number(value);
            break;

        case "bool":
            value = false;
            break;
            
        case "string":
            value = "";
            break;
        
    }

    current_pattern.commands[index][c][param] = value;
    
    showPatternInfo(current_pattern_name);
}

function addCommandNote(command, c, index) {
    var cmd = document.createElement("div");
    cmd.className = "command";
    cmd.id = "command_" + c;

    content = `
    <h3 style="margin-bottom: .1em; padding-bottom: .1em; color: ${c == 'move' ? '#383' : '#000'}">${c}</h3>
    <span class="close" onclick="deleteCommand('${command}', '${c}', ${index})">&times;</span>
    <span class="close" style="${index == 0 ? "display:none" : ""}" onclick="swapTwoCommands(${index-1}, ${index})">&uarr;</span><span style="${index >= current_pattern.commands.length-1 ? "display:none" : ""}" class="close" onclick="swapTwoCommands(${index+1}, ${index})">&darr;</span><br>`;

    if(c == 'move') {
        cmd.onclick = function() {
            document.querySelectorAll(".command").forEach(x => x.style.background = "#fff");
            cmd.style.background = "#cfc";
            selected_move = command[c];
            selected_move_note = "cmd_" + index;

            unityInstance.SendMessage('Comm', 'showRobotPreview', command[c].x + ' ' + command[c].y + ' ' + command[c].yaw);
            unityInstance.SendMessage('Comm', 'showRobotPointer', 'true');
        }

        cmd.onmouseover = function() {
            ////semi_selected_move = command[c]
            semi_selected_move = command[c]
            unityInstance.SendMessage('Comm', 'showRobotPrePreview', command[c].x + ' ' + command[c].y + ' ' + command[c].yaw);
        }
        
        cmd.onmouseout = function() {
            ////if(semi_selected_move == command[c]) semi_selected_move = undefined
            if(semi_selected_move == command[c]) semi_selected_move = undefined
            unityInstance.SendMessage('Comm', 'hideRobotPrePreview');
        }
    }

    for(param in command[c]) {
        content += `<p><span contenteditable="true" class="command_param">${param}</span>
        <input id="cmd_${index}_${param}" type="text" class="command_value" oninput="updParamValue(${index}, '${param}')" value="${command[c][param]}" />
        <span class="close">&times;</span></p>`;
    }

    content += `<p><input id="${index}_newparam" class="command_param" type="text" placeholder="new param"></input>
        <select id="${index}_newtype" class="command_value" style="width: 6em; height: 1.7em;" id="type">
        <option value="string">string</option>
        <option value="int">int</option>
        <option value="bool">bool</option>
        </select><button style="margin-left:.2em; height:1.4em;" onclick="addParam('${c}', ${index}, document.getElementById('${index}_newtype').value, document.getElementById('${index}_newparam').value)"> add </button>`;

    cmd.innerHTML = content;

    document.getElementById("commands").appendChild(cmd);
}

function addNewCommand(name) {
    var new_command = {};
    new_command[name] = {};

    if(current_pattern == undefined) return;

    switch(name) {
        case "move":
            new_command[name]["x"] = 0;
            new_command[name]["y"] = 0;
            new_command[name]["yaw"] = 0;
            new_command[name]["speed"] = 0.3;
        break;

        case "send_stm_cmd":
            new_command[name]["cmd"] = "SetLowDynamixelPoses";
            new_command[name]["params"] = "000000";
            new_command[name]["sync"] = true;
        break;

        case "sleep":
            new_command[name]["time"] = 1000;
        break;

        case "wait_status":
            new_command[name]["cmd"] = "";
            new_command[name]["status"] = "";
            new_command[name]["time"] = 1000;
        break;

        case "add_score":
            new_command[name]["score"] = 0;
        break;

        default:
            new_command[name]["comment"] = "...";
        break;
    }

    current_pattern.commands.push(new_command);

    //robot1.strategy = adaptStrategy(strategy);
    unityInstance.SendMessage('Comm', 'setScenario', convertToNewFormat(adaptStrategy(strategy)));
}

function updPriority() {
    current_pattern.priority = document.getElementById("current_pattern_priority").value;
    //console.log(document.getElementById("pattern_" + current_pattern_name +"_priority"))
    document.getElementById("pattern_" + current_pattern_name +"_priority").innerHTML = current_pattern.priority;

    //robot1.strategy = adaptStrategy(strategy);
    unityInstance.SendMessage('Comm', 'setScenario', convertToNewFormat(adaptStrategy(strategy)));
}

function updComment() {
    current_pattern.comment = document.getElementById("current_pattern_comment").value;
    document.getElementById("pattern_"+current_pattern_name+"_comment").innerHTML = current_pattern.comment;
}
//+
function showPatternInfo(pattern_name) {
    let pattern = strategy.patterns[pattern_name];

    if(pattern == undefined) return;

    current_pattern_name = pattern_name;

    document.getElementById("current_pattern_name").innerHTML = pattern_name;
    document.getElementById("current_pattern_priority").value = pattern.priority;
    document.getElementById("current_pattern_comment").value = pattern.comment;

    document.getElementById("commands").innerHTML = "";

    index = 0;
    pattern.commands.forEach(command => {
        for(var c in command) {
            addCommandNote(command, c, index++)
        }
    });

    unityInstance.SendMessage('Comm', 'hideRobotPreview');
    unityInstance.SendMessage('Comm', 'showRobotPointer', 'false');
}
//+
function toggle(pattern_note_id) {
    var button = document.querySelector("#" + pattern_note_id + " .toggle")

    button.innerText = button.innerText == 'ON' ? 'OFF' : 'ON'

    button.style.background = button.innerText == 'ON' ? '#afa' : '#faa'

    //robot1.strategy = adaptStrategy(strategy)
    unityInstance.SendMessage('Comm', 'setScenario', convertToNewFormat(adaptStrategy(strategy)));
}
//+
function addPatternNote(name, priority, comment) {
    var note = document.createElement("div");
    note.className = "pattern";
    note.id = "pattern_" + name;
    note.onclick = () => { current_pattern = strategy.patterns[name]; showPatternInfo(name) };

    note.innerHTML = `<button class="toggle" onclick="toggle('${note.id}')"> ON </button>
    <h3>${name}</h3>
    <span class="close">&times;</span><br>
    <span id="${"pattern_" + name + "_priority"}" class="pattern_priority">${priority}</span>
    <span id="${"pattern_" + name + "_comment"}">${comment}</span>`

    patterns_container.appendChild(note)
}

function parseDynValues(p) {
    values = []

    for(var i=0; i<6; i++) values[Math.abs(i+2)%6] = parseInt(p[i])

    return values
}
/*
function adaptCommand(c, params) {
    switch(c) {
        case "move":
            return {name: 'move', point: [params.x*1000, 2000-params.y*1000, typeof(params.yaw) == "number" ? params.yaw : Number(params.yaw)], speed: params.speed != undefined ? params.speed * 1000 * 0.95 : ROBOT_SPEED_STD}
    
        case "sleep":
            return {name: 'sleep', time: params.time * 1000};

        case "add_score":
            return {name: 'addscore', score: params.score};

        case "send_stm_cmd":
            if(params.cmd == 'SetLowDynamixelsPoses') {
                return { name: 'dynamixel', values: parseDynValues(params.cmd_params), delay: DYNAMIXEL_DELAY}
            }
    }

    return {name: 'sleep', time: 0.1};
}
*/

function adaptCommand(c, params) {
    switch(c) {
        case "move":
            return {name: 'move', x: params.x, y: params.y, yaw: params.yaw, dist: params.dist, speed: params.speed}
    
        case "sleep":
            return {name: 'sleep', time: params.time};

        case "add_score":
            return {name: 'addscore', score: params.score};

        case "send_stm_cmd":
            if(params.cmd == 'SetLowDynamixelsPoses') {
                return { name: 'dynamixel', values: params.cmd_params, sync: params.sync }
            } else  {
                return { name: 'stm', cmd: params.cmd, values: params.cmd_params, sync: params.sync }
            }
    }

    return {name: 'sleep', time: 0.1};
}

function makeCommandsFromComment(comment) {
    let lexemes = comment.substring(comment.indexOf("#") + 1).split(' ')
    let commands = []

    if(lexemes[0] == 'TAKE') {
        for(var i=1; i<lexemes.length; i+=2) {
            commands.push({
                name: 'take',
                bouy_id: parseInt(lexemes[i]),
                place_id: parseInt(lexemes[i+1]),
                delay: 0 
            });
        }
    }

    if(lexemes[0] == 'DROP') {
        commands.push({ name: 'drop', places: [lexemes[1], lexemes[2]], time: DROP_DELAY, offsets: [[-60, 55], [60, 55]] },);
    }

    if(lexemes[0] == 'PUT5') {
        commands.push({ name: 'put5', bouys: [lexemes[1], lexemes[2], lexemes[3], lexemes[4], lexemes[5]], time: 500})
    }

    if(lexemes[0] == 'FINISH') {
        commands.push({ name: 'finish' });
    }

    return commands;
}

function adaptStrategy(str) {
    output = []

    for(var pr = 999; pr >= 0; pr--) {
        for(p in str.patterns) {
            if(str.patterns[p].priority == pr) {
                let q = document.querySelector("#pattern_" + p + " .toggle")
                if(q != null && q.innerText == 'OFF') continue;

                str.patterns[p].commands.forEach(command => {
                    for(var c in command) {
                        output.push(adaptCommand(c, command[c]))

                        if(command[c].comment && command[c].comment.includes('#')) {
                            cmds = makeCommandsFromComment(command[c].comment)
                            cmds.forEach(c => { output.push(c) })
                            //console.log(output)
                        }
                    }
                });
            }
        }
    }

    output.push({name: 'finish'});

    return output;
}

var bouy_display = false;
function toggleBouy() {
    button = document.getElementById("tBouy");
    bouy_display = !bouy_display;

    button.innerText = bouy_display ? 'hide bouy IDs' : 'show bouy IDs'

    //button.style.background = button.bouy_display == 'ON' ? '#afa' : '#faa'

    unityInstance.SendMessage('Comm', 'showBouyIds', bouy_display ? 'true' : 'false');
}

var path_display = false;
function togglePath() {
    button = document.getElementById("tPath");
    path_display = !path_display;

    button.innerText = path_display ? 'hide path' : 'show path'

    //button.style.background = button.bouy_display == 'ON' ? '#afa' : '#faa'

    unityInstance.SendMessage('Comm', 'showPath', path_display ? 'true' : 'false');
}

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function convertToNewFormat(strategy) {
    output = ""

    for(var i=0; i<strategy.length; i++) {
        output += strategy[i].name + "\n";
        for(var p in strategy[i]) if(p!="name") output += "\t" + p + ": " + strategy[i][p] + "\n"
    }

    return output;
}

function publishRobotCoords(x, y, yaw) {
    document.getElementById('coords').innerHTML =
    ` <span style="display:inline-block; width:4em"><b>X:</b> ${(x).toFixed(3)}</span>
      <span style="display:inline-block; width:4em"><b>Y:</b> ${(y).toFixed(3)}</span>
      <span style="display:inline-block; width:4em"><b>W:</b> ${(yaw).toFixed(2)}</span>`;
}

let total_score = 0
function publishScore(x) {
    total_score += x;
    document.getElementById('score').innerHTML='<b>SCORE: </b>' + round(total_score)+'<span style="color:gray;">(abs max 129)</span>';
}

function setMoveCoords(x, y, yaw) {
    if(selected_move != undefined) {
  
        selected_move.x = x;
        selected_move.y = y;
        selected_move.yaw = yaw;
        
        document.getElementById(selected_move_note + "_x").value = selected_move.x;
        document.getElementById(selected_move_note + "_y").value = selected_move.y;
        document.getElementById(selected_move_note + "_yaw").value = selected_move.yaw;
        
        
        if(selected_move != undefined) {
            unityInstance.SendMessage('Comm', 'showRobotPreview', selected_move.x + ' ' + selected_move.y + ' ' + selected_move.yaw);
        }
        unityInstance.SendMessage('Comm', 'setScenario', convertToNewFormat(adaptStrategy(strategy)));
    }
}

function setupReadmePopup() {
    // Get the modal
    var modal = document.getElementById("readme_popup");

    // Get the button that opens the modal
    var btn = document.getElementById("readme_btn");

    // Get the <span> element that closes the modal
    var span = document.getElementById("readme_close");

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function setupAll() {
    strategy = JSON.parse(json_src);
    patterns_container = document.getElementById("patterns");

    //robot1.strategy = adaptStrategy(strategy);
    unityInstance.SendMessage('Comm', 'setScenario', convertToNewFormat(adaptStrategy(strategy)));

    //robot1.curr_state = robot1.strategy.length-1
    unityInstance.SendMessage('Comm', 'stop');

    document.getElementById("sketch-holder").style.width = WIDTH

    for (var pattern in strategy.patterns) {
		var q = strategy.patterns[pattern];

        addPatternNote(pattern, q.priority, q.comment)
    }

    //patterns_container.appendChild(note)

    setupReadmePopup()

    //setInterval(() => controlRobot(robot1), DT);

    unityInstance.SendMessage('Comm', 'restart');
    unityInstance.SendMessage('Comm', 'setScenario', convertToNewFormat(adaptStrategy(strategy)));
    unityInstance.SendMessage('Comm', 'setScenario', stop());
}

window.onload = setupAll;

window.onresize = function() {
    console.log("*-*")
    WIDTH = window.innerWidth * 0.4;
    HEIGHT = WIDTH*2/3
    SCALE = WIDTH / 3000
    //document.getElementById("sketch-holder").style.width = WIDTH;
    //document.getElementById("sketch-holder").style.height = HEIGHT;
    setupBoard();
}