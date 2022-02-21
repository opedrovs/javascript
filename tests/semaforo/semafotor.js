let imagem = window.document.getElementById('imagem')
let verme = window.document.getElementById('verme')
let amare = window.document.getElementById('amare')
let verde = window.document.getElementById('verde')

function vermeOn() {
    imagem.src = './imagens/vermelho.png'
}

function amareOn() {
    imagem.src = './imagens/amarelo.png'
}

function verdeOn() {
    imagem.src = './imagens/verde.png'
}

verme.addEventListener('click', vermeOn)
amare.addEventListener('click', amareOn)
verde.addEventListener('click', verdeOn)