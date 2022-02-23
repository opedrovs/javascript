window.alert('Seja bem vindo(a) ao meu site!')
let res = window.document.querySelector('div.res')
function calcular() {
    let num = window.prompt('Digite um número:')
    let dobro = num * 2
    let metade = num / 2

    res.innerHTML = `<p>O dobro de ${num} é ${dobro} e a metade é ${metade}!</p>`
}