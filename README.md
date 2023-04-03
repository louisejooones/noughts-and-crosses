# noughts-and-crosses

This repo contains the source code for my first project of General Assembly's Software Engineering Immersive course (March 13th - June 9th 2023). 

We are at the end of Unit 1: Frontend Fundamentals, so the project focuses on HTML, CSS and JavaScript.

Project 1 runs from 29th March - 3rd April (4 working days) and is an independent project.

___

## Deployment link

Github pages: https://louisejones94.github.io/noughts-and-crosses/


___
## Technologies Used

- HTML
- CSS
- JavaScript
- VS Code
- Chrome developer tools



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

### Wireframe


### Project Management
I used this [Trello board](https://trello.com/b/myM3qWxN) to list out different features, order them in terms of priority then set up each day's work to make sure I was moving through the content at enough pace.



___
## Build/Code Process

> The Build/Code Process will be the longest section of your ReadMe and will be most insightful to the engineers that review them. This is where you will discuss the steps you took to code the project.
> 
> You want to see your ReadMes as a way to walk the engineers through your approach and problem solving from the start of the project through to the end.
> 
> You'll need to include a minimum of 3-4 code snippets, highlighting code you're particularly proud of and these code snippets will have descriptions on what you did, how and why to set the context of the snippet you include. These explanations are important for the engineers, as they will want to understand what you did and the reasoning behind the steps you took.
> 
> You don't need to document every single thing you coded, but walk them through the key sections of the project build.
> 
> Some people will document the build/code process by discussing the key stages they worked on. Others will do a day by day guide. It’s entirely up to you how you structure this, as long as you discuss all the key things above.

### 
- First things first, holy grail layout
- Then, basic board layout
- Started with classes for players and the game itself (Scoreboard)
- Centred work around the game.js file
- Functions for each repeated step



___
## Challenges

> Challenges are great for showing your learning journey and problem solving, and this is a section that many engineers will check out. Every day of your engineering career you’ll encounter challenges, this is part of your growth and development. It’s the challenges you encounter that helps you become a stronger and more competent engineer. 
> 
> Here you will detail any particular challenges you encountered as you were coding the project. 



> Questions to answer here:
> 
> What technical challenges did you come across? 
> Why were these challenges? 
> What problem solving did you do to rectify them?
> Team dynamics/ Project management
> Tools/Tech you used

Toggling the class list!
        // // if the player's name matches the current player's name
        // if (player.name === scoreboard.currentPlayer.name) {
        //     document.querySelector(`#${scoreboard.currentPlayer.playerNumber}-stats > h3`).classList.add('hidden');
        //     document.querySelector(`#${scoreboard.otherPlayer.playerNumber}-stats > h3`).classList.remove('hidden');
        // }
        // else {
        //     document.querySelector(`#${scoreboard.currentPlayer.playerNumber}-stats > h3`).classList.remove('hidden');
        //     document.querySelector(`#${scoreboard.otherPlayer.playerNumber}-stats > h3`).classList.add('hidden');
        // }
```js
function showTurn() {
    players.forEach(function(player) {
        document.querySelector(`#${player.playerNumber}-turn`).classList.toggle('hidden');
    })
}
```

- Feeling the urge to jump straight in and start coding
- Trying to choose which bonus exercises to work through / comparing myself to others

___
## Wins

> The Wins section is your opportunity to highlight the aspects of your project you are most proud of. See this as your chance to showcase these parts of your projects to the engineers reading your ReadMes.

> Things you could discuss here:
> 
> Interesting problem solving you did
> Strong sections of code
> Collaboration with other team members
> Visual design of the project

- My game logic


___
## Key Learnings/Takeaways

> This section is one of the other most important parts of your ReadMe from an engineers’ perspective and helps to differentiate each of you from your classmates and team members. 
> 
> Engineers love to understand what you learn from each project and how it has shaped you as an engineer. 
> 
> See this as your opportunity to show the engineers how your skills grew during each project sprint. 

> Things you could discuss here:
> 
> What Technologies/Tools do you now feel more confident with? Tell them specifically what you learnt about these. 
> What engineering processes did you become more comfortable with? Standups? Pair programming? Project management? Tell them what you learnt from these processes?

- Flexbox: I went into this project seeing Flexbox as my nemesis. Much like when I learnt to drive, I thought "I'm just not suited to this, I'll never find this easy". And much like driving, I don't find it easy as such, but I can find myself doing a good job whilst on autopilot. Here, I noticed myself centring the Game Outcome message using Flexbox without looking it up, and getting the right result first time.
- Debugging
- Stepping away from a problem
- Sketching out logical processes




___
## Bugs

- Favicon compatibility: iOS Safari and classic desktop browsers are covered, but Android Chrome and Edge/IE12 require different formats that I haven't yet added.


___
## Future Improvements

- Allow players to customize their tokens (specifically, choosing their flower colours)
- Use localStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity
- Create an unbeatable AI opponent