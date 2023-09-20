// Player One
let playerOneMoveOneType = undefined;
let playerOneMoveOneValue = undefined;

let playerOneMoveTwoType = undefined;
let playerOneMoveTwoValue = undefined;

let playerOneMoveThreeType = undefined;
let playerOneMoveThreeValue = undefined;

// Player Two
let playerTwoMoveOneType = undefined;
let playerTwoMoveOneValue = undefined;

let playerTwoMoveTwoType = undefined;
let playerTwoMoveTwoValue = undefined;

let playerTwoMoveThreeType = undefined;
let playerTwoMoveThreeValue = undefined;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (moveOneValue + moveTwoValue + moveThreeValue > 99) {
        return null;
    } else if (player === 'Player One') {
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;

        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;

        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === "Player Two") {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;

        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;

        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    } else {
        return null;
    }
}

const getRoundWinner = (roundNumber) => {
    let playerOneType;
    let playerOneValue;
    let playerTwoType;
    let playerTwoValue;

    switch (roundNumber) {
        case 1:
            playerOneType = playerOneMoveOneType;
            playerOneValue = playerOneMoveOneValue;
            playerTwoType = playerTwoMoveOneType;
            playerTwoValue = playerTwoMoveOneValue;
            break;
        case 2:
            playerOneType = playerOneMoveTwoType;  // Corrected
            playerOneValue = playerOneMoveTwoValue;  // Corrected
            playerTwoType = playerTwoMoveTwoType;  // Corrected
            playerTwoValue = playerTwoMoveTwoValue;  // Corrected
            break;
        case 3:
            playerOneType = playerOneMoveThreeType;  // Corrected
            playerOneValue = playerOneMoveThreeValue;  // Corrected
            playerTwoType = playerTwoMoveThreeType;  // Corrected
            playerTwoValue = playerTwoMoveThreeValue;  // Corrected
            break;
        default:
            return null;
    }

    if (playerOneType === playerTwoType) {
        if (playerOneValue === playerTwoValue) return "Tie";
        return playerOneValue > playerTwoValue ? "Player One" : "Player Two";
    }
    if (
        (playerOneType === 'rock' && playerTwoType === 'scissors') ||
        (playerOneType === "scissors" && playerTwoType === "paper") ||
        (playerOneType === "paper" && playerTwoType === "rock")
    ) {
        return "Player One"
    } else {
        return "Player Two"
    }
}

const getGameWinner = () => {
    let playerOneWins = 0;
    let playerTwoWins = 0;

    for (let i = 1; i <=3; i++) {
        const winner = getRoundWinner(i);
        if (winner === "Player One") {
            playerOneWins++;
        } else if (winner === "Player Two") {
            playerTwoWins++;
        }
    }

    if (playerOneWins === playerTwoWins) return "tie";
    return playerOneWins > playerTwoWins ? "Player One" : "Player Two";

}

const setComputerMoves = () => {
    const moves = ["rock", "scissors", "paper"];

    const randomMoveType = () => moves[Math.floor(Math.random() * moves.length)];

    let value1 = Math.floor(Math.random() * 98) + 1;
    let value2 = Math.floor(Math.random() * (99 - value1)) + 1;
    let value3 = 99 -value1 - value2;

    setPlayerMoves("Player Two", randomMoveType(), value1, randomMoveType(), value2, randomMoveType(), value3);

}