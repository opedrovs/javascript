let res = window.document.querySelector('div.res')
function contar() {
    res.innerHTML += '<h2>Contando de 1 até 10</h2>'
    for(let c = 1; c <= 10; c++) {
        res.innerHTML += ` ${c} &#x1F449`
    }
    res.innerHTML += ' &#x1F3C1'
}