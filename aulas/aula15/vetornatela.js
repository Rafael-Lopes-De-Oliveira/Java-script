let num = [15,76,89,10,54,34]

num.sort()

// console.log(num)


// console.log(valores[0])
// console.log(valores[1])
// console.log(valores[2])
// console.log(valores[3])
// console.log(valores[4])


// for(cont=0; cont<num.length ;cont++){
//     console.log(`A posição:${cont} tem o Valor:${num[cont]}`)
// }


for(let cont in num){
    console.log(`A posição:${cont} tem o Valor:${num[cont]}`)
} 

console.log(`Tem ${num.length} variaveis dentro de Num` )