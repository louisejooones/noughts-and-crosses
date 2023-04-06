import { Player } from "./player.js";
import { Scoreboard } from "./scoreboard.js";
import { changeAudio } from "./audio.js";

// Initialise players
let player1 = new Player('', 'X', 'player1');
let player2 = new Player('', 'O', 'player2');

// Initialise scoreboard
let scoreboard = new Scoreboard();

// Array of all the squares from the parent node
let squares = Array.from(document.querySelector('.game-board').children);

// Controls for audio
document.querySelector('#summer-audio').volume = 0;
document.querySelector('.audio-control').addEventListener('click', (event) => {
    event.preventDefault();
    changeAudio(event);
});




// Event listener for first player form
document.querySelector('#player1-submit').addEventListener('click', function(event) {
    // Stop the page from refreshing
    event.preventDefault();
    // Get the player's name
    player1.getName();
    // Update stats
    updateStats();
    // Hide the Player 1 form
    document.querySelector('#player1-form').classList.add('hidden');
    // Show Player 1's stats
    let player1info = document.querySelectorAll('#player1-stats > h2, #player1-game-stats')
    player1info.forEach((stat) => stat.classList.remove('hidden'));
    // Show Player 2 section
    document.querySelector('#player2').classList.remove('hidden');
    // Open 1player or 2player mode
    if (document.querySelector('input[name="game-type"]:checked').value === '2') {
        // Start 2 player mode
        console.log('2 player mode activated')
        // Show the Player 2 form
        document.querySelector('#player2-form').classList.remove('hidden');
    }
    else if (document.querySelector('input[name="game-type"]:checked').value === '1') {
       Instructions // Start 1 player mode
        console.log("Not built 1 player mode yet lol");
        player2.name = 'Computer';
    }
    else {
        console.error("We couldn't find either one player or two player mode selected");
    }
});

// Event listener for 2 player mode form
document.querySelector('#player2-submit').addEventListener('click', function(event) {
    // Stop the page from refreshing
    event.preventDefault();
    // Take the player's name from the user input fields
    player2.getName();
    // Hide player 2 form
    document.querySelector('#player2-form').classList.add('hidden');
    // Show Player 2's stats
    let player2info = document.querySelectorAll('#player2-stats > h2, p')
    player2info.forEach((stat) => stat.classList.remove('hidden'));
    resetGame();
});

let players = [player1, player2];

// Function to show whose turn it is
function showTurn() {
    players.forEach(function(player) {
        document.querySelector(`#${player.playerNumber}-turn`).classList.toggle('hidden');
    })
}

// Function to choose random index
function chooseRandIndex(num) {
    return Math.floor(Math.random() * num);
}

// Function to update stats after each turn
function updateStats() {
    players.forEach((player) => {
        if (player.name.length > 0) {
            // Update player name
            document.querySelector(`#${player.playerNumber}-stats > .player-name`).innerText = player.name;
            // Update game stats
            document.querySelector(`#${player.playerNumber}-stats > .game-stats`).innerText =
                `${player.wins}  wins
                ${player.losses}  losses
                ${player.draws}  draws`; 
        }
    })
};


// Function to start a new game
function resetGame() {
    // Apply empty class to all the buttons
    squares.forEach(function(square) {
        square.classList.add('empty');
        square.innerText = '';
    });
    // Reset current game stats
    scoreboard.winner = '';
    scoreboard.draw = '';
    // Change turn number to zero;
    scoreboard.turnNumber=0;
    // Reset player position arrays
    player1.positions = [];
    player2.positions = [];
    // Hide reset button
    document.querySelector('.reset').classList.add('hidden');
    // Show the game board
    document.querySelector('.game').classList.remove('hidden');
    if (player2.name) {
        // Choose the first player randomly
        let randIndex = chooseRandIndex(players.length);
        scoreboard.currentPlayer = players[randIndex];
        scoreboard.otherPlayer = players[1-randIndex];
        // Update all the player stats
        updateStats();
        // Show whos turn it is first
        document.querySelector(`#${scoreboard.currentPlayer.playerNumber}-turn`).classList.toggle('hidden');
    }
}

const winningPositions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

// Function to determine game outcome
function isItOverYet(player) {
    // get all of the indexes of current player's icons
    let playerPositions = player.positions;
    // Check whether the array contains any of the winning positions list
    winningPositions.forEach(function(position) {
        if (position.every((indx) => playerPositions.includes(indx))) {
        scoreboard.winner = player;
        // Log the outcome
        document.querySelector('.reset > .outcome').innerText = 
            `${player.name} wins and
            ${scoreboard.otherPlayer.name} loses.

            Want to play again?`;
        // Increment the scoreboard with the game results
        scoreboard.currentPlayer.wins++;
        scoreboard.otherPlayer.losses++;
        }
    })
    // Finally see if we have a draw
    if (!scoreboard.winner && scoreboard.turnNumber === 8) {
        // Log the outcome
        document.querySelector('.reset > .outcome').innerText = 
            `It's a draw!

            Want to play again?`;
        // Increment the scoreboard with the game results
        scoreboard.draw = 1;
        scoreboard.currentPlayer.draws++;
        scoreboard.otherPlayer.draws++;
    }
}

// Function to find the index of the square that was clicked
function whichIndex(event) {
    // Find the index of which button you clicked on
    return squares.indexOf(event.target);
};

// Add one event listener that covers the whole game board
document.querySelector('.game-board').addEventListener('click', (event) => {
    // Check whether you clicked on the div or a button
    if (event.target.classList.contains('game-square')) {
        // Check there isn't already something in the square
        if (event.target.classList.contains('empty')) {
            // Change the square to the current player's icon
            event.target.innerText = (scoreboard.currentPlayer.icon);
            event.target.classList.remove('empty');
            // Add the index to the current player's position list
            scoreboard.currentPlayer.positions.push(whichIndex(event));
            // Can only win from the 5th turn onwards so no need to check til then
            if (scoreboard.turnNumber >= 4) {
                // Do game outcome logic
                isItOverYet(scoreboard.currentPlayer);
            }
            
            // If there is no outcome, change whose turn it is
            if (!scoreboard.winner && !scoreboard.draw) {
                scoreboard.otherPlayer = scoreboard.currentPlayer;
                scoreboard.currentPlayer = scoreboard.currentPlayer === player1 ? player2 : player1;
                // Change turn number
                scoreboard.turnNumber++;
                showTurn();
            }
            // else end the game
            else {
                squares.forEach((square) => square.classList.remove('empty'));
                updateStats();
                document.querySelector('.reset').classList.remove('hidden');
                document.querySelectorAll('h3').forEach((heading) => heading.classList.add('hidden'));
            }
        }
    } 
});

// Add event listener to reset button
document.querySelector('.reset-button').addEventListener('click', function(event) {
    if (!event.target.parentNode.classList.contains('hidden')) {
        resetGame();
    }
});
