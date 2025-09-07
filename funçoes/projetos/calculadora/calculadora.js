
let result = window.document.querySelector('#olhador');

const nume = (num) =>{
  result.innerHTML += num;
  
}


const limpe = () =>{
  return result.innerHTML = ""
}

const resultado = () =>{
  let math = result.innerHTML
  result.innerHTML= ''
  return result.innerHTML = eval(math)
}



