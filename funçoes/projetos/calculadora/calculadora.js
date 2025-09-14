
let result = window.document.querySelector('#olhador');
const limpe = () => result.innerHTML = "";
let valguardado = true;

const nume = (num) =>{
  result.innerHTML += num;
  result.value = result.innerHTML; // Na hora de clicar em fazer a conta ele vai jogar a operação que estiver na tela na variavel.
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
  result.innerHTML = eval(result.value);
}


