function carregar() {
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let msg = window.document.querySelector('div.msg')
    msg.innerHTML = `<p>Agora são exatamente ${hora} horas e ${min} minutos.</p>`
    let imagem = window.document.getElementsByClassName('imagem')[0]

    if (hora >= 0 && hora < 12) {
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#508dce'
    } else if (hora <= 18) {
        imagem.src = 'fototarde.png'
        document.body.style.background = '#dd9f4c'
    } else {
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#05090c'
    }
}