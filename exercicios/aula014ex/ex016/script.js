function clicar() {
    var inicio = window.Number(document.getElementById('txtinicio').value)
    var fim = window.Number(document.getElementById('txtfim').value)
    var passo = window.Number(document.getElementById('txtpasso').value)
    var res = window.document.getElementsByClassName('res')[0]
    if (passo == 0) {
        window.alert('Passo inválido! Considerando PASSO 1')
        if (inicio < fim) {
            var c = inicio
            res.innerHTML = '<p>Contando:</p>'
            while (c < fim) {
                res.innerHTML += `${c} &#x1F449`
                c++
            }
            res.innerHTML += '&#x1F3C1'
        } else if (inicio > fim) {
            var c = inicio
            res.innerHTML = '<p>Contando:</p>'
            while (c >= fim)  {
                res.innerHTML += `${c} &#x1F449`
                c--
            }
            res.innerHTML += '&#x1F3C1'
        }
    } else if (fim == 0 || inicio == length) {
        res.innerHTML = 'Impossível contar!'
    } else if (inicio < fim) {
        var c = inicio
        res.innerHTML = '<p>Contando:</p>'
        while (c < fim) {
            res.innerHTML += `${c} &#x1F449`
            c+=passo
        }
        res.innerHTML += '&#x1F3C1'
    } else if (inicio > fim) {
        var c = inicio
        res.innerHTML = '<p>Contando:</p>'
        while (c >= fim) {
            res.innerHTML += `${c} &#x1F449`
            c-=passo
        }
        res.innerHTML += '&#x1F3C1'
    }
}