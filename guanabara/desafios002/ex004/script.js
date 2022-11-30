let res = window.document.querySelector('div.res')
function comecar() {
    let nome = window.prompt('Qual é o seu nome?')
    res.innerHTML = `<p>Olá, <strong>${nome}</strong>! É um grande prazer te conhecer! &#x1F596</p>`
}