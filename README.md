# noughts-and-crosses

This repo contains the source code for my first project of General Assembly's Software Engineering Immersive course (March 13th - June 9th 2023). 

We are at the end of Unit 1: Frontend Fundamentals, so the project focuses on HTML, CSS and JavaScript.

Project 1 runs from 29th March - 3rd April (4 working days) and is an independent project.

___

## Deployment

[Play now via Github Pages](https://louisejones94.github.io/noughts-and-crosses/)


___
## Technologies Used

- HTML
    - Semantic tags
- CSS
    - Flexbox
    - Grid
- JavaScript
    - Classes 
    - DOM manipulation
- VS Code
    - Text editing
    - Accessing Git via CLI
- Chrome developer tools
    - Inspecting elements, layout etc
    - Debugging
- Calligraphr
    - Font design


___
## Brief

### Big Goals

- Build a web application from scratch, without a starter codebase
- Use your programming skills to work out the game logic for a simple game like Tic Tac Toe
- Separate HTML, CSS, and JavaScript files in your application
- Build an application to a specification that someone else gives you
- Build a dynamic game that allows two players to compete from the same computer
- Craft a README.md file that explains your app to the world

### Technical Requirements

Your Noughts and Crosses app must:
- **Render a game board in the browser**
- **Switch turns** between X and O (or whichever markers you select)
- **Visually display which side won** if a player gets three in a row, or show a draw if neither player wins
- **Include separate HTML / CSS / JavaScript files**
- Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
- Use **JavaScript** for **DOM manipulation**
- **Deploy your game online**, where the rest of the world can access it
- Use **semantic markup** for HTML and CSS (adhere to best practices)
- Have well-formatted, and well-commented code

### Full Brief

Found at https://git.generalassemb.ly/SEI-LND-71/Project-1


___
## Planning

### User Stories

- As a user, I should be able to start a new noughts and crosses game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page
- As a user, I should be able to give my name so I can track my score
- As a user, I should be able to choose to play in one-player or two-player mode

### Wireframe


### Project Management
I used this [Trello board](https://trello.com/b/myM3qWxN) to list out different features, order them in terms of priority then set up each day's work to make sure I was moving through the content at enough pace.


___
## Build/Code Process

### 
1. First things first, I wanted to get the holy grail layout in place, to practice using Flexbox whilst the content was extremely simple, as I felt less confident using this
2. I built the basic board layout using a Grid structure to have something visual to 
3. I made classes for players and the game itself (Scoreboard) to keep track of multiple pieces of information without making lots of individual variables
4. *Mild distraction* I wanted to have unique icons for my game
5. Centred work around the game.js file
    - Functions for basic game play
        - Automatically assigned player 1 and player 2
        - Enabled clicking on squares
        - Restricted clicking on filled squares
    - Game outcome logic
6. Functions for each repeated step (DRY)
7. Validation
    - HTML
    - CSS
    - Accessibility

___
## Challenges

### A simple solution to a time-consuming problem!

I was initially lost in over-complicating the problem of showing whose turn it is right now. Effectively I was writing the logic that sits behind toggling a class:

```js
function showTurn() {
    players.forEach(function(player) {
        // if the player's name matches the current player's name
        if (player.name === scoreboard.currentPlayer.name) {
            document.querySelector(`#${scoreboard.currentPlayer.playerNumber}-stats > h3`).classList.add('hidden');
            document.querySelector(`#${scoreboard.otherPlayer.playerNumber}-stats > h3`).classList.remove('hidden');
        }
        else {
            document.querySelector(`#${scoreboard.currentPlayer.playerNumber}-stats > h3`).classList.remove('hidden');
            document.querySelector(`#${scoreboard.otherPlayer.playerNumber}-stats > h3`).classList.add('hidden');
        }
    })
}
```

Applying the principle of KISS, and taking some time away from the problem, allowed me to realise that I could simply toggle the class for each of the players, without needing to sort through who was the current player:

```js
function showTurn() {
    players.forEach(function(player) {
        document.querySelector(`#${player.playerNumber}-turn`).classList.toggle('hidden');
    })
}
```

### Comparison is the thief of joy

Trying to choose which bonus exercises to work through with limited time tested my

___
## Wins

> The Wins section is your opportunity to highlight the aspects of your project you are most proud of. See this as your chance to showcase these parts of your projects to the engineers reading your ReadMes.

> Things you could discuss here:
> 
> Interesting problem solving you did
> Strong sections of code
> Collaboration with other team members
> Visual design of the project

### Game outcome logic


___
## Other Learnings/Takeaways

- Flexbox: I went into this project seeing Flexbox as my nemesis. Much like when I learnt to drive, I thought "I'm just not suited to this, I'll never find this easy". And much like driving, I don't find it easy as such, but I can find myself doing a good job whilst on autopilot. Here, I noticed myself centring the Game Outcome message using Flexbox without looking it up, and getting the right result first time.
- Debugging: I feel much happier with hitting errors and having a logical way to locate, identify and test possible solutions for the problem.




___
## Bugs

- Favicon compatibility: iOS Safari and classic desktop browsers are covered, but Android Chrome and Edge/IE12 require different formats that I haven't yet added.


___
## Future Improvements

- Allow players to customize their tokens (specifically, choosing their flower colours)
- Use localStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
- Create an unbeatable AI opponent