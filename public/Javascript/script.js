//Global variable

let playerOne = "X";
let playerTwo = "O";
let playerTurn = playerOne;
let start = document.getElementById("start");
let cells = Array.from(document.getElementsByClassName("cell"));
let wins = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,9]]
let playerOneName=document.getElementById("playerOne");
let playerTwoName= document.getElementById("playerTwo");
let clockCount= 0;
let clock= document.getElementById("clock")
let interval;



//Function to begin the game
start.addEventListener("click", () => {

  start.disabled = true;
  displayStatusArea();
  interval= setInterval(()=>{updateClock()}, 1000)
  cells.forEach((cell) => {
    cell.addEventListener("click", clicked);
//Set interval, clear at the end of the game

  });
});

//Function to add a mark to a cell when clicked
function clicked(event) {
  event.target.textContent = playerTurn;
  event.target.removeEventListener("click", clicked);
  event.target.addEventListener("click", clickedBefore)
  if (playerTurn === playerOne) {
    playerTurn = playerTwo;
  } else playerTurn = playerOne;
  displayStatusArea();
  
}

function clickedBefore() {
statusArea.textContent="Please select an empty cell";
}

//Function to display status area
function displayStatusArea() {
  let statusArea = document.getElementById("statusArea");
  statusArea.textContent = "It is " + playerTurn + "'s turn!";
}

//Updates the timer
function updateClock(){
    clock.textContent= clockCount;
    clockCount +=1;
}