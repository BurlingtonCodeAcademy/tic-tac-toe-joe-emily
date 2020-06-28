//Elements that need to be targeted
let start = document.getElementById("start");
let cells = Array.from(document.getElementsByClassName("cell"));
let playerOneSelect = document.getElementById("playerOne");
let playerTwoSelect = document.getElementById("playerTwo");
let clock = document.getElementById("clock");
let compGuess = document.getElementById('computerPlayer');

//Global variable

let playerOne = "X";
let playerTwo = "O";
let compGuess = "O";
let playerTurn = playerOne;
let interval;
let clockCount = 0;
let moveCounter = 0;




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
    cellone.textContent === "X" &&
    celltwo.textContent === "X" &&
    cellthree.textContent === "X"
  ) {
    gameSatisfied();
    markWin([cellone, celltwo, cellthree])
  } else if (
    cellfour.textContent === "X" &&
    cellfive.textContent === "X" &&
    cellsix.textContent === "X"
  ) {
    gameSatisfied();
    markWin([cellfour, cellfive, cellsix])
  } else if (
    cellseven.textContent === "X" &&
    celleight.textContent === "X" &&
    cellnine.textContent === "X"
  ) {
    gameSatisfied();
    markWin([cellseven, celleight, cellnine])
  } else if (
    cellone.textContent === "X" &&
    cellfour.textContent === "X" &&
    cellseven.textContent === "X"
  ) {
    gameSatisfied();
    markWin([cellone, cellfour, cellseven])
  } else if (
    celltwo.textContent === "X" &&
    cellfive.textContent === "X" &&
    celleight.textContent === "X"
  ) {
    gameSatisfied();
    markWin([celltwo, cellfive, celleight])
  } else if (
    cellthree.textContent === "X" &&
    cellsix.textContent === "X" &&
    cellnine.textContent === "X"
  ) {
    gameSatisfied();
    markWin([cellthree, cellsix, cellnine])
  } else if (
    cellone.textContent === "X" &&
    cellfive.textContent === "X" &&
    cellnine.textContent === "X"
  ) {
    gameSatisfied();
    markWin([cellone, cellfive, cellnine])
  } else if (
    cellthree.textContent === "X" &&
    cellfive.textContent === "X" &&
    cellseven.textContent === "X"
  ) {
    gameSatisfied();
    markWin([cellthree, cellfive, cellseven])
  } else if (
    cellone.textContent === "O" &&
    celltwo.textContent === "O" &&
    cellthree.textContent === "O"
  ) {
    gameSatisfied();
    markWin([cellone, celltwo, cellthree])
  } else if (
    cellfour.textContent === "O" &&
    cellfive.textContent === "O" &&
    cellsix.textContent === "O"
  ) {
    gameSatisfied();
    markWin([cellfour, cellfive, cellsix])
  } else if (
    cellseven.textContent === "O" &&
    celleight.textContent === "O" &&
    cellnine.textContent === "O"
  ) {
    gameSatisfied();
    markWin([cellseven, celleight, cellnine])
  } else if (
    cellone.textContent === "O" &&
    cellfour.textContent === "O" &&
    cellseven.textContent === "O"
  ) {
    gameSatisfied();
    markWin([cellone, cellfour, cellseven])
  } else if (
    celltwo.textContent === "O" &&
    cellfive.textContent === "O" &&
    celleight.textContent === "O"
  ) {
    gameSatisfied();
    markWin([celltwo, cellfive, celleight])
  } else if (
    cellthree.textContent === "O" &&
    cellsix.textContent === "O" &&
    cellnine.textContent === "O"
  ) {
    gameSatisfied();
    markWin([cellthree, cellsix, cellnine])
  } else if (
    cellone.textContent === "O" &&
    cellfive.textContent === "O" &&
    cellnine.textContent === "O"
  ) {
    gameSatisfied();
    markWin([cellone, cellfive, cellnine])
  } else if (
    cellthree.textContent === "O" &&
    cellfive.textContent === "O" &&
    cellseven.textContent === "O"
  ) {
    gameSatisfied();
    markWin([cellthree, cellfive, cellseven])

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
/*function compGuess() {
  checkWin = Math.floor(Math.random() * 8);

  if (cells[checkWin].textContent === '') {
    cells[checkWin].textContent = 'O';
  
  } else {
   return compGuess();
  }
}*/

//Function to begin the game. Listens for a start to the game. Displays whose turn it is. Begins the game timer. Adds listeners to each cell. 
function startFunction() {
  start.addEventListener("click", initializeButton)
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

//Resets the Board. Removes Event Listeners from the board
function boardReset() {

  start.disabled = false;
  start.textContent = "Play Again!";
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