function carregar() {
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let msg = window.document.querySelector('div.msg')
    let imagem = window.document.getElementsByClassName('imagem')[0]
    msg.innerHTML = `<p>Agora são exatamente ${hora} horas e ${min} minutos</p>`
    if (hora >= 0 && hora < 12) {
        // Boa Manhã
        document.body.style.background = '#4a89cc'
        imagem.src = 'fotomanha.png'
    } else if (hora <= 18) {
        // Boa Tarde
        document.body.style.background = '#f5b45a'
        imagem.src = 'fototarde.png'
    } else {
        // Boa Noite
        document.body.style.background = '#050f11'
        imagem.src = 'fotonoite.png'
    }
}