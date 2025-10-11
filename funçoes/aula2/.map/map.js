const hero = ["batman","superman","flash"];

const heroUp = hero.map(hero => hero[0].toUpperCase() + hero.slice(1)); //Aqui ele  recebe um item de cada vez do Array e pega  o que estiver na posção 0, exemplo batman, ai hero[0], pega o "b" da palavra
console.log(heroUp);


let t = hero[0]; console.log(t) //Aqui ele recebe o item na 1 posição
 