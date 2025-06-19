function tabu(){


    let numb = window.document.querySelector('#numero')

    let msg = window.document.querySelector('#msg')

    if( numb.value.length == 0){
        window.alert(`Campo numerico esta vazio`)
    } else {
        let number = Number(numb.value)   
        
        msg.innerHTML = ''

        for(let cont = 1; cont <= 10; cont += 1 ){
            
            let item = document.createElement('option')

            item.text = `${number} X ${cont} = ${number*cont}`

            item.value = ` msg${cont}`

            msg.appendChild(item)

        }
    }
}

