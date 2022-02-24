let res = window.document.getElementById('res')
function verificar() {
    let ano = Number(window.prompt('Qual é o ano que você quer verificar?'))
    let multiplo = ano / 4

    res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
    if (multiplo == Number.parseInt(multiplo)) {
        // Bissexto
        res.innerHTML += `<p>O ano de ${ano} <span class="bissexto"><strong>É BISSEXTO</strong></span> &#x2705</p>`
    } else if (multiplo == Number.parseFloat(multiplo)) {
        // NÃO Bissexto
        res.innerHTML += `<p>O ano de ${ano} <span class="naobissexto">NÃO É BISSEXTO</span> &#x274C</p>`
    }
}