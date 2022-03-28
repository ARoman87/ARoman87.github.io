let starts = document.getElementById("stars");
let moon = document.getElementById("moon");
let middle = document.getElementById("middle");
let front = document.getElementById("front");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    moon.style.top = value * 1.05 + 'px';
    middle.style.top = value * 0.1 + 'px';
    text.style.left = value * 1.5 + 'px';
})


