let tnum = window.document.getElementById('txtnum')
let val = []
let res = window.document.querySelector('div.res')

function adicionar() {  
    let num = Number(tnum.value)
    val.push(num)
    let tab = window.document.getElementById('tabela')
    if (tnum.value.lenght == 0 || tnum.value < 1 || tnum.value > 100 || val != val) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        tab.appendChild(item)
    }
}

function finalizar() {
    let num = Number(tnum.value)

    if (val.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML = `<p>Ao todo, temos ${val.length} números cadastrados.</p>`
        
        let maior = Math.max.apply(null, val)
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`

        let menor = Math.min.apply(null, val)
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        
        let total = val.reduce(function(total, valor) {
            return total + valor
        })
        res.innerHTML += `<p>Somando todos os valores, temos ${total}.</p>`

        let media = val.reduce(function(media, numero) {
            return media + numero
        })
        res.innerHTML += `<p>A média dos valores digitados é ${media / Number(val.length)}.</p>`
    }
}