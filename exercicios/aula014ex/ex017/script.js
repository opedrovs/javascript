function gerar() {
    let tnum = window.document.getElementById('txtnum')
    let res = window.document.getElementsByClassName('res')[0]
    if (tnum.value.length == 0) {
        window.alert('Por favor, coloque um número!')
    } else {
        res.innerHTML = ''
        let num = Number(tnum.value)
        let c = 1
        while (c <= 10) {
            res.innerHTML += `${num} x ${c} = ${c*num} <br>`
            c++
        }
    }
}