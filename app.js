let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started.");
    started = true;
    levelup();
  }
});

function gameflash(btn) {
  btn.classList.add("gameflash");
  setTimeout(function () {
    btn.classList.remove("gameflash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIndx = Math.floor(Math.random() * 3);
  let randColor = btns[randIndx];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randIndx);
  // console.log(randColor);
  // console.log(randBtn);
  gameseq.push(randColor);
  console.log(gameseq);
  gameflash(randBtn);
}
function checkAns(idx) {
  // console.log("Current: ",level);
  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game Over ! Your Score is <b>${level} <b/> <br>Press Any key to start`;
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(function () {
      body.style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnpress() {
  // console.log(this);
  let btn = this;
  userflash(btn);
  let usercolor = btn.getAttribute("id");
  userseq.push(usercolor);

  checkAns(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  userseq = [];
  gameseq = [];
  level = 0;
}
