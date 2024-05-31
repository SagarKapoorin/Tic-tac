import React, { useState } from 'react';
import GameStart from './components/GameSetting';
import GameBoard from './components/GameBoard';
import './App.css';
import Scoreboard from './components/scorecard';
import { useSelector } from 'react-redux';

function App() {
  const [gridSize, setGridSize] = useState(3);
  const [winStreak, setWinStreak] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);
  let users=useSelector((state)=>state.game_data);
  const startGame = (size, streak) => {
    setGridSize(size);
    setWinStreak(streak);
    setGameStarted(true);
  };

  const resetGame = () => {
    setGameStarted(false);
  };

  return (
    <div className="App">
     
      {!gameStarted ? (
        <div className="">
         <h1>Tic-Tac-Toe</h1>
        <GameStart startGame={startGame} gridSize={gridSize} winStreak={winStreak} />
        </div>
      ) : (
        <div className="div">
        <GameBoard gridSize={gridSize} winStreak={winStreak} resetGame={resetGame} />
        <Scoreboard users={users}/>
        </div>
      )}
    </div>
  );
}

export default App;
