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
// Task 2: ONSCROLL: On scroll, make the header transparent
const headerNav = document.querySelector('.main-navigation');
//this next line is new and I don't know why it works or why it's needed, came from https://codeconvey.com/navbar-transparent-to-solid-on-scroll/:
window.onscroll = function() {headerFade()};
function headerFade(){
    if (document.documentElement.scrollTop > 20) {
        headerNav.style.background = "none";
} else {
    headerNav.style.background = "#ffffff";
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

//Task 4: WHEEL: When the mouse is over the header image and use the mouse wheel, it will become 90% smaller & not scroll the website. Will need to not have the mouse over the image to scroll further down. https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event

const bigImage = document.querySelector(".intro img")
function zoom(e){
    e.preventDefault();
    // let scale += e.deltaY * -0.01;
    // let scale = Math.min(Math.max(.125, scale), 4);
    let scale = .9;
    bigImage.style.transform = `scale(${scale})`;
}

bigImage.addEventListener('wheel', zoom);

