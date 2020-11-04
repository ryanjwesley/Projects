// Global variables
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
const startButton = document.getElementById('start');
let numClosedDoors = 3;
let openDoor1 = null;
let openDoor2 = null;
let openDoor3 = null;
let currentlyPlaying = true;

// Functions
const isBot = door => door.src === botDoorPath ? true : false;

const isClicked = door => door.src === closedDoorPath ? false : true;

const playDoor = door => (numClosedDoors--, numClosedDoors === 0 ? gameOver('win') : isBot(door) ? gameOver() : null);

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoors);
    choreDoor === 0 ? ([openDoor1, openDoor2, openDoor3] = [botDoorPath, spaceDoorPath, beachDoorPath]) : 
    choreDoor === 1 ? (openDoor1 = spaceDoorPath, openDoor2 = botDoorPath, openDoor3 = beachDoorPath) : 
    choreDoor === 2 ? (openDoor1 = spaceDoorPath, openDoor2 = beachDoorPath, openDoor3 = botDoorPath) : 
    null
};

doorImage1.onclick = () => currentlyPlaying && !isClicked(doorImage1) ? (doorImage1.src = openDoor1, playDoor(doorImage1)) : null; 
doorImage2.onclick = () => currentlyPlaying && !isClicked(doorImage2) ? (doorImage2.src = openDoor2, playDoor(doorImage2)) : null;
doorImage3.onclick = () => currentlyPlaying && !isClicked(doorImage3) ? (doorImage3.src = openDoor3, playDoor(doorImage3)) : null;

const startRound = () => {
  [doorImage1.src, doorImage2.src, doorImage3.src] = [closedDoorPath, closedDoorPath, closedDoorPath];
  numClosedDoors = 3;
  startButton.innerHTML = "Good luck!";
  currentlyPlaying = true;
  randomChoreDoorGenerator();
};

startButton.onclick = () => !currentlyPlaying ? startRound() : null;

const gameOver = status => ((status === 'win' ? startButton.innerHTML = "You win! Play again?" : startButton.innerHTML = "Game over! Play again?"), currentlyPlaying = false);

startRound();