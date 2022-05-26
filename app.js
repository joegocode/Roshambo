let choices = ["rock","paper","scissor"];
let playerScore = 0;
let computerScore =0;

/* obtain computer/player selection of rock,paper,scissor*/
function computerPlay(){
    return computerSelection = choices[Math.floor(Math.random() * choices.length)];
}

/*function for a single round of play alerting results*/
function singleRound(){
     if (playerSelection === computerSelection){
        alert("Its a tie! play again")
        } else if(playerSelection == 'rock' && computerSelection == 'scissor'){
            alert('Player wins, Rock beats Scissor!'), ++playerScore;
        } else if (playerSelection == 'rock' && computerSelection == 'paper'){
            alert("You lose, Paper beats Rock!"), ++computerScore;
        }else if (playerSelection == 'scissor' && computerSelection == 'paper'){
            alert("You win, Scissor beats Paper!"), ++playerScore;
        }else if (playerSelection == 'scissor' && computerSelection == 'rock'){
            alert("You lose, Rock beats Scissors!"), ++computerScore;
        }else if (playerSelection == 'paper' && computerSelection == 'scissor'){
            alert("You lose, Scissors beats Paper!"), ++computerScore;
        }else if (playerSelection == 'paper' && computerSelection == 'rock'){
            alert("You win, Paper beats Rock!"), ++playerScore;
        }
    
}
/*function that plays five rounds and returns results*/
function gamePlay(){ 
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt('Choose Rock,paper,Scissor').toLowerCase();
        computerPlay();
        console.log(playerSelection)
        console.log(computerSelection)
        singleRound();
    }
}
 gamePlay();
 console.log(playerScore);
 console.log(computerScore);

/*compare scores and alert winner*/
if (playerScore > computerScore){
    alert(`you win!!!,${playerScore} to ${computerScore}`)
} else if (playerScore < computerScore){
    alert(`you lose!!! ${playerScore} to ${computerScore}`)
} else {alert('its a tie, play again')}
