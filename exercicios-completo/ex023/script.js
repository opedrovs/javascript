let res = window.document.getElementById('res')
function contar() {
    res.innerHTML += '<h2>Números pares de 1 até 10</h2>'
    for (let c = 1; c <= 10; c++) {
        if (c%2 == 0) {
            // Par
            res.innerHTML += ` ${c} &#x1F449`
        } else {
            // Ímpar
            res.innerHTML += ''
        }
    }
    res.innerHTML += ' &#x1F3C1'
}