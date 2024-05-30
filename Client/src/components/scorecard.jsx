import React from 'react';

const Scoreboard=({users})=> {

  return (
    <div className="scoreboard-container">
      <header className="scoreboard-header">
        <h1>Scoreboard</h1>
      </header>
      <ul className="scoreboard-list">
        {users
          .filter(user => user !== null)
          .map((s, index) => (
            <li key={index} className="scoreboard-item">
              <span>Game {s.gameno}</span>
              <span>X: {s.scoreX}</span>
              <span>Y: {s.scoreY}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Scoreboard;
