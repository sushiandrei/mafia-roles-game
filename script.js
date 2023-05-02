document.addEventListener('DOMContentLoaded', () => {
  // Global variables
  let numPlayers;
  let numKillers;
  let hasPriest;
  let playerName;
  let gameCode;

  // DOM elements
  const joinGameForm = document.getElementById('join-game-form');
  const createGameForm = document.getElementById('create-game-form');
  const gameCodeInput = document.getElementById('game-code-input');
  const numPlayersInput = document.getElementById('num-players-input');
  const numKillersInput = document.getElementById('num-killers-input');
  const hasPriestInput = document.getElementById('has-priest-input');
  const playerNameInput = document.getElementById('player-name-input');
  const joinGameButton = document.getElementById('join-game-button');
  const createGameButton = document.getElementById('create-game-button');
  const gameCodeDisplay = document.getElementById('game-code-display');
  const gameRoleDisplay = document.getElementById('game-role-display');
  const errorMessage = document.getElementById('error-message');
  const startGameButton = document.getElementById('start-game-button');
  const playerListDisplay = document.getElementById('player-list-display');
  const statusDisplay = document.getElementById('status-display');

  // Functions
  function createGame() {
    numPlayers = parseInt(numPlayersInput.value);
    numKillers = parseInt(numKillersInput.value);
    hasPriest = hasPriestInput.checked;

    // Validate inputs
    if (numPlayers < numKillers + 1) {
      errorMessage.textContent = 'Number of players must be greater than number of killers.';
      return;
    }

    // Generate game code
    gameCode = Math.floor(Math.random() * 10000);
    gameCodeDisplay.textContent = gameCode;

    // Hide create game form and show game code
    createGameForm.style.display = 'none';
    gameCodeDisplay.style.display = 'block';

    // Show start game button
    startGameButton.style.display = 'block';

    // TODO: Save game data to database
  }

  function joinGame() {
    gameCode = gameCodeInput.value;

    // TODO: Fetch game data from database

    // TODO: Validate game data and show error message if invalid

    // Hide join game form and show game role
    joinGameForm.style.display = 'none';
    gameRoleDisplay.style.display = 'block';

    // TODO: Generate and display game role based on game data
  }

  function startGame() {
    // TODO: Update game data in database to indicate game has started

    // Hide game code and start game button
    gameCodeDisplay.style.display = 'none';
    startGameButton.style.display = 'none';

    // Show player list display
    playerListDisplay.style.display = 'block';

    // TODO: Display list of players who have joined the game
  }

  // Event listeners
  createGameButton.addEventListener('click', createGame);
  joinGameButton.addEventListener('click', joinGame);
  startGameButton.addEventListener('click', startGame);
});
