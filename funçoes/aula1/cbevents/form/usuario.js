let nome = window.document.querySelector('#nome')

let botao = window.document.querySelector('#botao').addEventListener('click' , () =>{
    if(nome.value == ""){
        window.alert('Insira um nome');
    }else{
        Usuario();
    }
})

const Usuario =() =>{
    document.body.innerHTML += `<br> Usuario: ${nome.value} <br>`
    document.body.innerHTML += `O seu nome tem: ${nome.value.length} caracteres`
}