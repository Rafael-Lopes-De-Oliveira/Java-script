
const list = [
    {product:'bread', pay: 5},
    {product:'picanha', pay: 79.6},
    {product:'watter', pay: 12},
    {product:'cokkie', pay: 2.5},
];

const valueList = list.reduce((vtot, vatu) => vtot + vatu.pay,0);

console.log(valueList);