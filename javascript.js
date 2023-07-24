

let getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}
let getComputerChoice = () => {
    let choices = ["Rock", "Paper", "Scissors"];
    return choices[getRandomInt(3)];
}

let playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") ||  (playerSelection === "scissors" && computerSelection === "paper") ) {
        return ("You win! " + playerSelection + " beats " + computerSelection + "!");
    } else if (playerSelection === computerSelection){
        return "Tie!"
    } else {
        return ("You lose! " + computerSelection + " beats " + playerSelection + "!");

    }

}

let game = () => {
    for(let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter your choice");
        const computerChoice = getComputerChoice();
        console.log(playRound(playerSelection,computerChoice));
    }
}

game();