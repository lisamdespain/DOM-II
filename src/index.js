import './less/index.less'

// Your code goes here!
// Task 1: MOUSEOVER AND TIMEOUT: make the nav links bold on mouseover, then make them go back to normal weight after a specific amount of time
document.querySelectorAll('nav a').forEach(link => link.addEventListener('mouseover', evt => {
    evt.target.style.fontWeight = 'bold';
    setTimeout(function() {
        evt.target.style.fontWeight = "normal";
      }, 600);
    }
));
// Task 2: ONSCROLL: On scroll, make the header fade to 50%
const headerNav = document.querySelector('.main-navigation');
//this next line is new and I don't know why it works or why it's needed, came from https://codeconvey.com/navbar-transparent-to-solid-on-scroll/:
window.onscroll = function() {headerFade()};
function headerFade(){
    if (document.documentElement.scrollTop > 20) {
        headerNav.style.opacity = .5;
} else {
    headerNav.style.opacity = 1;
      }
}
headerNav.addEventListener('onscroll', headerFade);

// Task 3: KEYDOWN: If you push the 4 key, the site background goes black & text goes white. If you push the 5 key, it goes back to normal.
const grabAll = document.querySelector('body');
function fourKey(evt){
    if (evt.key === "4"){
        grabAll.style.background = "black";
        grabAll.style.color = "white";
    } else if (evt.key === "5"){
        grabAll.style.background = "";
        grabAll.style.color = "";
    }
}
document.addEventListener('keydown', fourKey);

//Task 4: WHEEL: When the mouse is over the header image and use the mouse wheel, it will become 110% bigger & not scroll the website. Will need to not have the mouse over the image to scroll further down. https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event

const bigImage = document.querySelector(".intro img")
function zoom(e){
    e.preventDefault();
    // let scale += e.deltaY * -0.01;
    // let scale = Math.min(Math.max(.125, scale), 4);
    let scale = 1.1;
    bigImage.style.transform = `scale(${scale})`;
}

bigImage.addEventListener('wheel', zoom);

//Task 5: LOAD: when the window loads, give an alert. Wishing I could add confetti. Confetti: https://css-tricks.com/write-code-get-confetti/

window.addEventListener('load', () => {
    alert('The page is fully loaded');
  });

//Task 6: FOCUS: Make the first a tag in the header italic on focus.
const links = document.querySelector('a');
function makeLinkItalic(){
    links.style.fontStyle = "italic";
    links.style.color = "red";
    links.style.fontWeight = 'bold';
}
links.addEventListener('focus', makeLinkItalic);

// Task 7: RESIZE: When the user resizes the window, insert the new dimensions into the body. Very weird/interesting behavior - how to get it to report back ONLY when it's done resizing...?

function windowSize(){
    const resizeMessage = document.createElement("p");
    document.body.appendChild(resizeMessage);
    resizeMessage.textContent = `The new window size is ${window.innerHeight} high and ${window.innerWidth} wide.`;
}
window.addEventListener('resize', windowSize);

// Task 8: SELECT: Create an input in HTML, then select text in it, then do something to that text. This is working but only because it's on MDN. I asked it to return the string in uppercase.
const input = document.querySelector('input');

function logSelection(event) {
    const log = document.getElementById('log');
    const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
    log.textContent = `This is what you selected: ${selection.toUpperCase()}`;
  }
    
  input.addEventListener('select', logSelection);

// Task 9: DBLCLICK: make a picture flip when it's double clicked. OH, this is a cool one!

document.querySelectorAll('img').forEach(picture => picture.addEventListener('dblclick', evt => {
    evt.target.style.transform = 'scaleX(-1)';
}));

//Task 10: DRAG/DROP: 