const students = [
    {name:'pedra', note:2.2},
    {name:'gabriel', note:9.5},
    {name:'joao', note:6.7},
    {name:'alex', note:5.3},
    {name:'maria', note:5.9},
    {name:'paulo', note:7.3},
    {name:'jessica', note:4.3},
    {name:'rafael', note: 9.5},
]


const studentsapp =  students.filter(stud => stud.note >=6 );
const studmedia = studentsapp.reduce((acc,valatu) => (acc + valatu.note),0)

console.log('Alunos que passaram:',studentsapp);
console.log('e a média deles:', studmedia/studentsapp.length);