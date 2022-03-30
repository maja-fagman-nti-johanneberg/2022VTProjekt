// Denna fil skall innehålla JavaScript (JS)

const hamburger = document.querySelector(".hamburger"); 
const navMenu = document.querySelector(".nav-menu");
//hämtar taggarna 

hamburger.addEventListener("click", mobileMenu);
//när jag klickar på menyn händer (nedan) (öppnar)

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
//tar bort eller lägger till classerna

const navLink = document.querySelectorAll(".nav-link");
//hämtar alla taggar (listan-text)

navLink.forEach(text => text.addEventListener("click", closeMenu));
//när jag klickar på menyn händer (nedan) (stänger)

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
//tar bort classerna