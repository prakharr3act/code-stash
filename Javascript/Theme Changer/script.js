const h1 = document.querySelector("h1");
const body = document.querySelector("body")
const darkThemeBtn = document.getElementById("dark-theme");
const lightThemeBtn = document.getElementById("light-theme");
const blueThemeBtn = document.getElementById("blue-theme");

darkThemeBtn.addEventListener("click", function(){
 body.style.backgroundColor = "black";
 h1.style.color = "white";
})

lightThemeBtn.addEventListener("click", function(){
 body.style.backgroundColor = "white";
 h1.style.color = "black";
})

blueThemeBtn.addEventListener("click", function(){
 body.style.backgroundColor = "lightblue";
 h1.style.color = "";
})