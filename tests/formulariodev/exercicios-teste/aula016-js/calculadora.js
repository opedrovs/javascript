function calcular() {
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.getElementById('txtn2')
    let res = window.document.querySelector('div.res')
    if (tn1.value.length == 0 || tn2.value.length == 0) {
        res.innerHTML = '<p>Impossível calcular!</p>'
    } else {
        let tipo = window.document.getElementsByName('tipo')
        let n1 = Number(tn1.value)
        let n2 = Number(tn2.value)
        if (tipo[0].checked) {
            // SOMA
            function soma(n1, n2) {
                return res.innerHTML = `<p>A soma entre ${n1} e ${n2} é igual a <strong>${n1 + n2}</strong></p>`
            }
            soma(n1, n2)
        } else if (tipo[1].checked) {
            // SUBTRAÇÃO
            function sub(n1, n2) {
                return res.innerHTML = `<p>A subtração entre ${n1} e ${n2} é igual a <strong>${n1 - n2}</strong></p>`
            }

            sub(n1, n2)

        } else if (tipo[2].checked) {
            // DIVISÃO
            function divi() {
                return res.innerHTML = `<p>A divisão entre ${n1} e ${n2} é igual a <strong>${n1 / n2}</strong></p>`
            }

            divi(n1, n2)

        } else {
            // MULTIPLICAÇÃO
            function mul(n1, n2) {
                return res.innerHTML = `<p>A subtração entre ${n1} e ${n2} é igual a <strong>${n1 * n2}</strong></p>`
            }

            mul(n1, n2)
        }
    }
}