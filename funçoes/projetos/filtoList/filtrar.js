const letra = window.document.querySelector("#letra")
const nomes = [         
    "Geovana",
    "Pedro",
    "Rosangela",
    "Jorge",
    "Roger",
    "Juanderson",
    "Thiago",
    "Patricia",
    "Pamela",
    "Karol",
    "Thais",
    "Rafael",
    "Gabriel",
];

const button = window.document.querySelector("#filtrar").addEventListener("click", (n) =>{
    const filtronomes = nomes.filter(nome => nome[0].toUpperCase() == letra.value.toUpperCase());
    let p = document.createElement('p')
    p.innerHTML += `<p>Lista de Nomes Filtrados:</p> ${filtronomes.join(",")} `;
    document.body.appendChild(p);
})












