// Global variables
let numPlayers;
let numKillers;
let hasPriest;
let playerName;
let gameData;

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
const gameStartButton = document.getElementById('game-start-button');
const playerList = document.getElementById('player-list');
const storytellerPage = document.getElementById('storyteller-page');
const playersPage = document.getElementById('players-page');
const gameStatusLabel = document.getElementById('game-status-label');

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
  gameData = {
    gameCode: gameCode,
    numPlayers: numPlayers,
    numKillers: numKillers,
    hasPriest: hasPriest,
    players: []
  };
}

function joinGame() {
  const gameCode = gameCodeInput.value;

  // TODO: Fetch game data from database
  gameData = {
    gameCode: gameCode,
    numPlayers: 8,
    numKillers: 2,
    hasPriest: true,
    players: [
      { name: 'Player 1', role: 'Innocent' },
      { name: 'Player 2', role: 'Killer' },
      { name: 'Player 3', role: 'Innocent' },
      { name: 'Player 4', role: 'Killer' },
      { name: 'Player 5', role: 'Innocent' },
      { name: 'Player 6', role: 'Innocent' },
      { name: 'Player 7', role: 'Innocent' },
      { name: 'Player 8', role: 'Innocent' }
    ]
  };

  // TODO: Validate game data and show error message if invalid
  if (!gameData) {
    errorMessage.textContent = 'Invalid game code.';
    return;
  }

  // Hide join game form and show game role
  joinGameForm.style.display = 'none';
  gameRoleDisplay.style.display = 'block';

  // TODO: Generate and display game role based on game data
  const player = gameData.players.find(player => player.name === playerNameInput.value);
  if (player) {
    gameStatusLabel.textContent = 'The game has started.';
    gameStartButton.style.display
