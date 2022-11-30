let res = window.document.querySelector('div.res')
function horarios() {
    let data = new Date()
    let ano = data.getFullYear()
    let mes = data.getMonth()
    let dia = data.getDate()
    let hora = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()

    switch(mes) {
        case 0:
            mes = 'Jan'
            break
        case 1:
            mes = 'Fev'
            break
        case 2:
            mes = 'Mar'
            break
        case 3:
            mes = 'Abr'
            break
        case 4:
            mes = 'Maio'
            break
        case 5:
            mes = 'Jun'
            break
        case 6:
            mes = 'Jul'
            break
        case 7:
            mes = 'Ago'
            break
        case 8:
            mes = 'Set'
            break
        case 9:
            mes = 'Out'
            break
        case 10:
            mes = 'Nov'
            break
        case 11:
            mes = 'Dez'
            break
        default:
            mes = '[ERRO] Mês inválido!'
            break
    }

    //  Mês / dia / ano / hora:minuto:segundo / (Horário Padrão de Brasília)
    res.innerHTML = `<p>O que eu recebi do sistema foi <span class="destaque">${mes} ${dia} ${ano} ${hora}:${min}:${seg} (Horário Padrão de Brasília)</span></p>`
}