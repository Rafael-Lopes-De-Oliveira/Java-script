
// let p = window.document.querySelector('#msg');



let localmsg = window.document.querySelector('#localmsg');
let ptxt = document.createElement('p')
localmsg.appendChild(ptxt)

localmsg.addEventListener("mouseenter", function(txt){
    ptxt.innerHTML = `I like your Grandmother`
    ptxt.style.color = 'white '
    ptxt.style.margin ='3px'
    localmsg.style.background = 'blue'
})

localmsg.addEventListener("mouseout", function(txt){
    localmsg.style.background = 'white'
    ptxt.innerHTML = "";
}) 

