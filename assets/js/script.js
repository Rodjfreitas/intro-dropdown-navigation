const openbtn = document.querySelector('.btn-open');
const closebtn = document.querySelector('.btn-close');
const navbtn = document.querySelector('.nav-btn');
const navmenu = document.querySelector('.nav-menu');
const submenufeat = document.querySelector('.submenu-feat');
const submenucomp = document.querySelector('.submenu-comp');
const featbtn = document.querySelector('.feat');
const compbtn = document.querySelector('.comp');
const main = document.querySelector('main');
const footer = document.querySelector('footer');

openbtn.addEventListener('click', () =>{
  openbtn.classList.toggle('active');
  closebtn.classList.toggle('active');
  navmenu.classList.toggle('active');
  navbtn.classList.toggle('active');
  
})

closebtn.addEventListener('click',() =>{
  openbtn.classList.toggle('active');
  closebtn.classList.toggle('active');
  navmenu.classList.toggle('active');
  navbtn.classList.toggle('active');
  submenucomp.classList.remove('active');
  submenufeat.classList.remove('active');
})

featbtn.addEventListener('click',() =>{
  submenufeat.classList.toggle('active');
  submenucomp.classList.remove('active');
})

compbtn.addEventListener('click',() =>{
  submenucomp.classList.toggle('active');
  submenufeat.classList.remove('active');
})

main.addEventListener('click',()=>{
  submenucomp.classList.remove('active');
  submenufeat.classList.remove('active');
})

footer.addEventListener('click',()=>{
  submenucomp.classList.remove('active');
  submenufeat.classList.remove('active');
})

