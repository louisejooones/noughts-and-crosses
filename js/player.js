class Player {
    constructor (name, icon, playerNumber) {
        this.name = name;
        this.playerNumber = playerNumber;
        this.icon = icon;
        this.wins = 0;
        this.losses = 0;
        this.draws = 0;
        this.positions = [];
    }

    // Method to get player's name
    getName() {
        // Take the player's name from the user input fields
        let pName = document.querySelector(`#${this.playerNumber}-name`).value;
        if (pName.length > 0) {
            this.name = pName;
        }
        // Or give them a mysterious name if they didn't choose one!
        else {
            this.name = `Mystery Player ${this.playerNumber[6]}`;
        }
    }

    // Method to show whose turn it is
    showTurn() {
            document.querySelector(`#${this.playerNumber}-turn`).classList.toggle('hidden');
    }

    // Method to update stats after each turn
    updateStats() {
        // Don't update until the players have both chosen their name
        if (this.name.length > 0) {
            // Update player name
            document.querySelector(`#${this.playerNumber}-stats > .player-name`).innerText = this.name;
            // Update game stats
            document.querySelector(`#${this.playerNumber}-stats > .game-stats`).innerText =
                `${this.wins}  wins
                ${this.losses}  losses
                ${this.draws}  draws`;
        }
    }
};

export { Player };