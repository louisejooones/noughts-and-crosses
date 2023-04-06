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
};

export { Player };