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