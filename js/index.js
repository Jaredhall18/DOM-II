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

//Toggle Colors of Background on Wheel Scroll
const strobeHeader = document.querySelector('body');

const strobeBackground = function() {
   (strobeHeader.style.backgroundColor == "skyblue") ? strobeHeader.style.backgroundColor = "white" : strobeHeader.style.backgroundColor = "skyblue";
}

strobeHeader.addEventListener('wheel', strobeBackground);

//Alert Message When clicking Sign Me Up!
const sunFunButton = document.querySelector('header');

sunFunButton.addEventListener('click', event => {
    window.alert("IT'S PARTY TIME!!!"); 
})

//keypress

//KeyDown Changes body Background Color to Black
const headerColor = document.querySelector('body');

document.addEventListener('keydown', event => {
    if(event.key === 'Escape') {
        headerColor.style.backgroundColor = "black";
    }
});


//KeyUp Changes body Background Color to White
headerColor.addEventListener('keyup', event => {
    if(event.key === 'Escape') {
        headerColor.style.backgroundColor = "white";
    }
});

// Create border around Fun Bus on Page Load
const funBusBorder = document.querySelector('.content-destination img');

funBusBorder.addEventListener('load', event => { 
        funBusBorder.style.borderColor = "blue";
        funBusBorder.style.borderWidth = "10px";
        funBusBorder.style.borderStyle = "solid";
})


//dblclick an img to make it shrink
const images = document.querySelectorAll('.content-section img');

function shrink(event){
    event.target.style.width = "50%"
}

images.forEach(element => element.addEventListener('dblclick', shrink));
