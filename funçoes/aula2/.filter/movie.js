const moviereview = [
    {name:'batman', review:9},
    {name:'thunder bolts', review:4},
    {name:'spider girl', review:2.7},
    {name:'spider man', review:9.5},
    {name:'The lamp', review:1.3},
    {name:'iron man', review:8},
]

const bettermovie = moviereview.filter(movie => movie.review >=7)

console.log(bettermovie);