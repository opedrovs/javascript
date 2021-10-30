function verificar() {
    var tvel = window.document.getElementById('txtvel')
    var vel = Number(tvel.value)
    var res = window.document.querySelector('div.res')
    res.innerHTML = `<p>A sua velocidade é de <strong>${vel} Km/h</strong>!</p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade!</p>`
    }
    res.innerHTML += `<p>Sempre dirija com cinto de segurança!</p>`
}