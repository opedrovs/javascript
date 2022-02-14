function descobrir() {
    let tnum = window.document.getElementById('txtnum')
    let res = window.document.querySelector('div.res')
    if (tnum.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let num = Number(tnum.value)
        
        // Descobrir Fatorial de um Número
        function fatorial(num) {
            let fat = 1
            for(let c = num; c > 1; c--) {
                fat *= c
            }

            return res.innerHTML = `<p>O fatorial de ${num} é <strong>${fat}</strong></p>`
        }
        fatorial(num)
    }
}