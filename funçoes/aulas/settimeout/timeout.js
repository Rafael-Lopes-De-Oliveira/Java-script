
/*
//contagem regressiva
let n = 5
const pamonha = setInterval(() => {
    console.log(n)
    n== 0? clearInterval(pamonha):n--
}, 1000);
*/






/*
const frases = ['Frase1', 'Frase2','Frase3'];
let cont = 0;

let mostFrase = setInterval(() => {
    console.log(frases[cont])
    cont == 2?clearInterval(mostFrase):cont++;
}, 2000);

*/



/*

setTimeout(() => {
    console.log('Ola mundo!!')
}, 3000);

*/

/*
let cont =5;
const contador = setInterval(() => {
    console.log(cont)
    cont == 0?clearInterval(contador):cont--
}, 1000);

*/

const msg = ['Frase 1','Frase 2','Frase 3'];
let ct = 0;

const ctt = setInterval(() => {
    console.log(msg[ct])
    ct == 2?clearInterval(ctt):ct++;
}, 2000);