let res = window.document.getElementsByClassName('res')[0]

function maior() {
    let num1 = Number(window.prompt('Digite um número:'))
    let num2 = Number(window.prompt('Digite outro número:'))
    if (num1 > num2) {
        res.innerHTML = `<p>Analisando os valores <span class="destaque">${num1}</span> e <span class="destaque">${num2}</span>, o maior valor é <strong>${num1}</strong></p>`
    } else if (num1 < num2) {
        res.innerHTML = `<p>Analisando os valores <span class="destaque">${num1}</span> e <span class="destaque">${num2}</span>, o maior valor é <strong>${num2}</strong></p>`
    } else if (num1 == num2) {
        res.innerHTML = `<p>Analisando os valores <span class="destaque">${num1}</span> e <span class="destaque">${num2}</span>, ambos são <strong>IGUAIS</strong></p>`
    }
}