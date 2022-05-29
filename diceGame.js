// Variables

let newGameButton = document.getElementById("newGameButton");

// Player One variables

let rollButtonOne = document.getElementById("rollButtonOne");
rollButtonOne.disabled = true;

let holdButtonOne = document.getElementById("holdButtonOne");
holdButtonOne.disabled = true;

let numberRolledOne = document.getElementById("numberRolledOne");

let scoreOne = document.getElementById("scoreOne");

let playerOneScore = 0;

// Player Two variables

let rollButtonTwo = document.getElementById("rollButtonTwo");

let holdButtonTwo = document.getElementById("holdButtonTwo");
holdButtonTwo.disabled = true;

let numberRolledTwo = document.getElementById("numberRolledTwo");
rollButtonTwo.disabled = true;

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
        alert("You rolled a 1 first, scores will now be reset!");
        reset("playerOne");
    } else if (playerOneScore >= 2 && playerOneScore <= 20 && rolledNumOne == 1) {
        alert("You rolled a 1, You lose, Player Two wins!");
        newGame();
// If score is less than 20, roll again
    } else if (playerOneScore <= 20) {
        playerOneScore += rolledNumOne;
        scoreOne.innerHTML = playerOneScore;
// If players score is greater than 20, you win
    } else {
        alert("You scored more than 20, Player One wins!");
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

// Keeps track of player Two's score
function scoreFunctionTwo(rolledNumTwo) {
    if (playerTwoScore <= 1 && rolledNumTwo == 1) {
        alert("You rolled a 1 first, scores will now be reset!");
        reset("playerTwo");
    } else if (playerTwoScore >= 2 && playerTwoScore <= 20 && rolledNumTwo == 1) {
        alert("You rolled a 1, You lose, Player One wins!");
        newGame();
// If score is less than 20, roll again
    } else if (playerTwoScore <= 20) {
        playerTwoScore += rolledNumTwo;
        scoreTwo.innerHTML = playerTwoScore;
// If players score is greater than 20, you win
    } else {
        alert("You scored more than 20, Player Two wins!");
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
    rollButtonOne.disabled = false;
    holdButtonOne.disabled = false;
    rollButtonTwo.disabled = true;
    holdButtonTwo.disabled = true;
}

function reset(player) {
    scoreOne.innerHTML = null;
    numberRolledOne.innerHTML = null;
    playerOneScore = 0;
    scoreTwo.innerHTML = null;
    numberRolledTwo.innerHTML = null;
    playerTwoScore = 0;

    if (player === "playerOne") {
        rollButtonTwo.disabled = false;
        holdButtonTwo.disabled = false;
        rollButtonOne.disabled = true;
        holdButtonOne.disabled = true;
    } else if (player === "playerTwo") {
        rollButtonOne.disabled = false;
        holdButtonOne.disabled = false;
        rollButtonTwo.disabled = true;
        holdButtonTwo.disabled = true;
    } else {
        console.log("play on")
    }
}

newGameButton.addEventListener("click", function () {
    newGame();
});

holdButtonOne.addEventListener("click", function () {
    if (playerOneScore < 21) {
        rollButtonOne.disabled = true;
        holdButtonOne.disabled = true;
        rollButtonTwo.disabled = false;
        holdButtonTwo.disabled = false;
    } else {
        alert("You scored more than 20, Player One Wins!");
    }
});

holdButtonTwo.addEventListener("click", function () {
    if (playerTwoScore < 21) {
        rollButtonTwo.disabled = true;
        holdButtonTwo.disabled = true;
        rollButtonOne.disabled = false;
        holdButtonOne.disabled = false;
    } else {
        alert("You scored more than 20, Player Two Wins!");
    }
});