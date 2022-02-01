function calcular() {
    let tnum = window.document.getElementById('txtnum')
    let res = window.document.querySelector('div.res')
    if (tnum.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let num = Number(tnum.value)

        let v = function (num) {
            return res.innerHTML = `<p>${num*2}</p>`
        }
        v(num)
    }
}