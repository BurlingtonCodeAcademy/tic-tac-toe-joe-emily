//Global variable

let playerOne = "X";
let playerTwo = "O";
let playerTurn = playerOne;
let start= document.getElementById("start");
let cells = Array.from(document.getElementsByClassName("cell"))


//Function to begin the game
start.addEventListener("click", () => {
  start.disabled = true;
  displayStatusArea();
  cells.forEach((cell)=>{
      cell.addEventListener("click", clicked)
  })
});

//Function to add a mark to a cell when clicked
function clicked(event){
    event.target.textContent= playerTurn;
    if(playerTurn===playerOne){
        playerTurn = playerTwo
    }else(playerTurn = playerOne)
    
}

//Function to display status area
function displayStatusArea() {
  let statusArea = document.getElementById("statusArea");
  statusArea.textContent = "It is " + playerTurn + "'s turn!";

}



