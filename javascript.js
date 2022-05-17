// variables
let playerScoreCounter = 1;
let computerScoreCounter = 1;
const computerScore = document.querySelector('.computer-score');
const playerScore = document.querySelector('.player-score');
const message = document.querySelector('.game-message');
const resultMessage = document.querySelector('.result-message');
const buttons = document.querySelectorAll('button');
let rounds = 5;




// funciones
function computerPlay() {
    const options = ['rock', 'paper', 'scissor'];
    return options[Math.floor(Math.random() * (3 - 0)) + 0];
}

function playRound(e) {
    let playerSelection = e.target.classList.value;
    let computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    // rock > scissors / paper > rock / scissors > paper
    if (playerSelection === computerSelection) {
        console.log('empate');
        message.textContent = '*' + playerSelection + '*' + ' VS ' + '*' + computerSelection + '*';
        resultMessage.textContent = '*DRAW*';
        playerScore.textContent = playerScoreCounter;
        playerScoreCounter++;
        computerScore.textContent = computerScoreCounter;
        computerScoreCounter++;
        rounds--;
    } else if (playerSelection === 'rock' && computerSelection === 'scissor' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissor' && computerSelection === 'paper') {
        console.log('ganaste');
        message.textContent = '*' + playerSelection + '*' + ' VS ' + '*' + computerSelection + '*';
        resultMessage.textContent = '*YOU WIN*';
        playerScore.textContent = playerScoreCounter;
        playerScoreCounter++;
        rounds--;
    } else {
        console.log('perdiste');
        message.textContent = '*' + playerSelection + '*' + ' VS ' + '*' + computerSelection + '*';
        resultMessage.textContent = '*YOU LOSE*';
        computerScore.textContent = computerScoreCounter;
        computerScoreCounter++;
        rounds--;
    }
    scoreController();
}

function scoreController() {
    if (rounds === 0) {
        if (playerScoreCounter > computerScoreCounter) {
            message.textContent = playerScore.textContent + ' vs ' + computerScore.textContent;
            resultMessage.textContent = 'YOU WIN THE GAME';
        } else {
            if (playerScoreCounter === computerScoreCounter) {
                message.textContent = playerScore.textContent + ' vs ' + computerScore.textContent;
                resultMessage.textContent = 'DRAW THE GAME';
            } else {
                message.textContent = playerScore.textContent + ' vs ' + computerScore.textContent;
                resultMessage.textContent = 'YOU LOSE THE GAME';
            }
        }
        computerScore.textContent = '0';
        playerScore.textContent = '0';
        playerScoreCounter = 1;
        computerScoreCounter = 1;
        rounds = 5;
        return;
    }
}


buttons.forEach(button => {
    button.addEventListener('click', playRound);
});