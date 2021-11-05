function verificar() {
    let tinicio = window.document.getElementById('txtinicio')
    let tfim = window.document.getElementById('txtfim')
    let tpasso = window.document.getElementById('txtpasso')
    let res = window.document.getElementsByClassName('res')[0]
    if (tinicio.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0) {
        res.innerHTML = '<p>Impossível contar!</p>'
    } else {
        let inicio = Number(tinicio.value)
        let fim = Number(tfim.value)
        let passo = Number(tpasso.value)
        res.innerHTML = '<p>Contando:</p>'
        if (passo == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        if (inicio < fim) {
            for(let c = inicio;c <= fim;c += passo) {
                res.innerHTML += ` ${c} &#x1F449`
            }
        } else if (inicio > fim) {
            for(let c = inicio;c >= fim;c -= passo) {
                res.innerHTML += ` ${c} &#x1F449`
            }
        }
        res.innerHTML += `&#x1F3C1`
    }
}