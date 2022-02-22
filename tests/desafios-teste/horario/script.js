function carregar() {
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let msg = window.document.getElementById('msg')
    let imagem = window.document.querySelector('img#imagem')
    msg.innerHTML = `<p>Agora são exatamente ${hora} horas e ${min} minutos.</p>`
    if (hora >= 0 && hora <= 12) {
        // Boa Manhã
        imagem.src = 'fotomanha.png'
        document.body.style.backgroundColor = '#689fd5'
    } else if (hora <= 18) {
        // Boa Tarde
        imagem.src = 'fototarde.png'
        document.body.style.backgroundColor = '#ce954a'
    } else {
        // Boa Noite
        imagem.src = 'fotonoite.png'
        document.body.style.backgroundColor = '#020a0c'
    }
}