const heros = [
    {nome:'Joshep', power:67 , victory:8 },
    {nome:'Kaylon', power:35 , victory:10 },
    {nome:'Taylor', power:95 , victory:5 },
    {nome:'Frederic', power:73 , victory:6 },
    {nome:'Joelma', power:22 , victory:4 },
    {nome:'Burna M.', power:46 , victory:9 },
    {nome:'Sharika', power:61.4 , victory:7 },
    {nome:'Lucas N.', power:13.2 , victory:2 },
]

function avaliarEquipe(){
    const betterHeros = heros.filter((hero) => hero.power>=60 && hero.victory>=5);

    const heroNome = betterHeros.map((hero)=> hero.nome);

    const heroUp = betterHeros.map((hero)=> hero.power*hero.power/10);

    const heropower = heroUp.reduce((acc, valatu)=> (acc+valatu),0);

    const newhero = [{Nome:heroNome , Poder:heroUp}, `Poder Total dos Hérois: ${heropower.toFixed(2)}`];

    return  console.log( newhero);;

}


avaliarEquipe();



//////////////////////

IA
function avaliarEquipe() {
  const betterHeros = heros.filter(hero => hero.power >= 60 && hero.victory >= 5);

  const heroisTreinados = betterHeros.map(hero => ({
    nome: hero.nome,
    poder: (hero.power * hero.power) / 10
  }));

  const poderTotal = heroisTreinados.reduce((acc, h) => acc + h.poder, 0);

  return {
    nomes: heroisTreinados.map(h => h.nome),
    poderes: heroisTreinados.map(h => h.poder.toFixed(2)),
    poderTotal: poderTotal.toFixed(2)
  };
}

const resultado = avaliarEquipe();
console.log
/*
console.log(heros);
console.log(heroUp);
console.log(heropower.toFixed(2))
console.log(heroNome);

*/