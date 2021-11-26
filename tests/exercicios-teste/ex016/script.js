function contar() {
    let ini = window.document.getElementById('txtini')
    let fim = window.document.getElementById('txtfim')
    let passo = window.document.getElementById('txtpasso')
    let res = window.document.getElementsByClassName('res')[0]
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = '<p>Impossível contar!</p>'
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = '<p>Contando:</p>'
        if (p == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} &#x1F449`
            }
        } else if (i > f) {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} &#x1F449`
            }
        }
        res.innerHTML += '&#x1F3C1'
    }
}