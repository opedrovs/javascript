function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var imagem = window.document.getElementsByClassName('imagem')[0]
    var msg = window.document.getElementsByClassName('msg')[0]
    msg.innerHTML = `<p>Agora são exatamente ${hora} e ${min} minutos.</p>`
    if (hora >= 0 && hora < 12) {
        // Boa Manhã!
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#6da2d6'
    } else if (hora <= 18) {
        // Boa Tarde!
        imagem.src = 'fototarde.png'
        document.body.style.background = '#daa152'
    } else {
        // Boa Noite!
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#040c0e'
    }
}