let res = window.document.getElementsByClassName('res')[0]
function contar() {
    let i = Number(window.document.getElementById('inicio').value)
    let f = Number(window.document.getElementById('final').value)
    res.innerHTML += `<h2>Contando de ${i} até ${f}</h2>`
    
    if (i == f) {
        // Não possível contar
        res.innerHTML += '<p>Não é possível contar, pois os números são iguais &#x1F3C1</p>' 
    } else if (i < f) {
        // Contagem Crescente
        for (let c = i; c <= f; c++) {
            res.innerHTML += ` ${c} &#x1F449`
        }
    } else if (i > f) {
        // Contagem Regressiva
        for (let c = i; c >= f; c--) {
            res.innerHTML += ` ${c} &#x1F449`
        }
    }
}