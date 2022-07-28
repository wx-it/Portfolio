window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        let windowsHeight= window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint= 100;

        if (revealTop < windowsHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
        
    }
}



// nav toggle

const menuBtn = document.getElementById('menu-btn');
const navToggle = document.getElementById('nav-toggle');
const closeBtn = document.getElementById('close-btn');
const visibility = navToggle.getAttribute('data-visibility');

function toggleNav() {
    visibility === "true"? navToggle.setAttribute('data-visibility', false)
     : navToggle.setAttribute('data-visibility', true);
}
menuBtn.addEventListener('click', toggleNav);

function closeNav() {
    visibility === "true"? navToggle.setAttribute('data-visibility', true)
     : navToggle.setAttribute('data-visibility', false);
}

closeBtn.addEventListener('click', closeNav);


// add style to navbar when scrolling 

let myNav = document.querySelector('nav');
window.onscroll = function () { 
    "use strict";
    if (window.scrollY >= 100 ) {
        myNav.classList.add("scroll");
    } 
    else {
        myNav.classList.remove("scroll");
    }
};
  