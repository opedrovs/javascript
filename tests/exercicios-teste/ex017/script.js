function tabuada() {
    let tnum = window.document.getElementById('txtnum')
    let tab = window.document.getElementById('seltab')
    if (tnum.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let num = Number(tnum.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}