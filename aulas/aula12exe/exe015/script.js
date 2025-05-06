function verificar(){
    var data = new Date()
    var ano = data.getFullYear()

    var anonasc = window.document.querySelector('input#nascimento')

    var res = window.document.querySelector('div#res')

    var anonasc = Number(anonasc.value)

    if(anonasc > ano || anonasc == 0 ) {
        window.alert('[ERROR] TENTE NOVAMENTE!')
    }

    var fsex = document.getElementsByName('radsex')

    var idade = ano - anonasc
    var genero = ''

    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(fsex[0].checked){
        genero = 'Homem'
        if(idade > 0 && idade < 4){
            // Bebe
            img.setAttribute('src', 'meninobebe.jpg')
        }else if(idade < 12){
            // Criança
            img.setAttribute('src', 'fotomeninocrianca.jpg')
        }else if(idade < 21){
            // Jovem
            img.setAttribute('src','fotomeninoadolescente.jpg')
        }else if(idade < 50){
            // Adulto
            img.setAttribute('src',  'fotohomemadulto.jpg')
        }else{
            // Idoso
            img.setAttribute('src', 'fotohomemvelho.jpg')
        }
;
    }else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade > 0 && idade < 4){
            // BEBE
            img.setAttribute('src', 'fotomeninabebe.jpg')
        }else if(idade < 12){
            // Criança
            img.setAttribute('src','fotomeninacrianca.jpg')
        }else if(idade < 21){
            // Jovem
            img.setAttribute('src','fotomeninaadolescente.jpg')
        }else if(idade < 50){
            // Adulto
            img.setAttribute('src', 'fotomulheradulta.jpg')
        }else{
            // Idoso
            img.setAttribute('src','fotomulhervelha.jpg')
        }
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)

}