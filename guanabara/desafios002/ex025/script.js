let res = window.document.getElementById('res')
function contar() {
    let valorFinal = Number(window.document.getElementById('valorFinal').value)
    res.innerHTML += `<h2>Contando de 0 até ${valorFinal}</h2>`
    for (let c = 0; c <= valorFinal; c++) {
        res.innerHTML += ` ${c} &#x1F449`
    }
    res.innerHTML += ' &#x1F3C1'
}