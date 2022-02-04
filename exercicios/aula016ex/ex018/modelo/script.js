let tnum = window.document.getElementById('txtnum')
let res = window.document.querySelector('div.res')
let val = []

function adicionar() {
    let num = Number(tnum.value)
    let tab = window.document.getElementById('tabela')
    let item = document.createElement('option')
    if (tnum.value.length == 0 || tnum.value < 1 || tnum.value > 100) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        item.text = `Valor ${num} adicionado.`
        item.value = `val${num}`
        tab.appendChild(item)
        val.push(num)
        res.innerHTML = ''
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
        res.innerHTML += `<p>Somando todos os valores temos ${total}.</p>`
        
        let media = val.reduce(function(media, numero) {
            return media + numero
        })
        res.innerHTML += `A média dos valores digitados é ${media / val.length}.` 
    }
}