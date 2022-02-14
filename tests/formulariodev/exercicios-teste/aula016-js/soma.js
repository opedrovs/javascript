function soma() {
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.getElementById('txtn2')
    let res = window.document.querySelector('div.res')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)

    function soma(n1, n2) {
        let s = n1 + n2
        return res.innerHTML = `<p>A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong></p>`
    }

    soma(n1, n2)
}