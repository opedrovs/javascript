function carregar() {
    let horario = window.document.getElementById('horario')
    let data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let seg = data.getSeconds()

    horario.innerHTML = `<h1>${hora} : ${min} : ${seg}</h1>` 
}