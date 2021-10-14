import React, { useState } from 'react';
import Field from './Field';

function Board() {
  const [active, setActive] = useState(true);
  const [gameState, setGameState] = useState(Array(9).fill(""));

  let output = calculateWinner(gameState);
  if(output === "X") {
    output = "X wins";
  } else if(output === "O") {
    output = "O wins";
  }

  function play(e, i) {
    const squares = [...gameState];
    
    if (e.target.innerHTML != '') {
      return;
    }
    
    if(output) {
      return;
    }
    
    if (active) {
      e.target.innerHTML = 'X';
      squares[i] = "X";
      setActive(!active);
      setGameState(squares);
    } else {
      e.target.innerHTML = 'O';
      squares[i] = "O";
      setActive(!active);
      setGameState(squares);
    }
  }

  function calculateWinner(squares) {
    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < 8; i++) {
      const winningCondition = winningConditions[i];
      let a = winningCondition[0];
      let b = winningCondition[1];
      let c = winningCondition[2];
      if(squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  

  return (
    <table>
      <caption>{output}</caption>
      <tr>
        <Field onPlayHandler={(e) => play(e, 0)} />
        <Field onPlayHandler={(e) => play(e, 1)} />
        <Field onPlayHandler={(e) => play(e, 2)} />
      </tr>
      <tr>
        <Field onPlayHandler={(e) => play(e, 3)} />
        <Field onPlayHandler={(e) => play(e, 4)} />
        <Field onPlayHandler={(e) => play(e, 5)} />
      </tr>
      <tr>
        <Field onPlayHandler={(e) => play(e, 6)} />
        <Field onPlayHandler={(e) => play(e, 7)} />
        <Field onPlayHandler={(e) => play(e, 8)} />
      </tr>
    </table>
  );
}

export default Board;
