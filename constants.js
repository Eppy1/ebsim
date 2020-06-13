const BTAB = 64;
let WIDTH = /*640*/ window.innerWidth*0.4, HEIGHT = WIDTH*2/3;
let SCALE = WIDTH / 3000;
const BUOY_R = 36;

const ROBOT_PERIMETER = [
    [93, 101],
    [41, 131],
    [-134, 30],
    [-134, -30],
    [41, -131],
    [93, -101]
]
  
const ROBOT_PERIMETER_TOP = [
    [103.35, 99],
    [34.06, 139],
    [-137.41, 40.00],
    [-137.41, -40.00],
    [34.06, -139],
    [103.35, -99]
]

const CONT_PERIMETER = [
    [90, 36],
    [-14, 96],
    [-76, 60],
    [-76, -60],
    [-14, -96],
    [90, -36]
]

const  RED = '#D12023',
     GREEN = '#007644',
      BLUE = '#005A9F',
    YELLOW = '#FCC300',
    DKGRAY = '#555',
    LTGRAY = '#999';

const DT = 25;

const OFF_R = [
    [],
    [],
    [],
    [16, 28.5],
    [60, 45],
    [92, 33]
]

const OFF_L = [
    [],
    [],
    [],
    [-16, 28.5],
    [-60, 45],
    [-92, 33]
]

const ROBOT_SPEED_STD = 650;
const ROBOT_SPEED_SLOW = 900;
const ANGULAR_SPEED_STD = 3.5;//500 / (2*Math.PI * 120);


let TAKE_DELAY = 300;
let DROP_DELAY = 400;
let DYNAMIXEL_DELAY = 600;