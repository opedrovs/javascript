let res = window.document.getElementById('res')
function iniciar() {
    let anonasc = Number(window.prompt('Em que ano você nasceu?'))
    let data = new Date()
    let ano = data.getFullYear()
    let idade = ano - anonasc

    res.innerHTML = `<p>Quem nasceu em ${anonasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`
}