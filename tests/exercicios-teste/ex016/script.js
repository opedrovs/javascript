function contar() {
    let ini = window.document.querySelector('input#txtini')
    let fim = window.document.querySelector('input#txtfim')
    let passo = window.document.querySelector('input#txtpasso')
    let res = window.document.querySelector('div.res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = 'Contando:<br>'
        if (p == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(let c = i;c <= f;c += p) {
                res.innerHTML += ` ${c} &#x1F449`
            }
        } else if (i > f) {
            for(let c = i;c >= f;c -= p) {
                res.innerHTML += ` ${c} &#x1F449`
            }
        }
        res.innerHTML += `&#x1F3C1`
    }
}