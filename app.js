
let choices = ["rock","paper","scissor"];
let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    return computerSelection = choices[Math.floor(Math.random() * choices.length)];
}

function singleRound(){
    if (playerSelection === computerSelection){
    //    alert("Its a tie! play again")
       } else if(playerSelection == 'rock' && computerSelection == 'scissor'){
           /*alert('Player wins, Rock beats Scissor!'),*/ ++playerScore;
       } else if (playerSelection == 'rock' && computerSelection == 'paper'){
           /*alert("You lose, Paper beats Rock!"),*/ ++computerScore;
       }else if (playerSelection == 'scissor' && computerSelection == 'paper'){
           /*alert("You win, Scissor beats Paper!"),*/ ++playerScore;
       }else if (playerSelection == 'scissor' && computerSelection == 'rock'){
           /*alert("You lose, Rock beats Scissors!"),*/ ++computerScore;
       }else if (playerSelection == 'paper' && computerSelection == 'scissor'){
           /*alert("You lose, Scissors beats Paper!"),*/ ++computerScore;
       }else if (playerSelection == 'paper' && computerSelection == 'rock'){
           /*alert("You win, Paper beats Rock!"),*/ ++playerScore;
       }

}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = 'rock';
    computerPlay();
    singleRound()

    const playerPoints = document.querySelector('.userScore')
    playerPoints.textContent = `Player points: ${playerScore}`;

    const compPoints = document.querySelector('.compScore')
    compPoints.textContent = `Computer points: ${computerScore}` 

    const final = document.querySelector('.results')
    if (playerScore >= 5){
        final.textContent = "you win"
    } else if (computerScore >=5){
        final.textContent = "you lose"
    }
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    computerPlay();
    singleRound()

    const playerPoints = document.querySelector('.userScore')
    playerPoints.textContent = `Player points: ${playerScore}`;

    const compPoints = document.querySelector('.compScore')
    compPoints.textContent = `computer Score: ${computerScore}` 

    const final = document.querySelector('.results')
    if (playerScore >= 5){
        final.textContent = "you win";
    } else if (computerScore >=5){
        final.textContent = "you lose"
    } 
})

const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () => {
    playerSelection = 'scissor';
    computerPlay();
    singleRound()

    const playerPoints = document.querySelector('.userScore')
    playerPoints.textContent = `Player points: ${playerScore}`;

    const compPoints = document.querySelector('.compScore')
    compPoints.textContent = `computer Score: ${computerScore}` 

    const final = document.querySelector('.results')
    if (playerScore >= 5){
        final.textContent = "you win"
    } else if (computerScore >=5){
        final.textContent = "you lose"
    }
})