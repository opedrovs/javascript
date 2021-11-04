function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementsByClassName('res')[0]
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // window.aler('[ERRO] Faltam dados!')
        res.innerHTML = `<p>Impossível contar</p>`
    } else {
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        res.innerHTML = '<p>Contando:</p>'     
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }   
        if (i < f) {
            // Contagem crescente
            for(let c = i;c <= f;c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            // Constagem regressiva
            for(let c = i;c >= f;c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += '\u{1F3C1}'
    }
}