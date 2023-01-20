const btnMobile = document.querySelector("#btn-menu")

function toggleMenu() {
  const navegacao = document.querySelector("#nav");   
    navegacao.classList.toggle('active');
    console.log(navegacao);
} 

btnMobile.addEventListener('click',toggleMenu);