let res = window.document.querySelector('div.res')
function calcular() {
    let a = window.prompt('Qual é o valor de a?')
    let b = window.prompt('Qual é o valor de b?')
    let c = window.prompt('Qual é o valor de c?')
    let bhask = ((b*b) - (4*a*c)) 

    res.innerHTML = `<p>A equação atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <strong><span class="destaque">&Delta; = ${bhask}</span></strong></p>`
}