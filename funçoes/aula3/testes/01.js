const Clientes = [{
    nome:"Marcos" , idade: 37 ,
    nome:"Pedro" , idade: 94 ,
    nome:"Jonas" , idade: 61 ,
    nome:"Alberto" , idade:79 ,
    nome:"Gabaiel" , idade: 88 ,
    nome:"Raphitus" , idade: 86 ,
    nome:"Pedro" , idade: 2 ,
    nome:"Theodoro" , idade: 19,
}];




const ClientVIP = Clientes.filter(age => (age.idade % 2) == 0);

console.log(ClientVIP.dad);