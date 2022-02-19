let playerWins = 0;
let computerWins = 0;
let ties = 0;
const buttons = document.querySelectorAll('button');

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
        return 'You win the round! ' + playerSelection + ' beats ' + computerSelection;
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors' 
    || computerSelection === 'Paper' && playerSelection === 'Rock'
    || computerSelection === 'Scissors' && playerSelection === 'Paper') {
        return 'You lose the round! ' + computerSelection + ' beats ' + playerSelection;
    } else {
        return 'Error';
    }

}

// function game() {
    
//     let playerWins = 0;
//     let computerWins = 0;
//     let ties = 0

//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt('Choose rock, paper, or scissors.')
//         let computerSelection = computerPlay();
//         let roundMessage = playRound(playerSelection, computerSelection);
//         console.log(roundMessage)
//         if (whoWonRound(roundMessage) === 'Player') {
//             playerWins++;
//         } else if (whoWonRound(roundMessage) === 'Computer') {
//             computerWins++;
//         } else if (whoWonRound(roundMessage) === 'Tie') {
//             ties++;
//         }
//     }

//     console.log('Player won ' + playerWins + ' times. ' + 'Computer won ' + computerWins + ' times. ' +  'The were ' + ties + ' tie rounds.')

//     if (playerWins > computerWins) {
//         console.log('Player wins the game.');
//     } else if (computerWins > playerWins) {
//         console.log('Computer wins the game');
//     } else if (playerWins === computerWins) {
//         console.log('The game is tied.');
//     } else {
//         console.log('Error');
//     }

// }

function whoWonRound(roundMessage) {

    if (roundMessage.slice(0, 7) === 'You win') {
        return 'Player';
    } else if (roundMessage.slice(0, 8) === 'You lose') {
        return 'Computer';
    } else if (roundMessage.slice(0, 4) === 'Tie.') {
        return 'Tie';
    } else {
        return 'Error';
    }

}

function updateGame(selection) {

    const roundMessage = document.querySelector("#roundMessage");
    const playerScoreDiv = document.querySelector('#playerScore');
    const computerScoreDiv = document.querySelector('#computerScore');
    const gameMessage = document.querySelector('#gameMessage');
    roundMessage.textContent = playRound(selection, computerPlay());

    if (whoWonRound(roundMessage.textContent) === 'Player') {
        playerWins++;
        playerScoreDiv.textContent = 'Player: ' + playerWins;
    } else if (whoWonRound(roundMessage.textContent) === 'Computer') {
        computerWins++;
        computerScoreDiv.textContent = 'Computer : ' + computerWins;
    } else if (whoWonRound(roundMessage.textContent) === 'Tie') {
        ties++;
    }

    if (playerWins >= 5 || computerWins >= 5) {
        if (playerWins >= 5) {
            gameMessage.textContent = 'Player wins the game. ';
        } else if (computerWins >= 5) {
            gameMessage.textContent = 'Computer wins the game. ';
        }
        gameMessage.textContent += 'Player won ' + playerWins + ' time(s). ' 
                + 'Computer won ' + computerWins + ' time(s). ' 
                +  'The were ' + ties + ' tie round(s).';
        buttons.forEach((button) => button.disabled = true);
    }

}

buttons.forEach((button) => {
    button.addEventListener('click', () => updateGame(button.id));
});