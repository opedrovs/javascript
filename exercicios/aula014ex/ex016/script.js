function contar() {
    let tinicio = window.document.getElementById('txtinicio')
    let tfim = window.document.getElementById('txtfim')
    let tpasso = window.document.getElementById('txtpasso')
    let inicio = Number(tinicio.value)
    let fim = Number(tfim.value)
    let passo = Number(tpasso.value)
    let res = window.document.getElementsByClassName('res')[0]
    if (fim == 0 || tinicio.value.length == 0) {
        res.innerHTML = '<p>Impossível contar!</p>'
    } else if (passo == 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        if (inicio < fim) {
            res.innerHTML = '<p>Contando:</p>'
            let c = inicio
            while (c < fim) {
                res.innerHTML += `${c} &#x1F449`
                c++
            }
            res.innerHTML += '&#x1F3C1'
        } else if (inicio > fim) {
            res.innerHTML = '<p>Contando:</p>'
            let c = inicio
            while (c >= fim) {
                res.innerHTML += `${c} &#x1F449`
                c--
            }
            res.innerHTML += '&#x1F3C1'
        }
    } else if (inicio < fim) {
        res.innerHTML = '<p>Contando:</p>'
        let c = inicio
        while (c < fim) {
            res.innerHTML += `${c} &#x1F449`
            c+=passo
        }
        res.innerHTML += '&#x1F3C1'
    } else if (inicio > fim) {
        res.innerHTML = '<p>Contando:</p>'
        let c = inicio
        while (c >= fim) {
            res.innerHTML += `${c} &#x1F449`
            c-=passo
        }
        res.innerHTML += '&#x1F3C1'
    }
}