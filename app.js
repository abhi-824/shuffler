let btnc=document.querySelector('.buttonc');
let btnd=document.querySelector('.buttond');
let btnb=document.querySelector('.buttonb');


function initEventListeners(){
    btnc.addEventListener('click',randomizerc);
    btnd.addEventListener('click',randomizerd);
    btnb.addEventListener('click',randomizerb);
}

initEventListeners();

function randomizerc(){
    let randomNumber=Math.floor(Math.random()*100)+1;
    let table=document.querySelector('.aaja');
    let mra=document.querySelectorAll('.uthale tr');
    let to_show=mra[randomNumber];
    table.appendChild(to_show);
    let kholo=document.querySelectorAll('.baad');
    for(let i=0;i<kholo.length;i++)
    {
        kholo[i].className='show';
    }
}
function randomizerd(){
    let randomNumber=Math.floor(Math.random()*100)+1;
    let table=document.querySelector('.aaja-bhai');
    let mra=document.querySelectorAll('.uthale-bc tr');
    let to_show=mra[randomNumber];
    table.appendChild(to_show);
    let kholo=document.querySelectorAll('.baad');
    for(let i=0;i<kholo.length;i++)
    {
        kholo[i].className='show';
    }
}
function randomizerb(){
    let randomNumber=Math.floor(Math.random()*100)+1;
    let table=document.querySelector('.aaja-b');
    let mra=document.querySelectorAll('.uthale-bsdk tr');
    let to_show=mra[randomNumber];
    table.appendChild(to_show);
    let kholo=document.querySelectorAll('.baad');
    for(let i=0;i<kholo.length;i++)
    {
        kholo[i].className='show';
    }
}

