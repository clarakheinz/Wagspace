// nav functions

// get html elements by class
let hamburger = document.querySelector(".hamburger-icon");
let navi = document.querySelector(".main-nav");
// add event listener 
hamburger.addEventListener("click", toggleMenu);

// turn on the "active" class to toggle correct CSS styles
function toggleMenu() {
    hamburger.classList.toggle("active");
    navi.classList.toggle("active");
}

// get the nav links to close the menu on click//
let navLink = document.querySelectorAll(".menu-item");

// loop through each nav link
for (let i=0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", closeMenu)
};

// close hamburger menu
function closeMenu() {
    hamburger.classList.remove("active");
    navi.classList.remove("active");
}


