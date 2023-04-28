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

let userWin = 0
let machineWin = 0

  if (userChoice === machineChoice){ 
   return "Its a tie!";  
    
  } else if (userChoice === "rock" && machineChoice === "scissors"){
    
    console.log("You win! rock beats scissors");
   //return "You win! rock beats scissors";
    return userWin = userWin + 1
  } else if (userChoice === "paper" && machineChoice === "rock"){

    console.log("You win! paper beats rock");
    //return "You win! paper beats rock";
    return userWin = userWin + 1

  } else if (userChoice === "scissors" && machineChoice === "paper"){
    
    console.log("You win! scissors beat paper");
    //return "You win! scissors beat paper";
    return userWin = userWin + 1

  } else {
    
    console.log(`You lose! ${machineChoice} beats ${userChoice}`);
   //return `You lose! ${machineChoice} beats ${userChoice}`;
   return `Machine total wins: ${machineWin = machineWin + 1} `

  }
 
  }
  
  console.log(play(userChoice, machineChoice));


function game() {
    for (i=1; i<= 5; i++){

      let userTotal = 0;
      let machineTotal = 0;
      let total = `Machine total wins: ${machineTotal} , User total wins: ${userTotal} `;

       play(userChoice, machineChoice); 
        if (userWin == 1){
          userTotal++
        } else {
          machineTotal++
        }
        
        return total
  
    }
}

