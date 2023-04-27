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

let userWin = 0;
let machineWin = 0;

  if (userChoice === machineChoice){
   console.log("Its a tie!"); 
   //return "Its a tie!";  
    
  } else if (userChoice === "rock" && machineChoice === "scissors"){
    userWin = userWin++
    console.log("You win! rock beats scissors");
   //return "You win! rock beats scissors";

  } else if (userChoice === "paper" && machineChoice === "rock"){
    userWin = userWin++
    console.log("You win! paper beats rock");
    //return "You win! paper beats rock";

  } else if (userChoice === "scissors" && machineChoice === "paper"){
    userWin = userWin++
    console.log("You win! scissors beat paper");
    //return "You win! scissors beat paper";

  } else {
    machineWin = machineWin++
    console.log(`You lose! ${machineChoice} beats ${userChoice}`);
   // return `You lose! ${machineChoice} beats ${userChoice}`;

  }
 
  }
  
  console.log(play(userChoice, machineChoice)); 
   function contador(userWin, machineWin) {
      if (userWin === 1) {
        return userWin;
      } else {
        return machineWin;
      }
} 


function game() {
    for (i=1; i<= 5; i++) {
        play(userChoice, machineChoice);
        
        console.log(play());
    }
    
}

