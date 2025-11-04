jQuery(document).ready(function($) {
    "use strict";

//Counter varialbe
let counter = document.querySelector(".counter");
const btnLower = document.querySelector("#btn_lowerCount");
const btnAdd = document.querySelector("#btn_AddCount");

let count = 0;

//Function Calling
btnLower.addEventListener("click", incrementCount);
btnAdd.addEventListener("click", decrementCount);

// incrementCount Function
function incrementCount(){
  count++;
  counter.innerHTML = count;

  if (counter.innerHTML> "0"){
    counter.style.color = "blue";
  }
  else if (counter.innerHTML === "0") {
    counter.style.color = "#222";
  }
  counter.animate([{opacity:"0.1"},{opacity:"1"}],{duration:1000,fill:"forwards"});
}

//decrementCount Function
function decrementCount() {
  count--;
  counter.innerHTML = count;

  if (counter.innerHTML<"0"){
    counter.style.color = "red";
  }
  else if (counter.innerHTML === "0") {
    counter.style.color = "#222";
  }
  counter.animate([{opacity:"0.2"},{opacity:"1"}],
  {duration:1500,fill:"forwards"});
}


});
