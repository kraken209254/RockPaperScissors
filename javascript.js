

let getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}
let getComputerChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(3)];
}
let playerScore = 0;
let gameScore = 0;
let playRound = (playerSelection) => {

    let computerSelection = getComputerChoice();
    if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") ||  (playerSelection === "scissors" && computerSelection === "paper") ) {
        results.textContent = "You win! " + playerSelection + " beats " + computerSelection + "!";
        playerScore++;
        resultsP.textContent = playerScore.toString();


    } else if (playerSelection === computerSelection){
        results.textContent = "Tie!";
    } else {
        results.textContent = "You lose! " + computerSelection + " beats " + playerSelection + "!";
        gameScore++;
        resultsC.textContent = gameScore.toString();


    }
    if(playerScore >= 5 || gameScore >= 5){
        results.textContent = "";
        if(playerScore >= 5) results.textContent = "Player Wins!";
        if(gameScore >= 5) results.textContent = "Computer Wins!";
        playerScore = 0;
        gameScore = 0;
        resultsP.textContent = playerScore.toString();
        resultsC.textContent = gameScore.toString();




    }

}

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const results = document.querySelector('#results');
const resultsP = document.querySelector('#resultsP');
const resultsC = document.querySelector('#resultsC');




btnRock.addEventListener('click', () => {
    playRound("rock");
});
btnPaper.addEventListener('click', () => {
    playRound("paper");
});
btnScissors.addEventListener('click', () => {
    playRound("scissors");
});





