// Make a command line tic-tac-toe game from scratch for two players. 
// Expected features
// ===============
// * Minimal UI that redraws the board and makes clear whose turn it is, each turn.
// * Players can submit moves (assume, admittedly unrealistically, that both players are sitting at the same keyboard).
// * Win detection - detect and display who won

// Bonus / stretch goals (any or all of the following)
// =======================================
// * Structure your code such that the UI can be turned easily into a native mobile app (iOS say) without having to rewrite the core game logic.
// * Implement win detection with a functional rather than iterative style.
// * Between moves, rotate the board 90 degrees counter-clockwise. The moves "fall" due to "gravity", post-rotation.

// Implementation instructions
// =======================
// * Create the project from scratch. Don't just clone an existing project.
// * This includes writing configuration files for any dependencies and test framework setup.
// * You should have a reasonably thorough suite of unit tests using a real unit test framework.
// * Use the editor of your choice.
// * Init a git repo for this project.
// * Push the repo up to github.
// * Make small commits as you go to illustrate your thought process and be able to back out changes easily.
// * Don't forget to push your final solution up to Github.
// * Add a professional-looking README file with installation and usage instructions.

// Try your best to work on this challenge without referring to outside resources. However, if you have to look things up online, go ahead. 


//instantiate new board
const Board = () => {
  return [[0, 0, 0],
          [0, 0, 0],
          [0, 0, 0]];
}

const Game = () => {
  //game logic 
  this.board = new Board();
  this.player = 1;
  //1 = X, 2 = O;
}

//[1, 2] as position
Game.prototype.placeMove = (position) => { 
  this.checkWin();

  let x = position[0];
  let y = position[1];
  
  //place move
  this.board[x][y] = this.player;

  this.switchPlayer();
  return this.board;
}

Game.prototype.checkWin = (board) => {
  let currentPlayer = this.player;
  //check if current player has 3 in a row
    //call this.playerWon();
  //else
    //return board;
}

Game.prototype.playerWon = () => {
  console.log(`${this.player} has won!`);
  return;
}

Game.prototype.switchPlayer = () => {
  if (this.player === 1) {
    this.player = 2;
  } else {
    this.player = 1;
  }
}


const newGame = new Game();
console.log(newGame);












