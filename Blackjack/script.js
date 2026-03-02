let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = ""; 
let cardEl = document.querySelector("#card-el");
let sumEl = document.querySelector("#sum");
let messageEl = document.querySelector("#messge-el");

let player = {
  Name: window.prompt("Enter your name"),
  playerChips:window.prompt("How much $ chips you want to spend")
} 

let playerEl = document.getElementById("player-El");
playerEl.textContent = player.Name+":" +" " + "$" + player.playerChips

function getRandomCard(){
  let randomNumber = Math.floor(Math.random() * 13) +1;
  if(randomNumber > 10){
    return 10;
  } else if (randomNumber === 1){
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  hasBlackJack = false;
  message = "";
  renderGame();
}

function renderGame(){
  cardEl.innerText = "Cards:";
  sumEl.textContent = "Sum: " + sum;
  for(let i = 0; i < cards.length; i++){
  cardEl.textContent += cards[i] + " ";
}


if(sum <= 20){
  message = "Do you want to draw a new card? ";
} else if (sum === 21){
  message = "Wohoo! You've got Blackjack! ";
  hasBlackJack = true;
} else{
  message = "You're out of the game! ";
  isAlive = false;
}

  messageEl.textContent = message;


}

function newCard(){
  if (isAlive === true && hasBlackJack === false )
    {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
  }
}


