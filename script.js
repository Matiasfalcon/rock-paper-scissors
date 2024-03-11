// function for computer choice
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let random = Math.floor(Math.random() * 3);
    return options[random];
    }
    
    // function that plays a single round
    function playRound(playerSelection, computerSelection) {
    // convert to lower case
    let pSelection = playerSelection.toLowerCase();
    let cSelection = computerSelection.toLowerCase();
    // checking comparison
    if (pSelection == "rock" & cSelection == "scissors") {
    return "You win! Rock beats Scissors.";
    } if (pSelection == "paper" & cSelection == "rock") {
    return "You win! Paper beats Rock.";
    } if (pSelection == "scissors" & cSelection == "paper") {
    return "You win! Scissors beats paper.";
    } if (pSelection == cSelection) {
    return "It's a draw!";
    }
    else {
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
    }
    
    // function to play entire game
    function playGame() {
    console.log("Welcome! let's Play Rock, Paper and Scissors game!");
    let playerScore = 0;
    let computerScore = 0;
    // five round loop
    for (let i = 0; i < 5; i++) {
    let pSelection = prompt("select option(Rock, Scissors or Paper)");
    let cSelection = getComputerChoice();;
    let result = playRound(pSelection, cSelection);
    // checking if player win or loose
    if (result[4] == 'w') {
    playerScore++;
    } else {
    if (result[4] == 'l') {
    computerScore++;
    } else {
    computerScore++;
    playerScore++;
    }
    }
    console.log(result);
    }
    console.log(`Final Score: Player = ${playerScore} Computer = ${computerScore}`);
    }