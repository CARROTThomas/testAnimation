//
/* ############ */


let textMove = document.querySelector('#textDeroulantLeft')
let textMove2 = document.querySelector('#textDeroulantRight')


window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    let position = -500

    textMove.style.left = (value * 1.1 + position) + "px";
    textMove2.style.left = (value * -1.1 + -position) + "px";
})