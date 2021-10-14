function clicar() {
    let paisx = window.document.querySelector('input#txtpais')
    let pais = String(paisx.value)
    let res = window.document.getElementsByClassName('res')[0]
    res.innerHTML = `<p>Morando no país ${pais} você é </p>`

    if (pais == 'Brasil' || pais == 'brasil' || pais == 'BRASIL') {
        res.innerHTML = `<p><strong>Brasileiro</strong>!</p>`
    } else {
        res.innerHTML = `<p><strong>Estrangeiro</strong>!</p>`
    }
}