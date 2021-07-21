// nav functions
let hamburger = document.querySelector(".hamburger-icon");
let navi = document.querySelector(".main-nav");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle("active");
    navi.classList.toggle("active");
}

// get the nav links to close the menu on click//
let navLink = document.querySelectorAll(".menu-item");

for (let i=0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", closeMenu)
};

function closeMenu() {
    hamburger.classList.remove("active");
    navi.classList.remove("active");
}


