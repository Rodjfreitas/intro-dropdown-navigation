const btnMobile = document.querySelector("#btn-menu")
const nav = document.querySelector("#nav");

function toggleMenu() {   
    nav.classList.toggle('active');
} 

btnMobile.addEventListener('click',toggleMenu);