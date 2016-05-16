const readline = require('readline');
const model = {};

function randomNumber() {
  return Math.round((Math.random() * 9));
}

function pickSquare(spot) {
  let pick;
  do {
    pick = randomNumber();
  } while (model.game.board.indexOf(pick) !== -1);
  
  model.game.board[spot] = pick;
}

function init() {
  model.game = {
    board: [null, null, null, null, null, null, null, null, null],
    turn: 0,
    score: 0,
  };
  
  pickSquare(randomNumber());
}

function finishGame() {
  model.game.board.forEach((square, spot) => {
    if (square === null) {
      pickSquare(spot);
    }
  });
  
  score();
}

function score() {
  let sum = [];
  switch(model.game.line) {
    case 0:
      sum = [6, 7, 8];
      break;
    case 1:
      sum = [3, 4, 5];
      break;
    case 2:
      sum = [0, 1, 2];
      break;
    case 3:
      sum = [0, 4, 8];
      break;
    case 4:
      sum = [0, 3, 6];
      break;
    case 5:
      sum = [1, 4, 7];
      break;
    case 6:
      sum = [2, 5, 8];
      break;
    case 7:
      sum = [2, 4, 6];
      break;
  }

  model.game.score = sum.reduce((score, spot) => {
    return score + model.game.board[spot];
  }, 0);
}

function turn() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  if (model.game.turn < 3) {
    rl.question('Pick a square [0-8]> ', (square) => {
      let spot = Number.parseInt(square, 10);
      
      if ((!spot && spot !== 0) || isNaN(spot) || model.game.board[spot] !== null) {
        console.error('Invalid square');
        turn();
        return;
      }
      
      pickSquare(spot);
      model.game.turn += 1;
      printBoard();
      rl.close();
      turn();
    });
  } else if (model.game.turn === 3) {
    rl.question('Pick a row/column [0-7]> ', (position) => {
      let line = Number.parseInt(position, 10);
      
      if ((!line && line !== 0) || isNaN(line)) {
        console.error('Invalid line');
        turn();
        return;
      }
      
      model.game.line = line;
      finishGame();
      printBoard();
      printScore();
      rl.close();
    });
  }
}

function printBoard() {
  let board = '';
  for (let height = 0; height < 3; height += 1) {
    let row = [];
    for (let width = 0; width < 3; width += 1) {
      row.push(model.game.board[(height * 3) + width] || 'X');
    }
    board += row.join(' ') + '\n';
  }
  
  console.log(board);
}

function printScore() {
  console.log(`You scored: ${model.game.score}`);
}

function play() {
  init();
  printBoard();
  turn();
}


play();