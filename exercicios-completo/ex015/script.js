let res = window.document.getElementsByClassName('res')[0]
function analise() {
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()
    let sem = data.getDay()
    let hora = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()

    switch(sem) {
        case 0:
            sem = 'Dom'
            break
        case 1:
            sem = 'Seg'
            break
        case 2:
            sem = 'Ter'
            break
        case 3:
            sem = 'Qua'
            break
        case 4:
            sem = 'Qui'
            break
        case 5:
            sem = 'Sex'
            break
        case 6:
            sem = 'Sáb'
            break
        default:
            sem = '[ERRO] Mês inválido.'
            break
    }

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

    res.innerHTML = `<p>Dia: <span class="destaque">${dia}</span></p>`
    res.innerHTML += `<p>Mês: <span class="destaque">${mes}</span></p>`
    res.innerHTML += `<p>Ano: <span class="destaque">${ano}</span></p>`
    res.innerHTML += `<p>Dia da semana: <span class="destaque">${sem}</span></p>`
    res.innerHTML += `<p>Hora: <span class="destaque">${hora}</span></p>`
    res.innerHTML += `<p>Minutos: <span class="destaque">${min}</span></p>`
    res.innerHTML += `<p>Segundos: <span class="destaque">${seg}</span></p>`
}