// Global variables
let numPlayers;
let numKillers;
let hasPriest;
let playerName;

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
  const gameCode = Math.floor(Math.random() * 10000);
  gameCodeDisplay.textContent = gameCode;

  // Hide create game form and show game code
  createGameForm.style.display = 'none';
  gameCodeDisplay.style.display = 'block';

  // TODO: Save game data to database
}

function joinGame() {
  const gameCode = gameCodeInput.value;

  // TODO: Fetch game data from database

  // TODO: Validate game data and show error message if invalid

  // Hide join game form and show game role
  joinGameForm.style.display = 'none';
  gameRoleDisplay.style.display = 'block';

  // TODO: Generate and display game role based on game data
}

// Event listeners
createGameButton.addEventListener('click', createGame);
joinGameButton.addEventListener('click', joinGame);
