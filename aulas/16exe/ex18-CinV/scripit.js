let num = window.document.querySelector('#numero');
let valores = window.document.querySelector('#valores');
let res = document.querySelector('#res');
let Totnum = [];

function IsNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n , Tnum){
    if(Tnum.indexOf(Number(n) != -1)){
        return true
    }else{
        return false
    }
}


function adc(){
    if(isNumero(num.value) && inLista(num.value , Totnum)){

    }else{
        window.alert('Valores Inválidos ou já encontrados na lista!')
    }
}