function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * (3 - 0)) + 0];
}

function playRound(playerSelection, computerSelection) {
    // rock > scissors / paper > rock / scissors > paper
    if (playerSelection === computerSelection) {
        return 0;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        return 1;
    } else {
        return -1;
    }
}

function game() {
    const hands = ['rock', 'paper', 'scissors'];
    let PlayerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = hands[window.prompt('Select a number: 1. rock, 2. paper, 3. scissors: ') - 1];
        let computerSelection = computerPlay();
        console.log('Elegiste "' + playerSelection + '" y la maquina eligio: "' + computerSelection + '"');
        let round = playRound(playerSelection, computerSelection);
        if (round === 0) {
            PlayerScore += 0;
            computerScore += 0;
            console.log('Empate');
        } else if (round > 0) {
            PlayerScore++;
            console.log('Ganaste');
        } else {
            computerScore++;
            console.log('Perdiste');
        }

        console.log('*Score* \nPlayer: ' + PlayerScore + ' Computer: ' + computerScore);
    }
}


console.log(game());