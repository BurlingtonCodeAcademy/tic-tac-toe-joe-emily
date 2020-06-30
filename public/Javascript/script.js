/*background colors do not reset!
tie game doesn't register
*/
//Elements that need to be targeted
let start = document.getElementById("start");
let cells = Array.from(document.getElementsByClassName("cell"));
let playerOneSelect = document.getElementById("playerOne");
let playerTwoSelect = document.getElementById("playerTwo");
let clock = document.getElementById("clock");
let computerButton = document.getElementById('computerPlayer');
//Global variable

let playerOne = "X";
let playerTwo = "O";
let playerTurn = playerOne;
let interval;
let clockCount = 0;
let moveCounter = 0;
let AI = false;



//Every move adds to the moves and checks for a win. If it is more than 8 moves, declares a draw.
function moves() {
  if (moveCounter < 8) {
    checkWin();
  } else if ((moveCounter = 8)) {
    statusArea.textContent = "It's a Draw";
    boardReset();
  }
  moveCounter++;
}

//Function that checks whether or not there is a win
function checkWin() {
  if (
    cellOne.textContent === "X" &&
    cellTwo.textContent === "X" &&
    cellThree.textContent === "X"
  ) {
    gameSatisfied();
    markWin([cellOne, cellTwo, cellThree])
  } else if (
    cellFour.textContent === "X" &&
    cellFive.textContent === "X" &&
    cellSix.textContent === "X"
  ) {
    gameSatisfied();
    markWin([cellFour, cellFive, cellSix])
  } else if (
    cellSeven.textContent === "X" &&
    cellEight.textContent === "X" &&
    cellNine.textContent === "X"
  ) {
    gameSatisfied();
    markWin([cellSeven, cellEight, cellNine])
  } else if (
    cellOne.textContent === "X" &&
    cellFour.textContent === "X" &&
    cellSeven.textContent === "X"
  ) {
    gameSatisfied();
    markWin([cellOne, cellFour, cellSeven])
  } else if (
    cellTwo.textContent === "X" &&
    cellFive.textContent === "X" &&
    cellEight.textContent === "X"
  ) {
    gameSatisfied();
    markWin([cellTwo, cellFive, cellEight])
  } else if (
    cellThree.textContent === "X" &&
    cellSix.textContent === "X" &&
    cellNine.textContent === "X"
  ) {
    gameSatisfied();
    markWin([cellThree, cellSix, cellNine])
  } else if (
    cellOne.textContent === "X" &&
    cellFive.textContent === "X" &&
    cellNine.textContent === "X"
  ) {
    gameSatisfied();
    markWin([cellOne, cellFive, cellNine])
  } else if (
    cellThree.textContent === "X" &&
    cellFive.textContent === "X" &&
    cellSeven.textContent === "X"
  ) {
    gameSatisfied();
    markWin([cellThree, cellFive, cellSeven])
  } else if (
    cellOne.textContent === "O" &&
    cellTwo.textContent === "O" &&
    cellThree.textContent === "O"
  ) {
    gameSatisfied();
    markWin([cellOne, cellTwo, cellThree])
  } else if (
    cellFour.textContent === "O" &&
    cellFive.textContent === "O" &&
    cellSix.textContent === "O"
  ) {
    gameSatisfied();
    markWin([cellFour, cellFive, cellSix])
  } else if (
    cellSeven.textContent === "O" &&
    cellEight.textContent === "O" &&
    cellNine.textContent === "O"
  ) {
    gameSatisfied();
    markWin([cellSeven, cellEight, cellNine])
  } else if (
    cellOne.textContent === "O" &&
    cellFour.textContent === "O" &&
    cellSeven.textContent === "O"
  ) {
    gameSatisfied();
    markWin([cellOne, cellFour, cellSeven])
  } else if (
    cellTwo.textContent === "O" &&
    cellFive.textContent === "O" &&
    cellEight.textContent === "O"
  ) {
    gameSatisfied();
    markWin([cellTwo, cellFive, cellEight])
  } else if (
    cellThree.textContent === "O" &&
    cellSix.textContent === "O" &&
    cellNine.textContent === "O"
  ) {
    gameSatisfied();
    markWin([cellThree, cellSix, cellNine])
  } else if (
    cellOne.textContent === "O" &&
    cellFive.textContent === "O" &&
    cellNine.textContent === "O"
  ) {
    gameSatisfied();
    markWin([cellOne, cellFive, cellNine])
  } else if (
    cellThree.textContent === "O" &&
    cellFive.textContent === "O" &&
    cellSeven.textContent === "O"
  ) {
    gameSatisfied();
    markWin([cellThree, cellFive, cellSeven])

  }
}

//A win has been satisfied. Alerts the game status area and resets the board
function gameSatisfied() {
  if (playerTurn === playerOne) {
    playerTurn = playerTwo
    statusArea.textContent = (playerTwoSelect + " has won! Play again?");
    removesEventListener();
    boardReset();
  } else if (playerTurn === playerTwo) {
    statusArea.textContent = (playerOneSelect + " has won! Play again?");
    removesEventListener();
    boardReset();
  };

}

//Function to stop from clicking on squares after a win
function removesEventListener() {
  cells.forEach((cell) => {
    cell.removeEventListener("click", clicked);
    cell.removeEventListener("click", clickedBefore);
  });
}
//need To get checkWin function implemented
function markWin(squares) {
  for (let square of squares) {
    square.style.backgroundColor = 'red';
  }
}

//also need to implement full A.I Function
// Computer Player basic A.I
function compGuess() {
  let selectCell = Math.floor(Math.random() * 9);

  if (cells[selectCell].textContent === '') {
    return cells[selectCell].click();
  } else {
    return compGuess();
  }
}

//Function to begin the game. Listens for a start to the game. Displays whose turn it is. Begins the game timer. Adds listeners to each cell. 
function startFunction() {
  start.addEventListener("click", initializeButton)
  computerButton.addEventListener("click",
    initializeButton)
  computerButton.addEventListener("click", setAi)
}

//Initializes the AI for the Event Listener
function setAi() {
  AI = true
}

function initializeButton() {
  //Variables for the function. 
  removeMark();
  boardReset();
  clockCount = 0;
  playerOneSelect = document.getElementById("playerOne");
  playerTwoSelect = document.getElementById("playerTwo");
  playerOneSelect = playerOneSelect.value;
  playerTurn = playerOne;
  playerTwoSelect = playerTwoSelect.value;
  statusArea.textContent = playerOneSelect;

  start.disabled = true;
  computerButton.disabled = true;
  displayStatusArea();

  //Sets the interval for the clock. 
  interval = setInterval(updateClock, 1000);

  //Adds event listeners to each cells
  cells.forEach((cell) => {
    cell.addEventListener("click", clicked);
  });
}


//Function to add a mark to a cell when clicked
function clicked(event) {
  event.target.textContent = playerTurn;
  event.target.removeEventListener("click", clicked);
  event.target.addEventListener("click", clickedBefore);
  if (playerTurn === playerTwo) {
    (playerTurn = playerOne)
  } else {
    (playerTurn = playerTwo)
  }

  if (playerTurn === playerOne) {
    statusArea.textArea = playerTwoSelect;
  } else if (playerTurn === playerTwo && AI === true) {
    compGuess();
    statusArea.textArea = playerOneSelect;
  } else if (playerTurn === playerTwo) {
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

//Resets the Board. Removes Event Listeners from the board
function boardReset() {

  start.disabled = false
  start.textContent = "Play Again Two PLayer!"
  computerButton.disabled = false;
  computerButton.textContent = "Play Again One Player!";
  moveCounter = 0;


  start.removeEventListener("click", initializeButton);
  clearInterval(interval);
  startFunction();
}

//Removes the Event Listeners from the Board
function removesEventListener() {
  cells.forEach((cell) => {
    cell.removeEventListener("click", clicked);
    cell.removeEventListener("click", clickedBefore);
  });
}

//Clears Board after click
function removeMark() {
  cells.forEach((cell) => {
    cell.textContent = ""

  });
}



startFunction();