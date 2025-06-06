
function contar(){

    var ini = window.document.querySelector('#inicio')

    var end = window.document.querySelector('#fim')

    var pass = window.document.querySelector('#passos')

    var  msg  = window.document.querySelector('#msg')

    var cont = ini

    var ini = Number(ini.value)
    var end = Number(end.value)
    var pass = Number(pass.value)


    if( ini == 0 || end == 0){
        window.alert('valor nao existente!')
    }else if( pass == 0){
        window.alert(`valor de passos é ${pass} mudando seu valor para 1 `)
    }

    // msg.innerHTML = `O INICIO: ${ini} , O FIM: ${end} e PASSOS: ${pass}`

    for(var cont = ini; cont <= end; cont += pass ){
        msg.innerHTML = `${cont}`
    }


}
