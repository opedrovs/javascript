let res = window.document.querySelector('div.res')
let regacao1 = window.document.getElementById('acao1')
let regacao2 = window.document.getElementById('acao2')
let regacao3 = window.document.getElementById('acao3')
let regacao4 = window.document.getElementById('acao4')

regacao1.addEventListener('click', acao1)
regacao2.addEventListener('click', acao2)
regacao3.addEventListener('click', acao3)
regacao4.addEventListener('click', acao4)

function acao1() {
    res.innerHTML += '<p>Clicou no primeiro botão</p>'
}

function acao2() {
    res.innerHTML += '<p>Clicou no segundo botão</p>'
}

function acao3() {
    res.innerHTML += '<p>Clicou no terceiro botão</p>'
}

function acao4() {
    res.innerHTML += '<p>Clicou no quarto botão</p>'
}