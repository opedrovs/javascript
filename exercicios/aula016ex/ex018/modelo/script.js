function adic() {
    let tnum = window.document.getElementById('txtnum')
    let num = Number(tnum.value)
    let val = []
    val.push(num+1, num, num-1)
    let tab = window.document.getElementById('tabela')
    let res = window.document.querySelector('div.res')
    if (tnum.value.length == 0 || tnum.value < 1 || tnum.value > 100) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${val} adicionado.`
        tab.appendChild(item)

        res.innerHTML = `<p>Valores: ${val}</p>`
        res.innerHTML += `<p>Posições: ${val.length}</p>`
        res.innerHTML += `<p>Primeiro valor: ${val[0]}</p>`
    }
}