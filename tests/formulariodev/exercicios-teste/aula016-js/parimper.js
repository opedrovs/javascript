function verificar() {
    let tnum = window.document.getElementById('txtnum')
    let res = window.document.querySelector('div.res')
    if (tnum.value.length == 0) {
        window.alert('[ERRO] Digite um número!')
    } else {
        let num = Number(tnum.value)
        function parimper(n) {
            if (n%2 == 0) {
                return res.innerHTML = '<p><strong>Par</strong>!</p>'
            } else {
                return res.innerHTML = '<p><strong>Ímper</strong>!</p>'
            }
        }
        parimper(num)
    }
}