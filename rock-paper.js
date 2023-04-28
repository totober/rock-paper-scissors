
function getUserChoice () {

 let userValue = prompt("Choose your weapon: rock, paper or scissors").toLowerCase();

 return userValue
}

let userChoice = getUserChoice();

console.log(userChoice);

function getMachineChoice () {
    let values = ["rock", "paper", "scissors"];
    let randomValue = values[Math.floor(Math.random()* values.length)]; 
    return randomValue;
} 

let machineChoice = getMachineChoice();

console.log(machineChoice);

  let userCounter = 0;
  let machineCounter = 0;
  let finalScore = `User score ${userCounter}, Machine score ${machineCounter}`;

function play(userChoice, machineChoice) {

  if (userChoice === machineChoice){ 
   
   return console.log("Its a tie!") ;
    
  } else if (userChoice === "rock" && machineChoice === "scissors"){
    
    console.log("You win! rock beats scissors");
   //return "You win! rock beats scissors";
    return  userCounter += 1
  } else if (userChoice === "paper" && machineChoice === "rock"){

    console.log("You win! paper beats rock");
    //return "You win! paper beats rock";
    return  userCounter += 1

  } else if (userChoice === "scissors" && machineChoice === "paper"){
    
    console.log("You win! scissors beat paper");
    //return "You win! scissors beat paper";
    return userCounter += 1

  } else {
    
    console.log(`You lose! ${machineChoice} beats ${userChoice}`);
   //return `You lose! ${machineChoice} beats ${userChoice}`;
   return machineCounter += 1

  }

  }
    

let roundResult = play(userChoice, machineChoice);
console.log(roundResult);

function game() {
  play(getUserChoice(),getMachineChoice());
  console.log(userCounter);
  console.log(machineCounter);
  play(getUserChoice(),getMachineChoice());
  console.log(userCounter);
  console.log(machineCounter); 
  play(getUserChoice(),getMachineChoice());
  console.log(userCounter);
  console.log(machineCounter);
  play(getUserChoice(),getMachineChoice());
  console.log(userCounter);
  console.log(machineCounter);
  play(getUserChoice(),getMachineChoice());
  console.log(userCounter);
  console.log(machineCounter);
 

if (userCounter>machineCounter) {
  return "Congrats! you win"
} else if (machineCounter>userCounter) {
  return "Too bad! you lose"
} else {
  return "Wow! its a tie"
}

}
