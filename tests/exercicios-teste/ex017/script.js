function tabuada() {
    let tnum = window.document.querySelector('input#txtnum')
    let tab = window.document.querySelector('select#seltab')
    if (tnum.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        tab.innerHTML = 0
        let num = Number(tnum.value)
        for(let c = 1;c <= 10;c++) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}