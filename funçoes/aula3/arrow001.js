
function somando (a,b){
    return a+b;
}

const som=(a,b) =>{
    return a+b;
} 

const soma = (a,b) => a+b;

//console.log(soma(4,6));


const texto = () =>  'Oi';
//console.log(texto); ps, nao fa sentido: voce so ta fazendo uma arrow function para colocar uma simples valor no Const, mais facil jogar diretamento na varial const do que fazer uma Arrow function;

function quadra(n){
    return n*n;
}

const quadrado = (n) => n*n;
const drado = n => n*n;

//console.log(quadrado(6))

const numero = [2,3,4,5,6,];

const aoQua = numero.map(function(n){
    return n*n
})

const aoQuadrado = numero.map(n => n*n);
//console.log(aoQuadrado);


// document.getElementById('botton').addEventListener('click',function(){
//     console.log('Botao clicado');
// });

// document.getElementById('botton').addEventListener('click',()=> {              
//     console.log('botao clicado');
// });


setTimeout(()=>{
    clearInterval(id)
    console.log('Óla!!')
},8000);

setTimeout(function(){
    console.log('Óla!')
}, 2000);


setInterval(function(){
    console.log('de 1 em 1 segundo');
},1000)

setInterval(()=>{
    console.log('De 3 em 3 segundos')
},3000)




// const id = setInterval(() => {
//         console.log('xiii')
// }, 2000);


