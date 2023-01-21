const openbtn = document.querySelector('.btn-open');
const closebtn = document.querySelector('.btn-close');
const navbtn = document.querySelector('.nav-btn');
const navmenu = document.querySelector('.nav-menu');
const submenufeat = document.querySelector('.submenu-feat');
const featbtn = document.querySelector('.feat');

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
})

featbtn.addEventListener('click',() =>{
  submenufeat.classList.toggle('active');
})