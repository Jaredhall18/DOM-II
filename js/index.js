// Your code goes here
//MouseOver Event
const navHover = document.querySelector('.nav');

navHover.addEventListener('mouseover', event => {
    event.target.style.color = "#20b2aa"
});

//MouseOut Event
navHover.addEventListener('mouseout', event => {
    event.target.style.color = "black"
});

//Toggle Colors of Welcome to Fun Bus when Page Loads
const strobeHeader = document.querySelector('body');

const strobeBackground = function() {
   (strobeHeader.style.backgroundColor == "blue") ? strobeHeader.style.backgroundColor = "yellow" : strobeHeader.style.backgroundColor = "blue";
}

strobeHeader.addEventListener('wheel', strobeBackground);
// const strobeEffect = setInterval(strobeBackground, 500);
const strobeEffect = setInterval;


