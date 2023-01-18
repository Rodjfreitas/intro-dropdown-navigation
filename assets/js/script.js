const clickMenu = document.querySelector('.iconMenu');
const clickClose = document.querySelector('.iconExit');
const clickOpenFeat = document.querySelector('.featiconDown');
const clickCloseFeat = document.querySelector('.featiconUp');
const clickOpenComp = document.querySelector('.compiconDown');
const clickCloseComp = document.querySelector('.compiconUp');
const pageMenu = document.querySelector('.navigation');
const pageFeatures = document.querySelector('.featlistSecond');
const pageCompany = document.querySelector('.complist');
const pageMain = document.querySelector('#Grid');
const Screen = document.querySelector('body');



function openMenu(){
  pageMenu.style.display = 'flex';
  pageMenu.style.width = '63%';
  pageMain.style.opacity = '30%';
  pageMain.style.backgroundColor = 'hsl(0, 0%, 41%)';
  Screen.style.backgroundColor = 'hsl(0, 0%, 41%)';
  

  
}

function closeMenu(){
  pageMenu.style.display = 'none';
  pageMenu.style.width = 0
  closeCompany();
  closeFeatures();
  pageMain.style.opacity = '100%';
  pageMain.style.backgroundColor = 'hsl(0, 0%, 98%)';
  Screen.style.backgroundColor = 'hsl(0, 0%, 98%)';

}

function openFeatures(){
  clickCloseFeat.style.display = 'block';
  clickOpenFeat.style.display = 'none';  
  pageFeatures.style.display = 'block';
}

function closeFeatures(){
  clickCloseFeat.style.display = 'none';
  clickOpenFeat.style.display = 'block';  
  pageFeatures.style.display = 'none';
}

function openCompany(){
  clickCloseComp.style.display = 'block';
  clickOpenComp.style.display = 'none';
  pageCompany.style.display = 'block';
}

function closeCompany(){
  clickOpenComp.style.display = 'block';
  clickCloseComp.style.display = 'none';  
  pageCompany.style.display = 'none';
}

clickMenu.addEventListener('click',openMenu);
clickClose.addEventListener('click',closeMenu);
clickOpenFeat.addEventListener('click',openFeatures);
clickCloseFeat.addEventListener('click',closeFeatures);
clickOpenComp.addEventListener('click',openCompany);
clickCloseComp.addEventListener('click',closeCompany);