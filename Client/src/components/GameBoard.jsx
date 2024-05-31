import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setScoreX,setScoreY,setGame, setnewGame } from '../state';
import Scoreboard from './scorecard';
// import { setScore } from '../state';
function GameBoard({ gridSize, winStreak, resetGame }) {
  const [board, setBoard] = useState(Array(gridSize * gridSize).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [draw,setDraw]=useState(false);
  const [winner, setWinner] = useState(null);
  const dispatch=useDispatch();
  let scoreX=useSelector((state)=>state.CscoreX);
  let gameno=useSelector((state)=>state.Cgameno);
  let scoreY=useSelector((state)=>state.CscoreY);
  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    if (calculateWinner(newBoard, index)) {
      setWinner(newBoard[index]);
     if(xIsNext){
        dispatch(setScoreX());
     }else{
        dispatch(setScoreY());
     }
     dispatch(setGame());
    //  console.log(scoreX+" "+scoreY+" "+gameno)
    }else{
        const isBoardFull = newBoard.every(cell => cell !== null);
        // console.log(isBoardFull);
         if (isBoardFull) {
                setDraw(true);
                dispatch(setGame());
            }
    }
   
  };

  const calculateWinner = (board, lastMove) => {
    const size = gridSize;
    const row = Math.floor(lastMove / size);
    const col = lastMove % size;
    const player = board[lastMove];

    const directions = [
        { dr: 1, dc: 0 }, // Vertical direction
        { dr: 0, dc: 1 }, // Horizontal direction
        { dr: 1, dc: 1 }, // Diagonal down-right direction
        { dr: 1, dc: -1 } // Diagonal down-left direction
    ];

    const isWinningLine = (dr, dc) => {
      let count = 1;
       // Check in the positive direction (e.g., down, right, down-right, down-left)
      for (let d = 1; d < winStreak; d++) {
        const r = row + d * dr;
        const c = col + d * dc;
        //board[r * size + c] === player   for making sure it is same sign as player
        if (r >= 0 && r < size && c >= 0 && c < size && board[r * size + c] === player) {
          count++;
        } else {
          break;
        }
      }
      // Check in the negative direction
      for (let d = 1; d < winStreak; d++) {
        const r = row - d * dr;
        const c = col - d * dc;
        if (r >= 0 && r < size && c >= 0 && c < size && board[r * size + c] === player) {
          count++;
        } else {
          break;
        }
      }
      return count >= winStreak;
    };
    // Return true if any of the directions result in a winning line
    return directions.some(({ dr, dc }) => isWinningLine(dr, dc));
  };

  const renderCell = (index) => (
    <div className="cell" onClick={() => handleClick(index)}>
      {board[index]}
    </div>
  );
  const restartGame=()=>{
    setBoard(Array(gridSize * gridSize).fill(null));
    setXIsNext(true);
    setWinner(null);
    setDraw(false);
  }
  const newGame=()=>{
    const user={scoreX:scoreX , scoreY:scoreY , gameno:gameno};
    dispatch(setnewGame({game_data:user}));
  }

  return (
    <div className='BigBoard'>
      <h1 style={{marginRight:'90px'}}>Tic-Tac-Toe</h1>
      <div className="board" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
        {board.map((_, index) => renderCell(index))}
      </div>
      {winner && <div className="result">Player {winner} wins!</div>}
      {draw && <div className="result">Match Draw !</div>}
      <div className="buttons">
      <button onClick={resetGame}>Restart Game</button>
      <button onClick={restartGame}>Reset Game</button>
      <button onClick={newGame}>New-Set-of-Game</button>
      </div>
      <ul className="" style={{marginRight:"90px", width:'600px', fontSize:'0.7rem',}}>
            <li  className="lists">
              <span>Total-Current-Games : {gameno}</span>
              <span>Current-X-Score : {scoreX}</span>
              <span>Current-O-Score : {scoreY}</span>
            </li>
      </ul>
    </div>
  );
}

export default GameBoard;
