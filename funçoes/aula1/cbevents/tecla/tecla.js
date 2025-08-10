let cont = 0;
let cont2 = 0;
document.addEventListener('keydown' , function(teclas){
    if(teclas.key == 'x' || teclas.key =='X'){
        cont ++;
        console.log('X da questao encontrado '+ cont);
    }else if(teclas.key == 'r' || teclas.key =='R'){
        cont = 0;
        cont2 = 0;
        console.log('X resetado e Y restado')
    }else{
        cont2 ++;
        console.log('NADA AINDA AMIGAO ' + cont2);
    }
})