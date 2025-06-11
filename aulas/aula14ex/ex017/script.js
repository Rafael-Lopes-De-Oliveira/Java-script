function tabu(){
    var numb = window.document.querySelector('#numero')
 
    var numb= Number(numb.value)

    var msg = window.document.querySelector('#msg')

    if(numb == ''){
        window.alert(`Campo numerico esta vazio, valor alterado para 0`)
    }

    var result = 0

    for(var cont = 0; cont <= 10; cont += 1 ){
        var  result = numb * cont

        msg.innerHTML += ` <br> ${numb} X ${cont} = ${result} `
    }

}

