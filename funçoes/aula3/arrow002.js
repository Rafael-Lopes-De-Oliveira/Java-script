const people = (name,age,sex) => {
    return{
        name,
        age,
        sex,
        most (){
            return ` Name: ${name} age: ${age} sex:${sex}`
        }
    }
};

let userRafael = people('Rafael','17','Masculino')

let userf = people(false,'15',false);
let userAges = userRafael.age  + ' and '+ userf.age
console.log(userAges);
// console.log(userRafael.most());