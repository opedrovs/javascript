let res = window.document.getElementsByClassName('res')[0]
function contar() {
    res.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`
    for (let c = 1; c <= 10; c++) {
        if (c%2 == 0) {
            // Pares (marcado)
            res.innerHTML += ` <span class="destaque"><strong>${c}</strong></span> &#x1F449`
        } else {
            // Ímpares
            res.innerHTML += ` ${c} &#x1F449`
        }
    }
    res.innerHTML += ' &#x1F3C1'
}