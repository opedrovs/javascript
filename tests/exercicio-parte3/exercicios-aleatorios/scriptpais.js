function verificar() {
    var tpais = window.document.getElementById('txtpais')
    var pais = String(tpais.value)
    var res = window.document.querySelector('div.res')
    res.innerHTML = `<p>Vivendo no país <strong>${pais}</strong> você é</p>`
    if (pais == 'Brasil') {
        res.innerHTML += `<p><strong>Brasileiro</strong>!</p>`
    } else {
        res.innerHTML += `<p><strong>Estrangeiro</strong>!</p>`
    }
}