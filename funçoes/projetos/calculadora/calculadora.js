
let result = window.document.querySelector('#olhador');
let g = 0;
const limpe = () => result.innerHTML = "";

const nume = (num) =>{
  result.innerHTML += num;
  result.value += num;
}
let valguardado = 0

const resultado = () =>{
  let math = result.value;
  result.innerHTML = eval(math);
}

let Mmais = window.document.querySelector('#Mmais').addEventListener('click', function(){
  result.innerHTML = "";
  valguardado = result.value;
  console.log(valguardado);
 } )

let Mmenos = window.document.querySelector('#Mmenos').addEventListener('click', function(){
  result.innerHTML = valguardado;
  console.log(valguardado);
} )

const  point = (pt) => result.innerHTML += pt;




