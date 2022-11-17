// const board = document.querySelector('.board');
// for(let rows = 0; rows < 8; rows++) {
//     let boxColour;
//     let boxStartColourWhite = rows % 2 === 0? true:false;
//     for(let columns = 0; columns < 8; columns++) {
//         if(boxStartColourWhite)
//             boxColour = columns % 2 === 0? 'white' : 'black';
//         else 
//             boxColour = columns % 2 === 0? 'black' : 'white';
//         const box = document.createElement('div');
//         box.style.width = board.clientWidth / 8 + 'px';
//         box.style.height = board.clientHeight / 8 + 'px';
//         box.style.backgroundColor = boxColour;
//         board.append(box);
//     }
// }

// var board = Chessboard('myBoard');

import { Chess } from 'chess.js'

const chess = new Chess()

while (!chess.game_over()) {
    const moves = chess.moves()
    const move = moves[Math.floor(Math.random() * moves.length)]
    chess.move(move)
}
console.log(chess.pgn())