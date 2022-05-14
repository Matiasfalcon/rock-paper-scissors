function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * (3 - 0)) + 0];
}

let playerScoreCounter = 1;
let computerScoreCounter = 1;
function playRound(e) {
    const playerSelection = e.target.classList.value;
    const computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    // rock > scissors / paper > rock / scissors > paper
    if (playerSelection === computerSelection) {
        console.log('empate');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('ganaste');
        const playerScore = document.querySelector('.player-score');
        playerScore.textContent = playerScoreCounter;
        playerScoreCounter++;
    } else {
        console.log('perdiste');
        const computerScore = document.querySelector('.computer-score');
        computerScore.textContent = computerScoreCounter;
        computerScoreCounter++;
    }
}

const btnRock = document.querySelector('.rock');

btnRock.addEventListener('click', playRound);