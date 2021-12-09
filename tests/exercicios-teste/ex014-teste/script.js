function carregar() {
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let msg = window.document.getElementsByClassName('msg')[0]
    let imagem = window.document.getElementsByClassName('imagem')[0]
    msg.innerHTML = `<p>Agora são exatamente ${hora} horas e ${min} minutos.</p>`
    if (hora >= 0 && hora < 12) {
        // Boa Manhã
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#4b8acb'
    } else if (hora <= 18) {
        // Boa Tarde
        imagem.src = 'fototarde.png'
        document.body.style.background = '#d79d52'
    } else {
        // Boa Noite
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#04090c'
    }
}