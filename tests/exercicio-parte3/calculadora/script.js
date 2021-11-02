function somar() {
    var n1 = window.Number(document.getElementById('txtn1').value)
    var n2 = window.Number(document.getElementById('txtn2').value)
    var res = window.document.getElementsByClassName('res')[0]
    var s = n1 + n2
    res.innerHTML = `<p>A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong></p>`
}
function subtrair() {
    var n3 = window.Number(document.getElementById('txtn3').value)
    var n4 = window.Number(document.getElementById('txtn4').value)
    var res2 = window.document.getElementsByClassName('res2')[0]
    var sub = n3 - n4
    res2.innerHTML = `<p>A subtração entre ${n3} e ${n4} é igual a <strong>${sub}</strong></p>`
}
function multiplicar() {
    var n5 = window.Number(document.getElementById('txtn5').value)
    var n6 = window.Number(document.getElementById('txtn6').value)
    var res3 = window.document.getElementsByClassName('res3')[0]
    var mul = n5 * n6
    res3.innerHTML = `<p>A multiplicação entre ${n5} e ${n6} é igual a <strong>${mul}</strong></p>`
}
function dividir() {
    var n7 = window.Number(document.getElementById('txtn7').value)
    var n8 = window.Number(document.getElementById('txtn8').value)
    var res4 = window.document.getElementsByClassName('res4')[0]
    var divi = n7 / n8
    res4.innerHTML = `<p>A divisão entre ${n7} e ${n8} é igual a <strong>${divi}</strong></p>`
}