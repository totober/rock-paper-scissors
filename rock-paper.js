
<<<<<<< HEAD
function getUserChoice () {

let userValue = prompt("Choose your weapon: rock, paper or scissors").toLowerCase();

  return userValue
}
=======
/*  let buttons = document.querySelectorAll("button");
console.log(buttons)

 buttons.forEach(button => {

  let buttonName = button.textContent;
  console.log(buttonName)

  button.addEventListener("click", getUserChoice)

})   */

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let container = document.getElementById("main");
let divResult = document.getElementById("result");


rock.addEventListener("click", play);
paper.addEventListener("click", play);
scissors.addEventListener("click", play);

function createPara () {
  let para = document.createElement("p");
  para.className = "para";
  para.textContent = paraValue;
  divResult.appendChild(para);
} 

function createScorer () {
  let paraScore = document.createElement("p");
  paraScore.className = "scorer";
  paraScore.textContent = `User score  ${userCounter} Machine score ${machineCounter}`;
  divResult.appendChild(paraScore);

    if (userCounter === 5) {
     let finalScoreUser = document.createElement("p")
     finalScoreUser.textContent = "Congrats! you win the game!"
     divResult.appendChild(finalScoreUser);
     userCounter = 0; 
     machineCounter = 0;   

  } else if (machineCounter === 5) {
    let finalScoreMachine = document.createElement("p")
    finalScoreMachine.textContent = "Oh no! you lose the game!"
    divResult.appendChild(finalScoreMachine); 
    machineCounter = 0; 
    userCounter = 0;
  }
  

} 

/* function createFinalPara () {
  let paraFinal = document.createElement("p");
  paraFinal.className = "paraFinal";
  para.textContent = total;
  divResult.appendChild(paraFinal);
} */



//container.addEventListener("click", helper);

>>>>>>> rps-ui




  let userCounter = 0;
  console.log(userCounter)
  let machineCounter = 0; 
  console.log(machineCounter)
  let paraValue = "";




function play(e) {
  

  function getUserChoice () {

    let userValue = e.target.textContent;
     return userValue
    } 
        
let userChoice = getUserChoice();


  function getMachineChoice () {
    let values = ["rock", "paper", "scissors"];
    let randomValue = values[Math.floor(Math.random()* values.length)]; 
    return randomValue;
} 

let machineChoice = getMachineChoice();



  if (userChoice === machineChoice){ 

   paraValue = "Its a tie!";
   userCounter += 0;
   
    
  } else if (userChoice === "rock" && machineChoice === "scissors"){
    
    paraValue = "You win! rock beats scissors";
   //return "You win! rock beats scissors";
   
    userCounter += 1
  } else if (userChoice === "paper" && machineChoice === "rock"){

    paraValue = "You win! paper beats rock";
    //return "You win! paper beats rock";
    
    userCounter += 1

  } else if (userChoice === "scissors" && machineChoice === "paper"){
    
    paraValue = "You win! scissors beat paper";
    //return "You win! scissors beat paper";
    
    userCounter += 1

  } else {
    
    paraValue = `You lose! ${machineChoice} beats ${userChoice}`;
   //return `You lose! ${machineChoice} beats ${userChoice}`;
  
    machineCounter += 1

  }

  createPara();
  createScorer();
 
}



// con esto intento que el juego se reinicie una vez terminadas las 5 rondas, pero no lo consigo.
//siguen sumandose.. tocara ver mas adelante.

<<<<<<< HEAD
function game() {
=======

/* function game() {
>>>>>>> rps-ui

  for (let i=1; i <= 5; i++ ){

    play();
  }

let total = `User score  ${userCounter} Machine score ${machineCounter}`;
  
  if (userCounter>machineCounter) {
    return total += " Congrats! you win"
  } else if (machineCounter>userCounter) {
    return total += " Too bad! you lose"
  } else {
    return total += " Wow! its a tie"
  }

} 




