// add shadow to navigation par on scroll
let nav = document.querySelector("nav");
window.onscroll = function () {
  if (window.pageYOffset > 200) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};

// show and hide navigation links on click
let navBtn = document.querySelector("#navBtn");
let navLinks = document.querySelector(".nav-links");
navBtn.onclick = function () {
  if (navLinks.classList.contains("responsive")) {
    navLinks.classList.remove("responsive");
  } else {
    navLinks.classList.add("responsive");
  }
};
