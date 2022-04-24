'use strict'

document.querySelector('.logo').addEventListener('click',()=>{
    location.href = '../../pages/main/index.html'
});

//Burger Menu

const NAV_CHECK = document.querySelector("#nav__checkbox");
const BURGER_MENU =  document.querySelector(".burger_menu");
const BURGER_LINKS = document.querySelector(".burger_links");

function openMenu(event){
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
}


NAV_CHECK.addEventListener('click',openMenu);

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


//Pagination

function uniqueID(){
    function randomInteger(min, max){
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    let str = '';
    for(let i = 1;i<5;i++){
       if(i%2 == 0){
           str+=String.fromCodePoint(randomInteger(65,122))
       }
       else{
           str+= randomInteger(1,9);
       }
    }
    return str;
}

function makeCopy(arr1,arr2){
    for(let i = 0;i<arr2.length;i++){
        arr1.push(arr2[i]);
    }
    return arr1;
}

function shuffle(array) {
    let arr = [];
    makeCopy(arr,array);
    let j, temp;
	for(let i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

let pets = [
    {
      name: "Jennifer",
      img: "../../assets/images/pets-jennifer.png",
      type: "Dog",
      breed: "Labrador",
      description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: ["none"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Sophia",
      img: "../../assets/images/pets-sophia.png",
      type: "Dog",
      breed: "Shih tzu",
      description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: "1 month",
      inoculations: ["parvovirus"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Woody",
      img: "../../assets/images/pets-woody.png",
      type: "Dog",
      breed: "Golden Retriever",
      description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      age: "3 years 6 months",
      inoculations: ["adenovirus", "distemper"],
      diseases: ["right back leg mobility reduced"],
      parasites: ["none"]
    },
    {
      name: "Scarlett",
      img: "../../assets/images/pets-scarlett.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      age: "3 months",
      inoculations: ["parainfluenza"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Katrine",
      img: "../../assets/images/pets-katrine.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      age: "6 months",
      inoculations: ["panleukopenia"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Timmy",
      img: "../../assets/images/pets-timmy.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      age: "2 years 3 months",
      inoculations: ["calicivirus", "viral rhinotracheitis"],
      diseases: ["kidney stones"],
      parasites: ["none"]
    },
    {
      name: "Freddie",
      img: "../../assets/images/pets-freddie.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      age: "2 months",
      inoculations: ["rabies"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Charly",
      img: "../../assets/images/pets-charly.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      age: "8 years",
      inoculations: ["bordetella bronchiseptica", "leptospirosis"],
      diseases: ["deafness", "blindness"],
      parasites: ["lice", "fleas"]
    }
]
pets.forEach(v=>{
    v.id = uniqueID();
});
let desktopPets = [];
for(let i = 0;i<=6;i++){
    desktopPets.push(shuffle(pets));
}
const PETS_GRID = Array.from(document.querySelector('.pets_grid').children);
let state = {
    page:1
};
desktopPets.unshift(0);


if(screen.width>=768 && screen.width<=1280){
    desktopPets.push(desktopPets[2]);
}

if(screen.width>=320 && screen.width<=767){
    for(let i = 1;i<10;i++){
        desktopPets.push(desktopPets[i].reverse());
    }
}

function fillPage(page){
    for(let i = 0;i<PETS_GRID.length;i++){
        PETS_GRID[i].id = desktopPets[page][i].id
        let childs = PETS_GRID[i].children;
        childs[0].src = desktopPets[page][i].img;
        childs[1].textContent = desktopPets[page][i].name;
    }
}
fillPage(1);

const btnNext = document.querySelector('.btn_pag_right');
const btnLast = document.querySelector('.btn_pag_rigth_double');
const btnPrev = document.querySelector('.btn_pag_left');
const btnFirst = document.querySelector('.btn_pag_left_double');
const pageNum = document.querySelector('.pag_page');

function nextPage(){
    if(state.page>=6 && screen.width>1280){
        console.log(desktopPets)
        btnNext.removeEventListener('click',nextPage);
        btnNext.children[0].classList.add('disable_arrow');
        btnNext.classList.remove('btn_pag_right');
        btnNext.classList.add('disable');
        btnLast.classList.remove('btn_pag_rigth_double');
        btnLast.classList.add('disable');
        btnLast.children[0].classList.add('disable_arrow');
    }
    else if(state.page>=8 && (screen.width<=1280 && screen.width>=768)){
        btnNext.removeEventListener('click',nextPage);
        btnNext.children[0].classList.add('disable_arrow');
        btnNext.classList.remove('btn_pag_right');
        btnNext.classList.add('disable');
        btnLast.classList.remove('btn_pag_rigth_double');
        btnLast.classList.add('disable');
        btnLast.children[0].classList.add('disable_arrow');

    }
    else if(state.page>=16 && (screen.width>=320 && screen.width<=767)){
        btnNext.removeEventListener('click',nextPage);
        btnNext.children[0].classList.add('disable_arrow');
        btnNext.classList.remove('btn_pag_right');
        btnNext.classList.add('disable');
        btnLast.classList.remove('btn_pag_rigth_double');
        btnLast.classList.add('disable');
        btnLast.children[0].classList.add('disable_arrow');
    }
    else{
        state.page+=1;
        fillPage(state.page);
        pageNum.children[0].textContent = state.page;
        btnFirst.classList.remove('disable');
        btnPrev.classList.remove('disable');
    }
}

function lastPage(){
    function fillLastPage(){
        fillPage(state.page);
        pageNum.children[0].textContent = state.page;
        btnLast.removeEventListener('click',lastPage);
        btnNext.removeEventListener('click',nextPage);
        btnNext.classList.remove('btn_pag_right');
        btnNext.children[0].classList.add('disable_arrow');
        btnNext.classList.add('disable');
        btnLast.classList.remove('btn_pag_rigth_double');
        btnLast.classList.add('disable');
        btnLast.children[0].classList.add('disable_arrow');
        btnPrev.addEventListener('click',prevPage);
        btnPrev.classList.remove('disable');
        btnFirst.classList.remove('disable');
    }
    if(screen.width>1280){
        state.page = 6;
        fillLastPage();
    }
    if(screen.width>=768 && screen.width<=1280){
        state.page = 8;
        fillLastPage();
    }
    if(screen.width>=320 && screen.width<=767){
        state.page = 16;
        fillLastPage();
    }
}

function prevPage(){
    if(state.page==1){
        btnPrev.removeEventListener('click',prevPage);
        btnPrev.classList.add('disable');
        btnFirst.classList.add('disable');
    }
    else{
        btnNext.classList.remove('disable');
        btnLast.classList.remove('disable');
        btnLast.classList.add('btn_pag_rigth_double')
        btnNext.classList.add('btn_pag_right');
        state.page-=1;
        fillPage(state.page);
        pageNum.children[0].textContent = state.page;
        btnPrev.classList.remove('disable')
        btnNext.addEventListener('click',nextPage);
        btnLast.addEventListener('click',lastPage);
    }
}

function firstPage(){
    state.page = 1;
    fillPage(state.page);
    pageNum.children[0].textContent = state.page;
    btnPrev.addEventListener('click',prevPage);
    btnNext.addEventListener('click',nextPage);
    btnLast.addEventListener('click',lastPage);
    btnFirst.classList.add('disable');
    btnPrev.classList.add('disable');
    btnNext.classList.remove('disable');
    btnNext.classList.add('btn_pag_right');
    btnLast.classList.remove('disable');
    btnLast.classList.add('btn_pag_rigth_double');
    // btnLast.removeEventListener('click',lastPage);
    // btnNext.removeEventListener('click',nextPage);
    // btnNext.classList.remove('btn_pag_right');
    // btnNext.children[0].classList.add('disable_arrow');
    // btnNext.classList.add('disable');
    // btnLast.classList.remove('btn_pag_rigth_double');
    // btnLast.classList.add('disable');
    // btnLast.children[0].classList.add('disable_arrow');
    // btnPrev.addEventListener('click',prevPage);
    // btnPrev.classList.remove('disable');
}


btnNext.addEventListener('click',nextPage);
btnLast.addEventListener('click',lastPage);
btnPrev.addEventListener('click',prevPage);
btnFirst.addEventListener('click',firstPage);

//Popup

const PETS_BLOCK = document.querySelector('.pets_grid');

const MODAL_IMG = document.querySelector('.modal_img img');
const MODAL_CONTENT = document.querySelector('.modal_content').children;
const MODAL_CLOSE = document.querySelector('.modal_close');


function addPopUp(event){
    NAV_CHECK.removeEventListener('click',openMenu)
    document.documentElement.style.overflow = 'hidden';
    document.querySelector('.header').style.backgroundColor = '#292929';
    document.querySelector('.header').style.opacity = '60%';
    document.querySelector('.pets').style.backgroundColor = '#292929';
    document.querySelector('.pets').style.opacity = '60%';
    document.querySelector('#footer').style.backgroundColor = '#292929';
    document.querySelector('#footer').style.opacity = '60%';
    let elem = event.target;
    let parentDivID = elem.parentElement.id;
    document.querySelector('.modal_wrapper').style.display = 'block'; 
    let findElem = pets.filter(v=>{
        return v.id == parentDivID;
    });
    MODAL_IMG.src = findElem[0].img;
    MODAL_CONTENT[0].textContent = findElem[0].name;
    MODAL_CONTENT[1].textContent = `${findElem[0].type} - ${findElem[0].breed}`;
    MODAL_CONTENT[2].textContent = findElem[0].description;
    let ul = MODAL_CONTENT[3].children;
    ul[0].innerHTML = ` ${findElem[0].age}`;
    ul[1].innerHTML = ` ${findElem[0].inoculations}`;
    ul[2].innerHTML = ` ${findElem[0].diseases}`;
    ul[3].innerHTML = ` ${findElem[0].parasites}`;
    PETS_BLOCK.removeEventListener('click',addPopUp);
}

PETS_BLOCK.addEventListener('click',addPopUp);

MODAL_CLOSE.addEventListener('click',()=>{
    NAV_CHECK.addEventListener('click',openMenu);
    document.querySelector('.modal_wrapper').style.display = 'none';
    document.documentElement.style.overflow = '';
    document.querySelector('.header').style.backgroundColor = '#FFFFFF';
    document.querySelector('.header').style.opacity = '100%';
    document.querySelector('.pets').style.backgroundColor = '#F6F6F6';
    document.querySelector('.pets').style.opacity = '100%';
    document.querySelector('#footer').style.backgroundColor = '';
    document.querySelector('#footer').style.opacity = '100%';
    PETS_BLOCK.addEventListener('click',addPopUp);
});

// document.querySelector('body').addEventListener('click',(event)=>{
//     if(event.target.classList[0]!=='modal_content'){
//         document.querySelector('.modal_wrapper').style.display = 'none';
//     document.documentElement.style.overflow = '';
//     document.querySelector('.header').style.backgroundColor = '#FFFFFF';
//     document.querySelector('.header').style.opacity = '100%';
//     document.querySelector('.pets').style.backgroundColor = '#F6F6F6';
//     document.querySelector('.pets').style.opacity = '100%';
//     document.querySelector('#footer').style.backgroundColor = '';
//     document.querySelector('#footer').style.opacity = '100%';
//     PETS_BLOCK.addEventListener('click',addPopUp);
//     }
// })

document.querySelectorAll('.pets_grid a').forEach(v=>{
    v.addEventListener('click',(event)=>{
        event.preventDefault();
    })
})


