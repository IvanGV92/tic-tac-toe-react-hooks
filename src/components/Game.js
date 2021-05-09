import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';
import './styles/Game.css';


const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];

    if (winner || squares[i]) return;

    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  }

  const rewindMoves = () =>{
   const rewindCount = (stepNumber > 0) ? stepNumber-1 : 0;
    jumpTo(rewindCount);
  }

  const reset =()=>{
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXisNext(true);

  }

  const jumpTo = step => {
    setStepNumber(step);
    setXisNext(step % 2 === 0)
  };




  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="game-div">
        <p className="info-message">{winner ? 'Winner: ' + winner : (stepNumber === 9) ? "It's a tie!" : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
        <button className="action-button" onClick={rewindMoves}>Rewind</button>
        <button className="action-button" onClick={reset}>Reset</button>

      </div>
    </>
  )
}

export default Game;