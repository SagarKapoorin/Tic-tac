import React, { useState } from 'react';
import GameStart from './components/GameSetting';
import GameBoard from './components/GameBoard';
import './App.css';

function App() {
  const [gridSize, setGridSize] = useState(3);
  const [winStreak, setWinStreak] = useState(3);
  const [gameStarted, setGameStarted] = useState(false);

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
      <h1>Tic-Tac-Toe</h1>
      {!gameStarted ? (
        <GameStart startGame={startGame} gridSize={gridSize} winStreak={winStreak} />
      ) : (
        <GameBoard gridSize={gridSize} winStreak={winStreak} resetGame={resetGame} />
      )}
    </div>
  );
}

export default App;
