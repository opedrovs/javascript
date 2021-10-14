function carregar() {
    let imagem = window.document.getElementsByClassName('imagem')[0]
    let horario = window.document.getElementsByClassName('horario')[0]
    let data = new Date()
    //let hora = data.getHours()
    let hora = 13
    let min = data.getMinutes()
    horario.innerHTML = `<p>Agora são exatamente ${hora} horas e ${min} minutos.</p>`
    if (hora >= 0 && hora < 12) {
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#6fbef6'
    } else if (hora >= 12 && hora <= 18) {
        imagem.src = 'fototarde.png'
        document.body.style.background = '#fec05b'
    } else {
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#131e36'
    }
}