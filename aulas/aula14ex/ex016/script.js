
function contar(){

    let ini = window.document.querySelector('#inicio')

    let end = window.document.querySelector('#fim')

    let pass = window.document.querySelector('#passos')

    let  msg  = window.document.querySelector('#msg')


    if( pass == 0 || pass == ''){
        window.alert(`valor de passos é ${pass} mudando seu valor para 1 `)
        pass = 1
    }else if(ini == ''){
        window.alert('Inicio não tem valor impossivel de prosseguir' )
    }else{

        let i = Number(ini.value)
        let f = Number(end.value)
        let p = Number(pass.value)

        if(i < f){
            for(let cont = i; cont <= f; cont += p ){
                msg.innerHTML += `  ${cont}  \u{1F913} `

            }
        }else{
            for(let cont = i; f <= cont; cont -= p ){
                msg.innerHTML += `  ${cont}  \u{1F913} `
            }
        }                           
        msg.innerHTML+= `\u{1F3C1}`
    }
}
