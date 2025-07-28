let  button = window.document.querySelector('button').addEventListener('click', ()=>{
    const nomes = ['rafal lindo 1', 'rafael lindo 2', 'rafael lindo 3']
    let ctt= 0;
    const conta = setInterval(() => {
        console.log(nomes[ctt]);
        ctt == 2?clearInterval(conta):ctt++
    }, 1000);
})