function calcular() {
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.getElementById('txtn2')
    let res = window.document.getElementsByClassName('res')[0]
    if (tn1.value.length == 0 || tn2.value.length == 0) {
        res.innerHTML = '<p>Impossível calcular!</p>'
    } else {
        let n1 = Number(tn1.value)
        let n2 = Number(tn2.value)
        let tipo = window.document.getElementsByName('tipo')
        let conta = 0 // Usar "0" ou ''
        let tipoconta = 0 // Usar "0" ou ''
        res.innerHTML = '<p>Calculando:</p>'
        if (tipo[0].checked) {
            conta = n1 + n2
            tipoconta = 'soma'
        } else if (tipo[1].checked) {
            conta = n1 - n2
            tipoconta = 'subtração'
        } else if (tipo[2].checked) {
            conta = n1 * n2
            tipoconta = 'multiplicação'
        } else {
            conta = n1 / n2
            tipoconta = 'divsão'
        }
        res.innerHTML += `<p>A ${tipoconta} entre ${n1} e ${n2} é igual a <strong>${conta}</strong></p>`
    }
}