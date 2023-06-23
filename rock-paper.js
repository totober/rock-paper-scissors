// DOM STUFF //

/* let buttons = document.querySelectorAll("button");
console.log(buttons)

buttons.forEach(button => {

  let buttonName = button.textContent;
  console.log(buttonName)

  button.addEventListener("click", getUserChoice)

})  */

// let rock = document.getElementById("rock");
// let paper = document.getElementById("paper");
// let scissors = document.getElementById("scissors");


// rock.addEventListener("click", getUserChoice);
// paper.addEventListener("click", getUserChoice);
// scissors.addEventListener("click", getUserChoice);

// let name = 


function getUserChoice (e) {

//  let userValue = e.target.textContent;
//  console.log(userValue)
let userValue = prompt("choose")

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


function play(userChoice, machineChoice) {

  if (userChoice === machineChoice){ 

   console.log("Its a tie!");

   return  userCounter += 0;
    
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


let finalScore = `User score ${userCounter}, Machine score ${machineCounter}`;
 console.log(finalScore);



// con esto intento que el juego se reinicie una vez terminadas las 5 rondas, pero no lo consigo.
//siguen sumandose.. tocara ver mas adelante.

/* function game() {

  for (let i=1; i <= 5; i++ ){
    play(getUserChoice(), getMachineChoice());
    console.log(userCounter);
    console.log(machineCounter);

  }

  let total = `User score  ${userCounter} Machine score ${machineCounter}`;
  
  if (userCounter>machineCounter) {
    return total += " Congrats! you win"
  } else if (machineCounter>userCounter) {
    return total += " Too bad! you lose"
  } else {
    return total += " Wow! its a tie"
  }

}  */




