let decreasebtn = document.getElementById("decrease");
let increasebtn = document.getElementById("increase");
let resetbtn = document.getElementById("reset");
let counter = document.getElementById("counter");

let count = 0;

function increase(){
  count++;
  counter.innerText = count;
}

function decrease(){
  if(count>0){
  count--;
    counter.innerText = count;
  }
  else{
    window.alert("Once you reach zero, you can't decrease it any further because there are no negative text units ")
  }
}

function reset(){
  count=0;
  counter.innerText = count;
}