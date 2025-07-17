let num = window.document.querySelector('#numero');
let valores = window.document.querySelector('#valores');
let res = document.querySelector('#res');
let Totnum = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true;
    }else{
        return false;
    }
}


function adc(){
    if(isNumero(num.value) && !inLista(num.value, Totnum) ) {
        Totnum.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`;
        valores.appendChild(item);
        res.innerHTML = ''
    }else{
        window.alert('Valores Inválidos ou já encontrados na lista!');
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if(Totnum.lenght == ''){
        window.alert('Adicione valores antes de finalizar')
    }else{
        let tot = Totnum.length;
        let maior = Totnum[0];
        let menor = Totnum[0];
        let soma = 0;
        let media = 0;
        for(let pos in Totnum){
            soma += Totnum[pos];
            if(Totnum[pos] > maior){
                maior = Totnum[pos];
            }
            if(Totnum[pos] < menor){
                menor = Totnum[pos]
            }
        }
        
        media = soma/Totnum.length;
        res.innerHTML = ''
        res.innerHTML += `Ao todo temos ${tot} números cadastrados.<br>`
        res.innerHTML += `O maior valor foi ${maior} <br>`
        res.innerHTML += `O menor valor foi ${menor} <br>`
        res.innerHTML += `A soma dos números é ${soma} <br>`
        res.innerHTML += `A media dos números é ${media}`



        /*
        res.innerHTML += 'O maior valor é ' + maiorVal() + '<br>';
        res.innerHTML += 'O menor valor é ' + menorVal() + '<br>';
        res.innerHTML += 'A média dos valores é ' + Media() + '<br>';
        res.innerHTML += 'A soma dos valores é ' + Soma() ;
        */

    }
}

function maiorVal(){
    return Totnum.reduce((Vatual , Vfutur) => Vatual > Vfutur? Vatual : Vfutur, Totnum[0]);
}

/*
function menorVal(){
    return Totnum.reduce((Vatual , Vfutur) => Vatual < Vfutur? Vatual : Vfutur, Totnum[0]);
}

function Soma(){
    return Totnum.reduce((a , b) => Number(a)  + Number(b) , 0);
}


function Media(){
    return Soma()/Totnum.length
}

*/