let res = window.document.getElementsByClassName('res')[0]
function contar() {
    res.innerHTML += '<h2>Contagem regressiva de 10 a 1</h2>'
    for (let c = 10; c >= 1; c--) {
        res.innerHTML += ` ${c} &#x1F449`
    }
    res.innerHTML += ' &#x1F3C1'
}