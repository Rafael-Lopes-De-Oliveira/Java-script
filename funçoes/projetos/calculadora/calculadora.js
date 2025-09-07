
let result = window.document.querySelector('#olhador');
const limpe = () => result.innerHTML = "";
let valguardado = true;

const nume = (num) =>{
  result.innerHTML += num;
  result.value += num;
  
}


const ponto = window.document.querySelector('#ponto').addEventListener('click', () => result.innerHTML += '.')

// let Mmais = window.document.querySelector('#Mmais').addEventListener('click', function(){
//   valguardado = result.value;
//   result.innerHTML = "";
// } )


// Mmais.addEventListener('dblclick', function(){
//   valguardado = 0;
// });

// let Mmenos = window.document.querySelector('#Mmenos').addEventListener('click', function(){
//   result.innerHTML = ""
//   result.innerHTML = valguardado;
// } )


const resultado = () =>{
  let math =  eval(result.value);
  result.innerHTML = math;
}


