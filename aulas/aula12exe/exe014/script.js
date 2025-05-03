function carregar(){
    var msg = window.document.querySelector('div#msg')
    
    var img = window.document.querySelector('img#img')

    var data= new Date()
    var hora= data.getHours()

    msg.innerHTML = `Agora são ${hora} horas:`
    if (hora >=1 && hora <= 12){
        // BOM DIA
        img.src = 'fotomanha.jpg'
        document.body.style.background = 'rgb(238, 238, 58)'

    }else if(hora > 12 && hora <= 18){
        // BOA TARDE
        img.src = 'fototarde.jpg'
        document.body.style.background = 'rgb(242, 201, 208)'

    }else if(hora > 18 && hora <= 24){
        // BOA NOITE
        img.src = 'fotonoite.jpg'
        document.body.style.background = 'rgb(36, 36, 65)'
        
    }else if(hora < 0 || hora > 24){
        msg.innerHTML = `[HORÁRIO INVALIDO]`
        img.src = 'fotoerror.jpg'
        document.body.style.background = 'rgb(175, 44, 44)'
    }

}



