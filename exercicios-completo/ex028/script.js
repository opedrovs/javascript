let res = window.document.getElementById('res')
function fatorial() {
    let n = Number(window.document.getElementById('num').value)
    
    if (n < 1 || n > 21) {
        window.alert('[ERRO] Coloque um número que não seja menor que 1 e maior que 21.')
    } else {
        res.innerHTML += `<h2>Calculando ${n}</h2>`
        
        if (n == 1) {
            res.innerHTML += `<p>1 = <strong>1</strong></p>`
        } else {
            let fat = 1

            for (let f = 1; f <= n; f++) {
                fat *= f
            }

            for (let c = n; c >= 2; c--) {
                res.innerHTML += `${c} x `
            }
            res.innerHTML += ` 1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
        }
    }
}