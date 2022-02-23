let res = window.document.getElementsByClassName('res')[0]

function soma() {
    let num1 = Number(window.prompt('Digite um número:'))
    let num2 = Number(window.prompt('Digite outro número:'))
    let s = num1 + num2

    res.innerHTML = `<p>A soma entre <span class="destaque">${num1}</span> e <span class="destaque">${num2}</span> é igual a <strong>${s}!</strong></p>`
}