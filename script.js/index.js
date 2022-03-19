"use strict";

const guessEl = document.getElementById("guess") ;
const messageEl = document.getElementById("message");
const scoreEl = document.getElementById("score");
const highScoreEl = document.getElementById("high-score");
const btnCheck = document.getElementById("btn-check");
const numberEl = document.getElementById("number");
const btnAgain = document.getElementById("btn-again")

let secretNumber = Math.trunc(Math.random() * 20)+1;
// let guess;
let score = 20;
let highScore = 0;

btnCheck.addEventListener("click",function(){
  let guess = Number (guessEl.value);
  if(!guess){
    document.querySelector(".message").textContent="⛔ No number !";
  }
  else if(guess === secretNumber){
    document.querySelector(".message").textContent="🎉 You are correct";
    numberEl.textContent = secretNumber;
    document.querySelector("body").style.backgroundColor ="#60b347";
    if(score > highScore){
        highScore = score;
        highScoreEl.textContent = highScore;
    }
  }
  else if(score > 1){
    (guess < secretNumber ? document.querySelector(".message").textContent=" Number is Too low try higher number " :document.querySelector(".message").textContent=" Number is Too low try higher number ");
    score--;
    scoreEl.textContent = score;
    guessEl.value = null;
    // if(guess < secretNumber){
    //   document.querySelector(".message").textContent=" Number is Too low try higher number ";
    //   score--;
    //   scoreEl.textContent = score;

    // }
    // if(guess > secretNumber){
    //   document.querySelector(".message").textContent=" Number is Too low try higher number ";
    //   score--;
    //   scoreEl.textContent = score;
    // }
  }
  else{
    document.querySelector(".message").textContent=" you lost the game";
    scoreEl.textContent = 0;
    guessEl.value= null;
    document.querySelector("body").style.backgroundColor ="red";
  }
});
btnAgain.addEventListener("click",()=>{
  document.querySelector("body").style.backgroundColor ="#222";
  numberEl.textContent="?";
  secretNumber = Math.trunc(Math.random() * 20)+ 1;
  guessEl.value = null;
  document.querySelector(".message").textContent="Start Guessing ... ";
  scoreEl.textContent = 20;
})

