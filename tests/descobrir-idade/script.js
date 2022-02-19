function descobrir() {
    let data = new Date()
    let ano = data.getFullYear()
    let anonasc = window.document.getElementById('anonasc')
    let res = window.document.getElementsByClassName('res')[0]

    if (anonasc.value > ano) {
        // ERRO: Ano nascimento maior que o ano atual
        window.alert(`[ERRO] O ano de nascimento está maior que o ano atual!`)
    } else if (anonasc.value.length == 0) {
        // ERRO: Nenhum valor digitado
        window.alert('[ERRO] Digite seu ano de nascimento!')
    } else {
        // Calculo
        let nasc = Number(anonasc.value)
        let idade = ano - nasc

        res.innerHTML = `<h2>Quem nasceu em ${nasc} vai completar ${idade} anos em ${ano}</h2>`
    }
}