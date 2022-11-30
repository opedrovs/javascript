let res = window.document.getElementById('res')
function parimper() {
    let num = Number(window.prompt('Digite um número:'))
    if (num%2 == 0) {
        return res.innerHTML = `<p>O número ${num} que foi digitado é <strong>PAR!</strong></p>` 
    } else {
        return res.innerHTML = `<p>O número ${num} que foi digitado é <strong>ÍMPAR!</strong></p>`
    }
}