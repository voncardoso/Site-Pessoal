const btnMobile = document.querySelector('.btn-mobile');
const fechabtn = document.querySelector('.sobreBtn');
const fechabtn1 = document.querySelector('.sobreBtn1');
const fechabtn2 = document.querySelector('.sobreBtn2');

function toggleMenu(){
    const nav = document.querySelector('.menu-nav');
    nav.classList.toggle('active');
}

function FechaMenu(){
    const nav1 = document.querySelector('.menu-nav');
    nav1.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

fechabtn.addEventListener('click', FechaMenu);
fechabtn1.addEventListener('click', FechaMenu);
fechabtn2.addEventListener('click', FechaMenu);