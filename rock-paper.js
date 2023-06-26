// DOM STUFF //

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



//container.addEventListener("click", helper);



/* 
function getUserChoice (e) {

let userValue = e.target.textContent;
 return userValue
} */



//let userChoice = getUserChoice();





  let userCounter = 0;
  let machineCounter = 0; 
  let paraValue = "";


function play(e) {
  

let userChoice = e.target.textContent;


  function getMachineChoice () {
    let values = ["rock", "paper", "scissors"];
    let randomValue = values[Math.floor(Math.random()* values.length)]; 
    return randomValue;
} 

let machineChoice = getMachineChoice();



  if (userChoice === machineChoice){ 

   paraValue = "Its a tie!";

   createPara();
  
   return  userCounter += 0;
    
  } else if (userChoice === "rock" && machineChoice === "scissors"){
    
    paraValue = "You win! rock beats scissors";
   //return "You win! rock beats scissors";
   createPara();
    return  userCounter += 1
  } else if (userChoice === "paper" && machineChoice === "rock"){

    paraValue = "You win! paper beats rock";
    //return "You win! paper beats rock";
    createPara();
    return  userCounter += 1

  } else if (userChoice === "scissors" && machineChoice === "paper"){
    
    paraValue = "You win! scissors beat paper";
    //return "You win! scissors beat paper";
    createPara();
    return userCounter += 1

  } else {
    
    paraValue = `You lose! ${machineChoice} beats ${userChoice}`;
   //return `You lose! ${machineChoice} beats ${userChoice}`;
   createPara();
   return machineCounter += 1

  }

  

 
}


console.log(1);
console.log(paraValue);

let finalScore = `User score ${userCounter}, Machine score ${machineCounter}`;
 console.log(finalScore);








// con esto intento que el juego se reinicie una vez terminadas las 5 rondas, pero no lo consigo.
//siguen sumandose.. tocara ver mas adelante.

/*  function game() {

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

}  */




