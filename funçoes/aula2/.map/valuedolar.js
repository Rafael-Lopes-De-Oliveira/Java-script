const valueReal = [
    {product:'Mouse', value:50},
    {product:'led', value:20},
    {product:'monitor', value:120},
    {product:'mousepad', value:85}
];

const valueDolar = valueReal.map(valorreal =>valorreal.value*5)


/*
const valorDolar = valueReal.map(valorReal =>({
    product: valorReal.product,  valorUsd: valorReal.value*5,
}))
*/

console.log(valueDolar);