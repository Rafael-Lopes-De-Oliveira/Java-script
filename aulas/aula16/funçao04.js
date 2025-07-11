function fatorial(n){
    let cont = 1
    for(let c = n; c>1 ; c--){
        cont *= c
    }
    return cont
}

console.log(fatorial(4))