import React from 'react';

const Scoreboard=({users})=> {

  return (
    <div className="scoreboard-container">
      <header className="scoreboard-header">
        <h1>Previous Sets</h1>
      </header>
      <ul className="scoreboard-list">
        {users
          .filter(user => user !== null)
          .map((s, index) => (
            <li key={index} className="scoreboard-item">
              <span>Games : {s.gameno}</span>
              <span>X-Wins : {s.scoreX}</span>
              <span>O-Wins : {s.scoreY}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Scoreboard;
