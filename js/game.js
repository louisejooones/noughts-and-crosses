import { Player } from "/js/player.js";
import { Scoreboard} from "/js/scoreboard.js";

// Add one event listener that covers the whole game board
document.querySelector('.game-board').addEventListener("click", (event) => {
    // Check whether you clicked on the div or a button
    if (event.target.classList.contains('game-square')) {
        // Check there isn't already something in the square

        // Check which player's turn it is

        // Change the square to the current player's icon

        // Do game winner logic
        
        // If there is no outcome, change whose turn it is
    } 
});