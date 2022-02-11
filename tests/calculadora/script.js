function padrao() {
    document.body.style.background = '#f0f0f0'
    document.body.style.color = 'black'
}

function escuro() {
    document.body.style.background = '#555555'
    document.body.style.color = 'white'
}

function tabuada() {
    let tnum = window.document.getElementById('txtnum')
    let tab = window.document.getElementById('tabela')
    if (tnum.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = ''
        let n = Number(tnum.value)
        let c = 1
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `pos${c}`
            tab.appendChild(item)
            c++
        }
    }
}