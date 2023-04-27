let userChoice = prompt("Choose your weapon: rock, paper or scissors").toLowerCase();
console.log(userChoice);


function getMachineChoice () {
    let values = ["rock", "paper", "scissors"];
    let randomValue = values[Math.floor(Math.random()* values.length)]; 
    return randomValue;
} 


let machineChoice = getMachineChoice();

console.log(machineChoice);

function play(userChoice, machineChoice) {
  if (userChoice === machineChoice){
    return "Its a tie!";
  } else if (userChoice === "rock" && machineChoice === "scissors"){
    return "You win! rock beats scissors";
  } else if (userChoice === "paper" && machineChoice === "rock"){
    return "You win! paper beats rock";
  } else if (userChoice === "scissors" && machineChoice === "paper"){
    return "You win! scissors beat paper";
  } else {
    return `You lose! ${machineChoice} beats ${userChoice}`;
  }
} 
console.log(play(userChoice, machineChoice)); 

  

