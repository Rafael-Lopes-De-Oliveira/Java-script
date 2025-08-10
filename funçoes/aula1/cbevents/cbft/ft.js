
let audio = document.createElement('audio');
audio.setAttribute('id','audio')

let  imagem = window.document.querySelector('#image').addEventListener('click', () =>{
    audio.setAttribute('src','music.mp3')
    document.body.appendChild(audio);
    audio.play()
})