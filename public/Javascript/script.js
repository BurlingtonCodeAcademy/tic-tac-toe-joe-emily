//Global variable

let playerOne = "X";
let playerTwo = "O";
let playerOneMoves = [];
let playerTwoMoves = [];
let playerTurn = playerOne;
let interval;
let clockCount = 0;
let moveCounter = 0;


//Elements that need to be targeted
let start = document.getElementById("start");
let cells = Array.from(document.getElementsByClassName("cell"));
let playerOneName = document.getElementById("playerOne");
let playerTwoName = document.getElementById("playerTwo");
let clock = document.getElementById("clock");

//Every move adds to the moves and checks for a win. If it is more than 8 moves, declares a draw.
function moves() {
  if (moveCounter < 9) {
    checkWin();
  } else if ((moveCounter = 9)) {
    statusArea.textContent = "It's a Draw";
    boardReset();
  }
  moveCounter++;
}

//Function that checks whether or not there is a win
function checkWin() {
  if (
    cellone.textContent === "X" &&
    celltwo.textContent === "X" &&
    cellthree.textContent === "X"
  ) {
    gameSatisfied();
  } else if (
    cellfour.textContent === "X" &&
    cellfive.textContent === "X" &&
    cellsix.textContent === "X"
  ) {
    gameSatisfied();
  } else if (
    cellseven.textContent === "X" &&
    celleight.textContent === "X" &&
    cellnine.textContent === "X"
  ) {
    gameSatisfied();
  } else if (
    cellone.textContent === "X" &&
    cellfour.textContent === "X" &&
    cellseven.textContent === "X"
  ) {
    gameSatisfied();
  } else if (
    celltwo.textContent === "X" &&
    cellfive.textContent === "X" &&
    celleight.textContent === "X"
  ) {
    gameSatisfied();
  } else if (
    cellthree.textContent === "X" &&
    cellsix.textContent === "X" &&
    cellnine.textContent === "X"
  ) {
    gameSatisfied();
  } else if (
    cellone.textContent === "X" &&
    cellfive.textContent === "X" &&
    cellnine.textContent === "X"
  ) {
    gameSatisfied();
  } else if (
    cellthree.textContent === "X" &&
    cellfive.textContent === "X" &&
    cellseven.textContent === "X"
  ) {
    gameSatisfied();
  } else if (
    cellone.textContent === "O" &&
    celltwo.textContent === "O" &&
    cellthree.textContent === "O"
  ) {
    gameSatisfied();
  } else if (
    cellfour.textContent === "" &&
    cellfive.textContent === "O" &&
    cellsix.textContent === "O"
  ) {
    gameSatisfied();
  } else if (
    cellseven.textContent === "O" &&
    celleight.textContent === "O" &&
    cellnine.textContent === "O"
  ) {
    gameSatisfied();
  } else if (
    cellone.textContent === "O" &&
    cellfour.textContent === "O" &&
    cellseven.textContent === "O"
  ) {
    gameSatisfied();
  } else if (
    celltwo.textContent === "O" &&
    cellfive.textContent === "O" &&
    celleight.textContent === "O"
  ) {
    gameSatisfied();
  } else if (
    cellthree.textContent === "O" &&
    cellsix.textContent === "O" &&
    cellnine.textContent === "O"
  ) {
    gameSatisfied();
  } else if (
    cellone.textContent === "O" &&
    cellfive.textContent === "O" &&
    cellnine.textContent === "O"
  ) {
    gameSatisfied();
  } else if (
    cellthree.textContent === "O" &&
    cellfive.textContent === "O" &&
    cellseven.textContent === "O"
  ) {
    gameSatisfied();
  }
}

//A win has been satisfied. Alerts the game status area and resets the board
function gameSatisfied() {
  winner = true;
  statusArea.textContent = playerTurn + " has won! Play again?";
  boardReset();
}

//Function to begin the game
function startFunction() {
  start.addEventListener("click", () => {
    start.disabled = true;
    displayStatusArea();
    interval = setInterval(() => {
      updateClock();
    }, 1000);
    cells.forEach((cell) => {
      cell.addEventListener("click", clicked);
    });
  });
}

//Function to add a mark to a cell when clicked
function clicked(event) {
  event.target.textContent = playerTurn;
  event.target.removeEventListener("click", clicked);
  event.target.addEventListener("click", clickedBefore);
 
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
  boardState = [false, false, false, false, false, false, false, false, false];

  start.disabled = false;
  start.textContent = "Play Again!";

  start.addEventListener("click", () => {
    removeEventListener();
  });
  startFunction();
  moveCounter = 0;
  playerTurn = playerOne;
}

function removeEventListener() {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.removeEventListener("click", clicked);
    cell.removeEventListener("click", clickedBefore);
  });
}

startFunction();
