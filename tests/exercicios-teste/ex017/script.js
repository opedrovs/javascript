function tabuada() {
    let tnum = window.document.getElementById('txtnum')
    let tab = window.document.getElementById('tab')
    if (tnum.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = ''
        let num = Number(tnum.value)
        for(var c = 1;c <= 10;c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}