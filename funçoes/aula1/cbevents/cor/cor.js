let mudcor = window.document.querySelector('button').addEventListener('mouseenter', () =>{
    document.body.style.background = `rgb(${c1()},${c1()},${c1()})`;
})


function c1(){
    return Math.floor(Math.random() * 256);
}