
function contar(){

    var ini = window.document.querySelector('input#inicio')

    var end = window.document.querySelector('input#fim')

    var pass = window.document.querySelector('input#passos')

    var  most  = window.document.querySelector('div#mostrar')


    var ini = Number(ini.value)
    var end = Number(end.value)
    var pass = Number(pass.value)


    if( ini == 0 || end == 0){
        window.alert('valor nao existente!')
    }else if( pass == 0){
        window.alert(`valor de passos é ${pass} mudando seu valor para 1 `)
    }

    most.innerHtml = `valor de inicio ${ini} , do fim ${end} e de passos ${pass}`



}
