// Variables

let newGameButton = document.getElementById("newGameButton");

// Player One variables

let rollButtonOne = document.getElementById("rollButtonOne");

let numberRolledOne = document.getElementById("numberRolledOne");

let scoreOne = document.getElementById("scoreOne");

let playerOneScore = 0;

// Player Two variables

let rollButtonTwo = document.getElementById("rollButtonTwo");

let numberRolledTwo = document.getElementById("numberRolledTwo");

let scoreTwo = document.getElementById("scoreTwo");

let playerTwoScore = 0;


//Player One Game

// Click roll button and recieve a number between 1 and 6
rollButtonOne.addEventListener("click", function () {
    let rolledNumOne = Math.floor((Math.random() * 6) + 1);
    numberRolledOne.innerHTML = rolledNumOne;
    scoreFunctionOne(rolledNumOne);
});

// Keeps track of player one's score
function scoreFunctionOne(rolledNumOne) {
    if (playerOneScore <= 1 && rolledNumOne == 1) {
        alert("You rolled a 1 first, scores will now be reset !");
        newGame();
// If score is less than 20, roll again
    } else if (playerOneScore <= 20) {
        playerOneScore += rolledNumOne;
        scoreOne.innerHTML = playerOneScore;
// If players score is greater than 20, you win
    } else {
        alert("You scored more than 20, You win!");
        newGame();

    }
}


//Player Two Game

// Click roll button and recieve a number between 1 and 6
rollButtonTwo.addEventListener("click", function () {
    let rolledNumTwo = Math.floor((Math.random() * 6) + 1);
    numberRolledTwo.innerHTML = rolledNumTwo;
    scoreFunctionTwo(rolledNumTwo);
});

// Keeps track of player two's score
function scoreFunctionTwo(rolledNumTwo) {
    if (playerTwoScore <= 1 && rolledNumTwo == 1) {
        alert("You rolled a 1 first, scores will now be reset !");
        newGame();
// If score is less than 20, roll again
    } else if (playerTwoScore <= 20) {
        playerTwoScore += rolledNumTwo;
        scoreTwo.innerHTML = playerTwoScore;
// If players score is greater than 20, you win
    } else {
        alert("You scored more than 20, You win!");
        newGame();

    }
}


// Clears stats
function newGame() {
    scoreOne.innerHTML = null;
    numberRolledOne.innerHTML = null;
    playerOneScore = 0;
    scoreTwo.innerHTML = null;
    numberRolledTwo.innerHTML = null;
    playerTwoScore = 0;
}

newGameButton.addEventListener("click", function (){
    newGame();
});