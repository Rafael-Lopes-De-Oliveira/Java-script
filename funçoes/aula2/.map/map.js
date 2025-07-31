const hero = ["batman","superman","flash"];

const heroUp = hero.map(hero => hero[0].toUpperCase() + hero.slice(1));
console.log(heroUp);
