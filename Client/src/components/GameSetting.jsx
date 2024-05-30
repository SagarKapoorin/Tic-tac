import React, { useState } from 'react';

function GameSettings({ startGame }) {
  const [gridSize, setGridSize] = useState(3);
  const [winStreak, setWinStreak] = useState(3);

  const handleSubmit = (event) => {
    event.preventDefault();
    startGame(gridSize, winStreak);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Grid Size (n x n) &nbsp; : &nbsp;
        <input type="number" min="3" max="10" value={gridSize} onChange={(e) => {
          setGridSize(parseInt(e.target.value));  // needed to convert to int 
          setWinStreak(Math.min(winStreak, parseInt(e.target.value)));
        }} />
      </label>
      <label>
        Win Streak (m) &nbsp; : &nbsp;
        {/* gridsize should be maximum here */}
        <input type="number" min="3" max={gridSize} value={winStreak} onChange={(e) => setWinStreak(parseInt(e.target.value))} />
      </label>
      <button type="submit">Start Game</button>
    </form>
  );
}

export default GameSettings;
