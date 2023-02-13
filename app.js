const Hamburger = document.querySelector(".hamburger-menu");
ActiveNavbar = document.querySelector(".mobile-navbar");

Hamburger.addEventListener("click", (e) =>{
    ActiveNavbar.classList.toggle("active")
});