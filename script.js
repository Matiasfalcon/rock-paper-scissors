let btnRock = document.querySelector(".btn-rock");
let btnPaper = document.querySelector(".btn-paper");
let btnScissor = document.querySelector(".btn-scissor");
let selectionInGame = document.querySelector(".selection-in-game");
let btnReset = document.querySelector(".reset");
let pScore = document.querySelector(".p-score");
let cScore = document.querySelector(".c-score");
let pStartScore = 1;
let cStartScore = 1;

btnRock.addEventListener("click", handleClick);
btnPaper.addEventListener("click", handleClick);
btnScissor.addEventListener("click", handleClick);
btnReset.addEventListener("click", resetGame);

// function to reset game
function resetGame() {
    pStartScore = 1;
    cStartScore = 1;
    cScore.innerHTML = 0;
    pScore.innerHTML = 0;
    selectionInGame.innerHTML = "Select your weapon!";
}

//function to hadle click event
function handleClick() {
    playRound(this.id);
}

// function for computer choice
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissor"];
    let random = Math.floor(Math.random() * 3);
    return options[random];
}

// function that plays a single round
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    // checking comparison
    if (playerSelection == computerSelection) {
        selectionInGame.innerHTML = `${playerSelection} vs ${computerSelection}`;
        pScore.innerHTML = pStartScore++;
        cScore.innerHTML = cStartScore++;
        return console.log("Draw")
    } else {
        if (playerSelection == "Paper" & computerSelection == "Scissor") {
            selectionInGame.innerHTML = `${playerSelection} vs ${computerSelection}`;
            cScore.innerHTML = cStartScore++;
            return console.log("Lose")
        } else {
            if (playerSelection == "Rock" & computerSelection == "Paper") {
                selectionInGame.innerHTML = `${playerSelection} vs ${computerSelection}`
                cScore.innerHTML = cStartScore++;
                return console.log("Lose")
            } else {
                if (playerSelection == "Scissor" & computerSelection == "Rock") {
                    selectionInGame.innerHTML = `${playerSelection} vs ${computerSelection}`
                    cScore.innerHTML = cStartScore++;
                    return console.log("Lose")
                } else {
                    selectionInGame.innerHTML = `${playerSelection} vs ${computerSelection}`
                    pScore.innerHTML = pStartScore++;
                    return console.log("Win")
                }
            }
        }
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
