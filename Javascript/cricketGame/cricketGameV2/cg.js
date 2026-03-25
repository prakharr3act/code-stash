let userChoice;
let botChoice;

const ResultText = document.querySelector("p");
const ResultArray = document.querySelector("h5");

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

let Score = {
  win: 0,
  lost: 0,
  tie: 0,
}

function displayResult(){
  let result = "";

  if(userChoice === botChoice){
    result = "It's a Tie!";
    Score.tie++;
  } else if(
    (userChoice === "bat" && botChoice === "ball") ||
    (userChoice === "ball" && botChoice === "stump") ||
    (userChoice === "stump" && botChoice === "bat")
  ){
    result = "You Win!";
    Score.win++;
  } else {
    result = "Bot Wins!";
    Score.lost++;
  }

  ResultText.innerText = `You: ${userChoice} | Bot: ${botChoice} | ${result}`;
  ResultArray.innerText = `[Win:${Score.win}| Lost: ${Score.lost} |Tie:${Score.tie}]`
}