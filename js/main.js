//PREP for TIC TAC TOE
//P : player 1 choice, player 2 choice,
//R: X or O  on DOM, winner, draw, loser, points of wins
//E: win 3 in a row, 8 possible ways to win (3 up and down, 3 left to right, and 2 diagonal ways)
//P: Tic Tac Toe Exercise ->
//click to place x and o
//win should be displayed in dom in the form of a counter,
// make game OOP
// create Scoreboard
// Select a box and display the player's selection
// Determine if player 1 or 2 win
// Reset button in case players want to play again
// Undo button if player makes mistake
// Tic tac toe grid made using border bottom and border right?
// Questions: how does the computer know how many times you win? Or where the x is and where the o is?

// worked on this with Sam, Ken, Miggie, Chi, Shane, Zikre
// let Z =

// document.getElementById("box1").addEventListener("click", playerMove)
// let playerOne = {name: "markerX", value: "X"}
// let playerTwo = {name: "markerO", value: "O" }
// let win = [
//   [1, 2, 3], //[box1, box2, box3]
//   [4, 5, 6], //[box4, box5, box6]
//   [7, 8, 9], //[box7, box8, box9]
//   [1, 4, 7], //etc...
//   [2, 5, 8],
//   [3, 6, 9],
//   [1, 5, 9],
//   [3, 5, 7],
// ];

// function Game() {
//   this.gameState = {
//     'box0': null,
//     'box1': null,
//   };
//   this.checkWin() {
//
//   }
// }
//
// let game = new Game()
let counter = 0;
const box0= document.getElementById('box0')
const box1= document.getElementById('box1')
const box2= document.getElementById('box2')
const box3= document.getElementById('box3')
const box4= document.getElementById('box4')
const box5= document.getElementById('box5')
const box6= document.getElementById('box6')
const box7= document.getElementById('box7')
const box8= document.getElementById('box8')
let winLose = document.getElementById("result")


function win(which){
  let winnerStatement = `The winner is: ${which}`;

  winLose.innerHTML = winnerStatement
  // alert ("winner"+ " " + which)
  // document.querySelectorAll(".box").forEach( box => {
  //     box.innerHTML = " "
  // })
}

function clearBoard (){
  document.querySelectorAll(".box").forEach( box => {
      box.innerHTML = " "
  })
  document.querySelectorAll("#result").forEach( box => {
      box.innerHTML = " "
  })
  counter = 0
  winLose.innerHTML = ""
}

reset.addEventListener('click', clearBoard)

undo.addEventListener('click', noGo)

function noGo(){
  alert("NO TAKE BACKS!!")
}

function checkWin(){
  if(box0.innerHTML !== " " &&  box0.innerHTML === box1.innerHTML && box1.innerHTML === box2.innerHTML){
    win(box0.innerHTML) // after alert call a function that clears the board &  //speciify if x win or O win  /// try to make both happen in one function /// remember to update the counter to 0
  }if(box3.innerHTML !== " " &&  box3.innerHTML === box4.innerHTML && box4.innerHTML === box5.innerHTML){
    win(box3.innerHTML)
  }if(box6.innerHTML !== " " &&  box6.innerHTML === box7.innerHTML && box7.innerHTML === box8.innerHTML){
    win(box6.innerHTML)
  }if(box4.innerHTML !== " " &&  box0.innerHTML === box4.innerHTML && box4.innerHTML === box8.innerHTML){
    win(box4.innerHTML)
  }if(box2.innerHTML !== " " &&  box2.innerHTML === box4.innerHTML && box4.innerHTML === box6.innerHTML){
    win(box2.innerHTML)
  }if(box0.innerHTML !== " " &&  box0.innerHTML === box3.innerHTML && box3.innerHTML === box6.innerHTML){
    win(box0.innerHTML)
  }if(box1.innerHTML !== " " &&  box1.innerHTML === box4.innerHTML && box4.innerHTML === box7.innerHTML){
    win(box1.innerHTML)
  }if(box2.innerHTML !== " " &&  box2.innerHTML === box5.innerHTML && box5.innerHTML === box8.innerHTML){
    win(box2.innerHTML)
  }
}

function markBoxAndCheckWin(event){
  const box = event.target

  if(box.innerHTML === "O" || box.innerHTML === "X"){
    alert("NO!")
    return;
  }

  counter += 1
  if(winLose.innerHTML===""){
  if (counter % 2 == 0 ){
    // game.gameState[box] = 'O'
    box.innerHTML= "O"
    // console.log ("0")
  }else{
    // console.log ("X")
    box.innerHTML= "X"
  // }if (totalBoxes === "X" || totalBoxes === "O"){
  //   alert("Tie")
  }
}
  if (counter === 9){
    document.getElementById("result").innerHTML = 'Draw, You Both Lose?'
  }
  checkWin()
  // console.log(counter, box)
}

function processBox(box){
  box.addEventListener('click', markBoxAndCheckWin)
}

const totalBoxes = document.querySelectorAll('.box') // array of a box with miniboxes inside of it
// console.log(totalBoxes)
totalBoxes.forEach(processBox) // apply processBox to each Element of totalBoxes... does the same thing to each box on an individual basis.think of it like totalBoxes and forEach are handing each box to the function processBox.
