function carregar() {
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let msg = window.document.getElementsByClassName('msg')[0]
    let imagem = window.document.getElementsByClassName('imagem')[0]
    if (hora >= 0 && hora < 12) {
        // Boa Manhã
        imagem.src = 'fotomanha.png'
    } else if (hora <= 18) {
        // Boa Tarde
        imagem.src = 'fototarde.png'
    } else {
        // Boa Noite
        imagem.src = 'fotonoite.png'
    }
}