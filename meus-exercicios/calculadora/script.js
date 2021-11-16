function calcular() {
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.getElementById('txtn2')
    let res = window.document.getElementsByClassName('res')[0]
    if (tn1.value.length == 0 || tn2.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let n1 = Number(tn1.value)
        let n2 = Number(tn2.value)
        let tipoconta = window.document.getElementsByName('tipoconta')
        let tipo = ''
        let conta = 0
        if (tipoconta[0].checked) {
            tipo = 'soma'
            conta = n1 + n2
        } else if (tipoconta[1].checked) {
            tipo = 'subtração'
            conta = n1 - n2
        } else if (tipoconta[2].checked) {
            tipo = 'multiplicação'
            conta = n1 * n2
        } else {
            tipo = 'divisão'
            conta = n1 / n2
        }
        res.innerHTML = `A ${tipo} entre ${n1} e ${n2} é igual a <strong>${conta}</strong>`
    }
}