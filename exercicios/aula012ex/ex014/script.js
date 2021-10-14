function carregar() {
    var msg = window.document.getElementsByClassName('msg')[0]
    var imagem = window.document.getElementsByClassName('imagem')[0]
    var data = new Date()
    var hora = data.getHours()
    var minut = data.getMinutes()
    msg.innerHTML = `<div>Agora são exatamente ${hora} horas e ${minut} minutos.</div>`

    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#a5c4dc'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        imagem.src = 'fototarde.png'
        document.body.style.background = '#efae38'
    } else {
        // BOA NOITE!
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#020c0d'
    }
}
