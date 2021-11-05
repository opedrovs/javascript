function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.getElementById('txtano')
    let res = window.document.getElementsByClassName('res')[0]
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = window.document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                imagem.setAttribute('src', 'imagens/foto-bebe-m.png')
            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', 'imagens/foto-adulto-m.png')
            } else {
                // Idoso
                imagem.setAttribute('src', 'imagens/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                imagem.setAttribute('src', 'imagens/foto-bebe-f.png')
            } else if (idade < 21) {
                // Jovem
                imagem.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 50) {
                // Adulto
                imagem.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else {
                // idoso
                imagem.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
        res.style.textAlign = 'center'
        res.appendChild(imagem)
    }
}