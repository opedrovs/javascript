function gerar() {
    var tnum = window.document.getElementById('txtnum')
    var num = Number(tnum.value)
    var res = window.document.getElementsByClassName('res')[0]
    if (tnum.value.length == 0) {
        window.alert('Por favor, coloque um número!')
    } else {
        res.innerHTML = `<p>${num} x 1 = ${num*1}</p>`
        res.innerHTML += `<p>${num} x 2 = ${num*2}</p>`
        res.innerHTML += `<p>${num} x 3 = ${num*3}</p>`
        res.innerHTML += `<p>${num} x 4 = ${num*4}</p>`
        res.innerHTML += `<p>${num} x 5 = ${num*5}</p>`
        res.innerHTML += `<p>${num} x 6 = ${num*6}</p>`
        res.innerHTML += `<p>${num} x 7 = ${num*7}</p>`
        res.innerHTML += `<p>${num} x 8 = ${num*8}</p>`
        res.innerHTML += `<p>${num} x 9 = ${num*9}</p>`
        res.innerHTML += `<p>${num} x 10 = ${num*10}</p>`
    }
}