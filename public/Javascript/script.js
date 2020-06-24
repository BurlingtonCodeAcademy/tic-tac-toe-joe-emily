//Global variable

let playerOne="X";
let playerTwo="O";
let playerTurn=playerOne;

//Function to begin the game
start.addEventListener("click", ()=>{
    start.disabled= true;
    displayStatusArea();
})

//Function to display status area
function displayStatusArea(){
    let statusArea= document.getElementById("statusArea");
    statusArea.textContent= ("It is "+playerTurn+"'s turn!");
    statusArea.appendChild(statusArea);
}




