Here's a detailed README for your Tic-Tac-Toe project:

---

# Tic-Tac-Toe

A customizable Tic-Tac-Toe game built with React and Redux Toolkit, featuring dynamic grid sizes and win streak settings. The game includes functionalities for resetting, restarting, and tracking wins and games played, with data persistence using Redux Persist.

## Features

- **Customizable Grid Size**: Choose any grid size between 3x3 and 10x10.
- **Customizable Win Streak**: Set the number of consecutive marks needed to win, between 3 and the grid size.
- **Reset and Restart**: Easily reset the current game or restart with the same settings.
- **Win Tracking**: Display the current wins for both X and O.
- **Games Played Tracking**: Keep track of the total number of games played in the current set.
- **Persistent Data**: Game data is stored in local storage, preserving the state even if the tab is closed.
- **Start New Set**: Option to start a new set of games, resetting all tracked data.

## Technologies Used
- React.js
- Redux.js as Redux toolkit
- Redux Persist
- Few more npm packages

## Installation and Setup

### Prerequisites

- React.js
- npm (Node Package Manager)

### How to Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/SagarKapoorin/Tic-tac.git
   ```

2. **Navigate to the Client Directory**:
   ```bash
   cd Tic-tac/client
   ```

3. **Install Dependencies**:
   ```bash
   npm install
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

## Usage

- **Start a New Game**: Set your desired grid size and win streak, then click "Start Game".
- **Play the Game**: Click on the grid cells to place X or O marks. The game alternates between players.
- **Reset the Game**: Click the "Reset" button to clear the current game board.
- **Restart the Game**: Click the "Restart" button to restart the game with the same settings.
- **Track Wins and Games**: The scoreboard displays the current wins for X and O, and the total number of games played.
- **Start a New Set**: Click the "New Set" button to reset all game data and start a new set of games.

## Live Demo

Check out the live demo [here](https://66597d1d0761ddec25b9b0da--rococo-gecko-8f4e07.netlify.app/).

## Contributing

Contributions are welcome! Please contact the project maintainer for more information.

### Maintainer

- **Sagar Kapoor**
  - Email: sagarbadal70@gmail.com
