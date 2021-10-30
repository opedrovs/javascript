function contar() {
    var inicio = window.Number(document.getElementById('txtinicio').value)
    var fim = window.Number(document.getElementById('txtfim').value)
    var passo = window.Number(document.getElementById('txtpasso').value)
    var res = window.document.getElementById('res')
    if (passo == 0) {
        window.alert('Passo inválido! Considerando PASSO 1.')
        if (inicio < fim) {
            var c = inicio
            while (c < fim) {
                res.innerHTML += `${c} &#x1F449`
                c++
            }
            res.innerHTML += '&#x1F3C1'
        } else if (inicio > fim) {
            var c = fim
            while (c < inicio) {
                res.innerHTML += `${c} &#x1F449`
                c++
            }
            res.innerHTML += '&#x1F3C1'
        }
    } else if (fim == 0) {
        res.innerHTML = `<p>Impossível contar!</p>`
    } else if (inicio < fim) {
        var c = inicio
        while (c < fim) {
            res.innerHTML += `${c} &#x1F449`
            c+=passo
        }
        res.innerHTML += '&#x1F3C1'
    } else if (fim < inicio) {
        var c = fim
        while (c < inicio) {
            res.innerHTML += `${c} &#x1F449`
            c+=passo
        }
        res.innerHTML += '&#x1F3C1'
    }
}