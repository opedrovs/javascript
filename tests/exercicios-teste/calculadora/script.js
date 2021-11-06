function soma() {
    let res = window.document.getElementsByClassName('res')[0]
    let tn1 = window.document.getElementById('txtn1')
    let tn2 = window.document.getElementById('txtn2')
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let s = n1 + n2
    res.innerHTML = `<p>A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong></p>`
}