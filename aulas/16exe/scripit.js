let Totnum = [];

let num = window.document.querySelector('#numero');

function adc(){
    let regis = window.document.querySelector('#valores');
    if(num.value == ""){
        window.alert('Escreva Algo ai AMIGAO')
    }else{
        let option = document.createElement("option");
        option.innerText = `O valor ${Number(num.value)} foi adicionado`;
        option.style.width = '300px'
        option.value = Number(num.value)
        regis.appendChild(option);
        Totnum.push(option.value);
    }
}


function soma() {
  return Totnum.reduce((a, b) =>Number(a) +
Number(b)  , 0)
}



function MenorVal(){
    return Totnum.slice(1).reduce((a , b) => a > b? b : a , Totnum[0]);
}

function MaiorVal(){
    return Totnum.slice(1).reduce((a , b)=> a < b ? b : a , Totnum[0]);
}
function Media(){
    return soma()/Totnum.length
}


function finalizar(){
    debugger
    let p1 =document.createElement('p');
    p1.innerText = 'Total de Elementos:' + Totnum.length;

    let p2 = document.createElement('p');
    p2.innerText ='Menor valor:' + MenorVal()  ;

    
    let p3 = document.createElement('p');
    p3.innerText = 'O maior valor da Lista:' + MaiorVal();


    let p4 = document.createElement('p');
    p4.innerText = 'A soma dos Elementos é:' + soma();

    let p5 = document.createElement('p');
    p5.innerText = 'Media dos Valores:' + Media();

    let sex = document.querySelector('#sex');

    sex.appendChild(p1);
    sex.appendChild(p2);
    sex.appendChild(p3);
    sex.appendChild(p4);
    sex.appendChild(p5);
}

