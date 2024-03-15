function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let choice = choices[Math.floor(Math.random()*choices.length)];
  return choice;
};

function playRound(playerSelection, computerSelection) {
  
}

function playerSelection(params) {
  
}

function computerSelection() {
  return getComputerChoice();
}

function playGame(){
  
}

console.log(getComputerChoice());