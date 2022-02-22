function tabuada() {
    let num = window.document.getElementById('txtnum')
    let tab = window.document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `Valor${c}`
            tab.appendChild(item)
        }
    }
}