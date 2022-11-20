// Slider 
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// Contact form appears 
let form = document.getElementById('contactForm');
let page = document.getElementsByTagName('main');

function addClass() {
  form.classList.add("appear");
}


function removeClass() {
  form.classList.remove("appear");
}


// Menu scroll down

let header = document.getElementById("headerToScroll");

window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY > 100 );
})

// Make button arrowUp 

window.addEventListener("scroll", function(){
  let arrow = document.getElementById("arrowUp");
  arrow.classList.toggle("appear", window.scrollY > 100 );
})


// Make the background blurry

function blurry() {
  header.classList.add("blurry") 
}

function removeBlurry() {
  header.classList.remove("blurry") 
}

// Close window
function windowClose() {
window.open('','_parent','');
window.close();
}

// NavBar appears 

let nav = document.getElementById("navBar");
let hamburger = document.getElementById("hamburger");
let exitMark = document.getElementById("exitMark");

function smallToBig(){
  nav.classList.add("navBarGrows");
  hamburger.classList.add("disapear");
  exitMark.classList.add("menuBtnAppear");
}

function bigToSmall(){
  nav.classList.remove("navBarGrows");
  exitMark.classList.remove("menuBtnAppear");
  hamburger.classList.remove("disapear");
}

