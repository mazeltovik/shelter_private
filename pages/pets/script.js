'use strict'

document.querySelector('.logo').addEventListener('click',()=>{
    location.href = '../../pages/main/index.html'
});

//Burger Menu

const NAV_CHECK = document.querySelector("#nav__checkbox");
const BURGER_MENU =  document.querySelector(".burger_menu");
const BURGER_LINKS = document.querySelector(".burger_links");


NAV_CHECK.addEventListener('click',(event)=>{
    if(event.target.checked){
        document.querySelector('.header').style.height = '100vh';
        document.querySelector('.menu').classList.add('open-menu');
        document.querySelector('.menu').classList.remove('close-menu');
        BURGER_MENU.classList.add('transition-left-menu');
        BURGER_MENU.style.left = '0';
        BURGER_MENU.classList.remove('transition-right-menu');
        document.documentElement.style.overflowY = 'hidden';
        
    }
    else{
        document.querySelector('.menu').classList.remove('open-menu');
        document.querySelector('.menu').classList.add('close-menu');
        BURGER_MENU.classList.add('transition-right-menu');
        BURGER_MENU.classList.remove('transition-left-menu');
        BURGER_MENU.style.left = '322px';
        document.documentElement.style.overflowY = '';
        setTimeout(()=>{
            document.querySelector('.menu').classList.remove('close-menu');
            BURGER_MENU.classList.remove('transition-right-menu');
            document.querySelector('.header').style.height = '120px';
        },1000);
    }
});

BURGER_LINKS.addEventListener('click',(event)=>{
    let target = event.target;
    if(target.tagName == 'A'){
        document.documentElement.style.overflowY = '';
        NAV_CHECK.checked = false;
        document.querySelector('.menu').classList.remove('open-menu');
        BURGER_MENU.classList.remove('transition-left-menu');
        BURGER_MENU.classList.add('transition-right-menu');
        document.querySelector('.menu').classList.add('close-menu');
        BURGER_MENU.style.left = '322px';
        setTimeout(()=>{
            document.querySelector('.header').style.height = '120px';
        },500)
    }
    else{
        document.documentElement.style.overflowY = '';
        NAV_CHECK.checked = false;
        document.querySelector('.menu').classList.remove('open-menu');
        document.querySelector('.menu').classList.add('close-menu');
        BURGER_MENU.classList.remove('transition-left-menu');
        BURGER_MENU.classList.add('transition-right-menu');
        BURGER_MENU.style.left = '322px';
        setTimeout(()=>{
            document.querySelector('.header').style.height = '120px';
        },500)
    }
});




