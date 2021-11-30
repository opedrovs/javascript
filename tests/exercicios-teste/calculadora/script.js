function calcular() {
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.getElementById('txtn2')
    let res = window.document.getElementsByClassName('res')[0]
    if (tn1.value.length == 0 || tn2.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let tipo = window.document.getElementsByName('tipo')
        let tipoconta = ''
        let conta = ''
        let n1 = Number(tn1.value)
        let n2 = Number(tn2.value)
        res.innerHTML = '<p>Calculando:</p>'
        if (tipo[0].checked) {
            tipoconta = 'soma'
            conta = n1 + n2
        } else if (tipo[1].checked) {
            tipoconta = 'subtração'
            conta = n1 - n2
        } else if (tipo[2].checked) {
            tipoconta = 'multiplicação'
            conta = n1 * n2
        } else {
            tipoconta = 'divisão'
            conta = n1 / n2
        }
        res.innerHTML = `<p>A ${tipoconta} entre ${n1} e ${n2} é igual a <strong>${conta}</strong>.</p>`
    }
}