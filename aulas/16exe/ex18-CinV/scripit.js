let num = window.document.querySelector('#numero');
let valores = window.document.querySelector('#valores');
let res = document.querySelector('#res');
let Totnum = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n , l){
    if(l.indexOf(Number(n) != -1)){
        return true
    }else{
        return false
    }
}


function adc(){
    if(isNumero(num.value) && !inLista(num.value , Totnum)){
        Totnum.push(Number(num.value));
        let item = document.createElement('option');
        item.Text = `Valor ${num.value} adicionado`;
        valores.appendChild(item)
    }else{
        window.alert('Valores Inválidos ou já encontrados na lista!')
    }
}