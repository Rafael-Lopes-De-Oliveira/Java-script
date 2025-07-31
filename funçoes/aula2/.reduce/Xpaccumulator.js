const xp = [50,45,30,25,12,5];

const accumulatorXp = xp.reduce((xpAcc, xpAtual) => xpAcc+xpAtual,0);

console.log(accumulatorXp);