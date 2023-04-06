// Array of all the squares from the parent node
let squares = Array.from(document.querySelector('.game-board').children);

// Function to choose random index
function chooseRandIndex(num) {
    return Math.floor(Math.random() * num);
}

// Function to find the index of the square that was clicked
function whichIndex(event) {
    return squares.indexOf(event.target);
};

export { squares, chooseRandIndex, whichIndex };