let botao = window.document.getElementById('botao')
let res = window.document.getElementsByClassName('res')[0]
let min = 1
let max = 100
let numCorreto = Math.floor(Math.random() * (max - min) + min)
function adivinhar() {
    let num = Number(window.prompt('Qual é o seu palpite?'))

    if (num < numCorreto) {
        res.innerHTML += `<p>Você falou ${num}. Meu número é <strong>MAIOR</strong>!</p>`
    } else if (num > numCorreto) {
        res.innerHTML += `<p>Você falou ${num}. Meu número é <strong>MENOR</strong>!</p>`
    } else if (num == numCorreto) {
        res.innerHTML += `<p><strong>PARABÉNS</strong>! Você acertou! Eu tinha dito o valor ${numCorreto}!</p>`
        botao.style.display = 'none'
    }
}