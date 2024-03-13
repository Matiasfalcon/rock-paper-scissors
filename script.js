// Get elements from the DOM
const btnRock = document.querySelector(".btn-rock");
const btnPaper = document.querySelector(".btn-paper");
const btnScissor = document.querySelector(".btn-scissor");
const selectionMessage = document.querySelector(".selection-message");
const btnReset = document.querySelector(".reset-game");
const playerScoreElement = document.querySelector(".player-score");
const computerScoreElement = document.querySelector(".computer-score");

// Initial scores
let playerScore = 0;
let computerScore = 0;

// Adding event listeners
btnRock.addEventListener("click", () => handleButtonClick("Rock"));
btnPaper.addEventListener("click", () => handleButtonClick("Paper"));
btnScissor.addEventListener("click", () => handleButtonClick("Scissor"));
btnReset.addEventListener("click", resetGame);

// Game restart function
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    updateSelectionMessage("Select your weapon!");
}

// Function to handle the click of a button
function handleButtonClick(playerSelection) {
    playRound(playerSelection);
}

// Computer selection function
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissor"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Function that plays a round
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    updateSelectionMessage(`${playerSelection} vs ${computerSelection}`);
    const result = compareChoices(playerSelection, computerSelection);

    if (result === "win") {
        playerScore++;
    } else if (result === "lose") {
        computerScore++;
    }

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

// Function to compare the choices of the player and the computer
function compareChoices(playerSelection, computerSelection) {
    const winMap = {
        Rock: "Scissor",
        Paper: "Rock",
        Scissor: "Paper",
    };

    return winMap[playerSelection] === computerSelection ? "win" :
        winMap[computerSelection] === playerSelection ? "lose" :
            "draw";
}

// Function to update the selection message
function updateSelectionMessage(message) {
    selectionMessage.textContent = message;
}
