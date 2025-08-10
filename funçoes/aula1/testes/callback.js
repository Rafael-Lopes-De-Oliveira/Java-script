const multi = (a,b, cb) =>{
    let result = a*b;
   return cb(result);
}
 
const mostrar = (n) => n/2

console.log(multi(5,4,mostrar))