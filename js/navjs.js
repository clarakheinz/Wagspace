let hamburger = document.querySelector(".hamburger");
let navi = document.querySelector(".main-nav");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
    hamburger.classList.toggle("active");
    navi.classList.toggle("active");
}

let navLink = document.querySelectorAll(".menu-item");

for (let i=0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", closeMenu)
};

function closeMenu() {
    hamburger.classList.remove("active");
    navi.classList.remove("active");
}
