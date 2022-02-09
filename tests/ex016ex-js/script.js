let tnum = window.document.getElementById('txtnum')
let val = []
let res = window.document.getElementsByClassName('res')[0]

function adicionar() {
    let num = Number(tnum.value)
    let tab = window.document.getElementById('tabela')
    let item = document.createElement('option')
    if (num.length == 0 || num < 1 || num > 100) {
        window.alert('Valor inválido ou já encontrado na lista.')
    } else {
        val.push(num)
        item.text = `Valor ${num} adicionado.`
        item.value = `Posições ${val.length}`
        tab.appendChild(item)
        res.innerHTML = ''
    }
}

function finalizar() {
    if (val.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML = `<p>Ao todo, temos ${val.length} números cadastrados.</p>`
        
        let maior = Math.max.apply(null, val)
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        
        let menor = Math.min.apply(null, val)
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`

        let soma = val.reduce(function(soma, numero) {
            return soma + numero
        })
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        
        let media = val.reduce(function(media, valor) {
            return media + valor
        })
        res.innerHTML += `A média dos valores digitados é ${media / val.length}.`
    }
}