// HEADER SCROLL

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.background = "#011540";
    header.style.boxShadow =
      "0 10px 30px rgba(0,0,0,.3)";

  } else {

    header.style.background = "#02184a";
    header.style.boxShadow = "none";

  }

});




// RESULT COUNTER

const counters =
document.querySelectorAll(".result-card h1");

counters.forEach(counter => {

let target =
parseInt(counter.innerText);

let count = 0;

let speed = target / 60;


function update(){

if(count < target){

count += speed;

counter.innerText =
Math.floor(count)+"+";

requestAnimationFrame(update);

}

else{

counter.innerText =
target+"+";

}

}

update();

});






// CARD HOVER

const cards =
document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform=

"translateY(-12px) scale(1.03)";

});


card.addEventListener("mouseleave",()=>{

card.style.transform=

"translateY(0) scale(1)";

});

});







// SMOOTH SCROLL

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor=>{

anchor.addEventListener("click",

function(e){

e.preventDefault();

document.querySelector(

this.getAttribute("href")

).scrollIntoView({

behavior:"smooth"

});

});

});






// STARS BACKGROUND

const stars =
document.querySelector(".stars");

let position = 0;

function animateStars(){

position += 0.2;

stars.style.backgroundPositionY =
position + "px";

requestAnimationFrame(
animateStars
);

}

animateStars();






// TELEGRAM BUTTON EFFECT

const tg =
document.querySelector(".telegram");

tg.addEventListener("mouseenter",()=>{

tg.style.transform=
"scale(1.08)";

});


tg.addEventListener("mouseleave",()=>{

tg.style.transform=
"scale(1)";

});