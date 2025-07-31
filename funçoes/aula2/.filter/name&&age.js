const nameAge = [
    {nome:'rafael', idade:18},
    {nome:'pedro', idade:12},
    {nome:'maria', idade:5},
    {nome:'alberto', idade:68},
    {nome:'alessandra', idade:16},
    {nome:'katarine', idade:21}
]

const adults = nameAge.filter(person => person.idade >= 18);

console.log(adults);