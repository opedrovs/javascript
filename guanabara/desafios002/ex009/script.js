let res = window.document.getElementsByClassName('res')[0]
let contador = window.document.getElementById('contar')
let zerarContador = window.document.getElementById('zerar')

// Contador
contador.addEventListener('click', contar)
let num = 1
let valor = 1
function contar() {
    res.innerHTML = `<p>O contador está com <span class="destaque">${num}</span> cliques.</p>`
    num += valor
}

// Zerar o Contador
zerarContador.addEventListener('click', zerar)
function zerar() {
    res.innerHTML = ''
    num = 1
}