/*
const giveAccess = (name)=> console.log(`Acesso garantido a ${name}`)


const autenticacao = (person)=> { 
    let array =[];
    for(let i; i < person; i++){
        array.push(i);
    }
    return giveAccess(person.name)
}

function letPersonLogin(person, fn){
    if(person.level == 'Admin'){
       return fn(person)
    }else if(person.level == 'User'){
       return fn(person)
    }
}

const chingar = (person)=> console.log(`BARALHOS KKKKK é o ${person.level} chamado ${person.name}`);

const elogio = (person) => console.log(`Eu sou lindo: ${person.level} e me chamado ${person.name}`);


letPersonLogin({level: 'Admin', name: 'Quadrupede São paulino!'}, autenticacao) */


/*
const multiply =(a,b,fn)=>{
    return fn(a,b)
}

const exec = (a,b) => {
    return console.log(a*b);
} 

multiply(5,4,exec) 
*/

// function m1(n1){
//     return function(n2){
//         return console.log(n1*n2);
//     }
// }

const mutiplica  = (n1) => (n2) => console.log(n1/n2)

mutiplica(60)(6)


const triplica = (n) => console.log(n*3);
triplica(6)