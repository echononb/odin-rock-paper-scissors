let scoreUser = 0;
let scoreComputer = 0;
let  ties = 0;
let playedGames = 0;

function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];
  return computerSelection;
}

function computerSelection() {
  return getComputerChoice();
}

function playerSelection() {
  const userSelection = window
    .prompt("Choose: Rock, Paper or Scissors")
    .toUpperCase();
  // if (userSelection !== "ROCK" || userSelection !== "PAPER" || userSelection !== "SCISSORS") {
  //   userSelection = window
  //     .prompt("Choose: Rock, Paper or Scissors")
  //     .toUpperCase();
  // }
  return userSelection;
}


function playRound(playerSelection, computerSelection) {
  console.clear()
  const userPick = playerSelection();
  const computerPick = computerSelection();
  if (userPick == "ROCK" && computerPick == "SCISSORS") {
    scoreUser++;
    return `You win! Rock beats scissors!!`;

  }else if(userPick == "SCISSORS" && computerPick == "ROCK"){
    scoreComputer++;
    return `You lose! Rock beats scissors!!`;

  }else if(userPick == "SCISSORS" && computerPick == "PAPER"){
    scoreUser++;
    return `You win! Scissors beats paper!!`;

  }else if(userPick == "PAPER" && computerPick == "SCISSORS"){
    scoreComputer++
    return `You lose! Scissors beats paper!!`;

  }else if(userPick == "PAPER" && computerPick == "ROCK"){
    scoreUser++;
    return `You win!! Paper beats rock!!`;

  }else if (userPick == "ROCK" && computerPick == "PAPER") {
    scoreComputer++;
    return `You lose!! Paper beats rock!!`;

  } else if (userPick == computerPick) {
    console.log("Tie!!");
    ties++;
  }
}


function playGame(){
  playedGames++;
  console.log(`Score: User= ${scoreUser} | Computer= ${scoreComputer}`);
  console.log(`Ties= ${ties} | Played games = ${playedGames}`);
}
