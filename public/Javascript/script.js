//Elements that need to be targeted
let start = document.getElementById("start");
let cells = Array.from(document.getElementsByClassName("cell"));
let playerOneSelect = document.getElementById("playerOne");
let playerTwoSelect = document.getElementById("playerTwo");
let clock = document.getElementById("clock");


//Global variable

let playerOne = "X";
let playerTwo = "O";
let playerTurn = playerOne;
let interval;
let clockCount = 0;
let moveCounter = 0;




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
  if (playerTurn === playerOne) {
    playerTurn = playerTwo
    statusArea.textContent = (playerTwoSelect + " has won! Play again?");
    boardReset();
  } else if (playerTurn === playerTwo) {
    statusArea.textContent = (playerOneSelect + " has won! Play again?");
    boardReset();
  };

}

//Function to begin the game. Listens for a start to the game. Displays whos turn it is. Begins the game timer. Adds listeners to each cell. 
function startFunction() {
  start.addEventListener("click", () => {
    clockCount = 0;
    console.log(playerOneSelect);
    playerOneSelect = document.getElementById("playerOne");
    console.log(playerOneSelect);

    playerTwoSelect = document.getElementById("playerTwo");
    console.log(playerTwoSelect);

    playerOneSelect = playerOneSelect.value;
    playerTurn = playerOne;
    playerTwoSelect = playerTwoSelect.value;
    statusArea.textContent = playerOneSelect;


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
    statusArea.textArea = playerTwoSelect;
  } else if (playerTurn === playerTwo) {
    playerTurn = playerOne;
    statusArea.textArea = playerTwoSelect;
  };
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
  if (playerTurn === playerOne) {
    statusArea.textContent = "It is " + playerOneSelect + "'s turn!";
  } else statusArea.textContent = "It is " + playerTwoSelect + "'s turn!";

}

//Updates the timer
function updateClock() {
  clock.textContent = clockCount;
  clockCount += 1;
}

//Resets the Board
function boardReset() {

  start.disabled = false;
  start.textContent = "Play Again!";
  moveCounter = 0;
  start.addEventListener("click", removeEventListener);




  startFunction();
}

//Clears Timer Interval for the Next Game
function myStopFunction() {
  clearInterval(interval);
}

//Removes the Event Listeners from the Board
function removesEventListener() {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.removeEventListener("click", clicked);
    cell.removeEventListener("click", clickedBefore);
  });
}

startFunction();


//Bugs to fix
//Need to draw line through winner and prevent extra clicks
//Clock speeding up