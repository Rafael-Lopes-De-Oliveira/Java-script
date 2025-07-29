
let button = window.document.querySelector('button').addEventListener('click', () =>{
    document.body.style.background = `RGB(${cores2()},${cores2()},${cores2()})`
})

function cores2 (){
    return Math.random()*253;
}
