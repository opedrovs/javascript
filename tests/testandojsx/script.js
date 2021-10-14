function clicar() {
    let idadex = window.document.getElementById('txtidade')
    let idade = Number(idadex.value)
    let res = window.document.getElementsByClassName('res')[0]
    if (idade < 16) {
        res.innerHTML = `<p>Não vota!</p>`
    } else if (idade < 18 || idade > 65) {
        res.innerHTML = `<p>Voto opcional!</p>`
    } else {
        res.innerHTML = `<p>Voto obrigatório!</p>`
    }
}