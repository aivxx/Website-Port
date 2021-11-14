let facebookBTN = document.querySelector(".fa-facebook");
let gitBTN = document.querySelector(".fa-github");
let instaBTN = document.querySelector(".fa-instagram");
let linkedBTN = document.querySelector(".fa-linkedin");

facebookBTN.addEventListener(`click`, () => {
  window.open("https://www.facebook.com/ashleydiego");
});

gitBTN.addEventListener(`click`, () => {
  window.open("https://github.com/aivxx");
});

instaBTN.addEventListener(`click`, () => {
  window.open("https://www.instagram.com/ashleyrebeccaa_/");
});

linkedBTN.addEventListener(`click`, () => {
  window.open("https://www.linkedin.com/in/ashley-goldstein-40bb15183/");
});

// define all UI variable
const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".site-navbar ul");
const navLinks = document.querySelectorAll(".site-navbar a");

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener("click", togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle("toggler-open");
  navMenu.classList.toggle("open");
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}
