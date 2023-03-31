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
};

export { Player };