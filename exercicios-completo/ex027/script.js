let res = window.document.getElementById('res')
function tabuada() {
    let n = Number(window.document.getElementById('num').value)
    res.innerHTML = `<h2>Tabuada de ${n}</h2>`
    for (let c = 1; c <= 10; c++) {
        res.innerHTML += `${n} x ${c} = <strong>${n*c}</strong> <br>`
    }
}