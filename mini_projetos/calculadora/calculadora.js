
const nume = (num) =>{
  window.document.querySelector('#olhador').innerHTML += num;
}

const limpe = () =>{
  return window.document.querySelector('#olhador').innerHTML = ""
}

const resultado = () =>{
  let result = window.document.querySelector('#olhador').innerHTML;
  if(result){  
    result = window.document.querySelector('#olhador').innerHTML = eval(result)
  }
}


