let num = [8,6,9,0,5]
num.sort()
console.log(num)

/*
console.log(`Existe no Array Num, ${num.length} variaveis`);

num.push(2,5);
console.log(`Foi adicionado agora os ${num[5]} e o ${num[6]}
dentro do Array Num   `)

console.log(num);
console.log(`Esse é o primeiro número:${num[0]} e esse é o ultimo:${num[6] }`)

console.log('Agora as Variaveis do Num foram Organizadas em ordem Crescente')

num.sort();
console.log(num);
console.log(`Esse é o primeiro número:${num[0]} e esse é o ultimo:${num[6] }`)


console.log(`Existe no Array Num, ${num.length} variaveis`);

*/


let encontrar = num.indexOf(0)

if(encontrar == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O valor está na posiçao ${encontrar}`)
}

