let userChoice;
let botChoice;

const ResultText = document.querySelector("p");

function batChoice(){
  userChoice = "bat";
  botChoiceGenerate();
  displayResult();
}

function ballChoice(){
  userChoice = "ball";
  botChoiceGenerate();
  displayResult();
}

function stumpChoice(){
  userChoice = "stump";
  botChoiceGenerate();
  displayResult();
}

function botChoiceGenerate(){
  let randomNum = Math.floor(Math.random()*3);

  if(randomNum === 0){
    botChoice = "bat";
  }
  else if (randomNum === 1){
    botChoice = "ball";
  }
  else{
    botChoice = "stump";
  }
}

function displayResult(){
  if(userChoice === botChoice){
    ResultText.innerText = "Tie";
  } else {
    ResultText.innerText = `You: ${userChoice} | Bot: ${botChoice}`;
  }
}