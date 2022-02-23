let res = window.document.getElementById('res')
function estacao() {
    let mes = window.prompt('Digite o mês em extenso (ex: Setembro)')
    let estacaoAno = ''

    // Código Limpo e Organizado

    if (mes == 'Janeiro' || mes == 'Fevereiro' || mes == 'Março') {
        estacaoAno = 'INVERNO'
    } else if (mes == 'Abril' || mes == 'Maio' || mes == 'Junho') {
        estacaoAno = 'PRIMAVERA'
    } else if (mes == 'Julho' || mes == 'Agosto' || mes == 'Setembro') {
        estacaoAno = 'Verão'
    } else if (mes == 'Outubro' || mes == 'Novembro' || mes == 'Dezembro') {
        estacaoAno = 'OUTONO'
    } else {
        estacaoAno = 'INDEFINIDO'
    }

    res.innerHTML = `<p>No mês de <span class="destaque">${mes}</span>, estamos na estação <span class="destaque"><strong>${estacaoAno}</strong></span>.</p>`

    /*

    Código LONGO e DESORGANIZADO

    if (mes == 'Janeiro') {
        res.innerHTML = `<p>No mês de <span class="destaque">${mes}</span>, estamos na estação <span class="destaque">INVERNO</span>.</p>`
    } else if (mes == 'Fevereiro') {
        res.innerHTML = `<p>No mês de <span class="destaque">${mes}</span>, estamos na estação <span class="destaque">INVERNO</span>.</p>`
    } else if (mes == 'Março') {
        res.innerHTML = `<p>No mês de <span class="destaque">${mes}</span>, estamos na estação <span class="destaque">INVERNO</span>.</p>`
    } else if (mes == 'Abril') {
        res.innerHTML = `<p>No mês de <span class="destaque">${mes}</span>, estamos na estação <span class="destaque">PRIMAVERA</span>.</p>`
    } else if (mes == 'Maio') {
        res.innerHTML = `<p>No mês de <span class="destaque">${mes}</span>, estamos na estação <span class="destaque">PRIMAVERA</span>.</p>`
    } else if (mes == 'Junho') {
        res.innerHTML = `<p>No mês de <span class="destaque">${mes}</span>, estamos na estação <span class="destaque">PRIMAVERA</span>.</p>`
    } else if (mes == 'Julho') {
        res.innerHTML = `<p>No mês de <span class="destaque">${mes}</span>, estamos na estação <span class="destaque">VERÃO</span>.</p>`
    } else if (mes == 'Agosto') {
        res.innerHTML = `<p>No mês de <span class="destaque">${mes}</span>, estamos na estação <span class="destaque">VERÃO</span>.</p>`
    } else if (mes == 'Setembro') {
        res.innerHTML = `<p>No mês de <span class="destaque">${mes}</span>, estamos na estação <span class="destaque">VERÃO</span>.</p>`
    } else if (mes == 'Outubro') {
        res.innerHTML = `<p>No mês de <span class="destaque">${mes}</span>, estamos na estação <span class="destaque">OUTONO</span>.</p>`
    } else if (mes == 'Novembro') {
        res.innerHTML = `<p>No mês de <span class="destaque">${mes}</span>, estamos na estação <span class="destaque">OUTONO</span>.</p>`
    } else if (mes == 'Dezembro') {
        res.innerHTML = `<p>No mês de <span class="destaque">${mes}</span>, estamos na estação <span class="destaque">OUTONO</span>.</p>`
    } else {
        res.innerHTML = `<p>No mês de <span class="destaque">${mes}</span>, estamos na estação <span class="destaque">INDEFINIDA</span>.</p>`
    }
    */
}