let res = window.document.getElementById('res')
function calcmedia() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let pri = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let seg = Number(window.prompt(`Além de ${pri}, qual foi a outra nota de ${nome}?`))
    let media = (pri + seg) / 2
    
    res.innerHTML = `<p>Calculando a média final de <span class="destaque">${nome}</span>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <span class="destaque">${pri}</span> e <span class="destaque">${seg}</span>.</p>`
    res.innerHTML += `<p>A média final será <span class="destaque">${media}</span>.</p>`
}