//Global variable

let playerOne = "X";
let playerTwo = "O";
let playerOneMoves = [];
let playerTwoMoves = [];
let playerTurn = playerOne;
let wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 9]
];
let boardState = [false, false, false, false, false, false, false, false, false];
let interval;
let clockCount = 0;
let moveCounter = 0;

//Elements that need to be targeted
let start = document.getElementById("start");
let cells = Array.from(document.getElementsByClassName("cell"));
let playerOneName = document.getElementById("playerOne");
let playerTwoName = document.getElementById("playerTwo");
let clock = document.getElementById("clock")

// Need to check cells of player X and Player O and the Amount of moves to determine winner 

//Need a function to count the moves of the players if 8 moves are counted and there is no winner, game results in a draw would need to add the count to an empty string to convert to an array
function moves() {
  moveCounter++
  if (moveCounter < 9) {
    console.log(moveCounter)
    //checkWin();
  } else if (moveCounter = 9) {
    statusArea.textContent = ("It's a Draw");
    boardReset();
  }
}

//Function to begin the game
start.addEventListener("click", () => {

  start.disabled = true;
  displayStatusArea();
  interval = setInterval(() => {
    updateClock()
  }, 1000)
  cells.forEach((cell) => {
    cell.addEventListener("click", clicked);
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
  moves();


}

//Function to alert the user that they have selected the cell before
function clickedBefore() {
  statusArea.textContent = "Please select an empty cell";
}

//Function to display status area
function displayStatusArea() {
  let statusArea = document.getElementById("statusArea");
  statusArea.textContent = "It is " + playerTurn + "'s turn!";
}

//Updates the timer
function updateClock() {
  clock.textContent = clockCount;
  clockCount += 1;
}

//Resets the Board
function boardReset() {

  boardState = [false, false, false, false, false, false, false, false, false]

  start.disabled = false;
  start.textContent = 'Play Again!'

  start.addEventListener("click", () => {
    removeEventListener()
  })
}

function removeEventListener() {
  cells.forEach((cell) => {
    cell.textContent = ""
    cell.removeEventListener('click', clicked)
    cell.removeEventListener('click', clickedBefore)
  })
}