function computerPlay() {

    // random number between 0 and 2 inclusive
    let selection = Math.floor(Math.random() * 3);

    if (selection == 0) {
        return 'Rock';
    } else if (selection == 1) {
        return 'Paper';
    } else if (selection == 2) {
        return 'Scissors';
    }

}

function playRound(playerSelection, computerSelection) {

    // capitalize first letter and lowercase rest if player selection is valid
    if (playerSelection != '' && playerSelection) {
        playerSelection = playerSelection[0].toUpperCase() + (playerSelection.slice(1)).toLowerCase();
    }

    if (playerSelection === computerSelection) {
        return 'Tie. ' + playerSelection + ' ties with ' + computerSelection + '.';
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors' 
            || playerSelection === 'Paper' && computerSelection === 'Rock'
            || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You win! ' + playerSelection + ' beats ' + computerSelection;
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors' 
    || computerSelection === 'Paper' && playerSelection === 'Rock'
    || computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return 'You lose! ' + computerSelection + ' beats ' + playerSelection;
    } else {
        return 'Error';
    }

}

function game() {
    
    let playerWins = 0;
    let computerWins = 0;
    let ties = 0

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose rock, paper, or scissors.')
        let computerSelection = computerPlay();
        let roundMessage = playRound(playerSelection, computerSelection);
        console.log(roundMessage)
        if (whoWonRound(roundMessage) === 'Player') {
            playerWins++;
        } else if (whoWonRound(roundMessage) === 'Computer') {
            computerWins++;
        } else if (whoWonRound(roundMessage) === 'Neither') {
            ties++;
        }
    }

    console.log('Player won ' + playerWins + ' times. ' + 'Computer won ' + computerWins + ' times. ' +  'The were ' + ties + ' tie rounds.')

    if (playerWins > computerWins) {
        console.log('Player wins the game.');
    } else if (computerWins > playerWins) {
        console.log('Computer wins the game');
    } else if (playerWins === computerWins) {
        console.log('The game is tied.');
    } else {
        console.log('Error');
    }

}

function whoWonRound(roundMessage) {

    if (roundMessage.slice(0, 8) === 'You win!') {
        return 'Player';
    } else if (roundMessage.slice(0, 9) === 'You lose!') {
        return 'Computer';
    } else if (roundMessage.slice(0, 4) === 'Tie.') {
        return 'Neither';
    } else {
        return 'Error';
    }

}