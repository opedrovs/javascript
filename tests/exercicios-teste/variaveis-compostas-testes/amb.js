let tnum = window.document.getElementById('txtnum')
let val = []
let res = window.document.querySelector('div.res')

function adicionar() {  
    let num = Number(tnum.value)
    val.push(num)
    let tab = window.document.getElementById('tabela')
    if (tnum.value.lenght == 0 || tnum.value < 1 || tnum.value > 100) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado.`
        tab.appendChild(item)
    }
}

function finalizar() {
    let num = Number(tnum.value)

    if (tnum.value.length == 0 || tnum.value < 1 || tnum.value > 100) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        res.innerHTML = `<p>Ao todo, temos ${val.length} cadastrados.</p>`
        //res.innerHTML += `<p>O maior valor informado foi ${val}.</p>`
        //res.innerHTML += `<p>O menor valor informado foi ${val}.</p>`
        
        function soma(n1, n2, n3, n4) {
            let s = n1 + n2 + n3 + n4
            return res.innerHTML += `Somando todos os valores, temos ${s}.`
        }

        soma.apply(null, val)

        //res.innerHTML += `A média dos valores digitados são ${val}`
    }
}