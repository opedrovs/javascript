function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementsByClassName('imagem')[0]
    msg.innerHTML = `<p>Agora são exatamente ${hora} horas e ${min} minutos</p>`
    if (hora >= 0 && hora < 12) {
        // Boa Manhã!
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#518ecf'
    } else if (hora <= 18) {
        // Boa Tarde!
        imagem.src = 'fototarde.png'
        document.body.style.background = '#e6a54b'
    } else {
        // Boa Noite!
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#061113'
    }
}