var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

 if (hora > 1 && hora <= 12){
     console.log(`E agora é de Manhã!`)
 }else if(hora > 12 && hora < 18){
     console.log(`Agora é de Tarde!`)
 }else if(hora > 18 && hora < 24 ){
     console.log(`Agora é Noite!`)
 }else if(hora > 24 || hora < 0 ){
     console.log(`Horário inexistente!`)
 }

//  if (hora < 12){
//      console.log(`Agora é de Manhã!`)
//  }else if(hora < 18){
//      console.log(`Agora é Tarde!`)
//  }else{
//      console.log(`Agora é Noite!`)
//  }