function clicar() {
    let velx = window.document.querySelector('input#txtvel')
    let vel = Number(velx.value)
    let res = window.document.getElementsByClassName('res')[0]

    res.innerHTML = `<p>A sua velocidade atual é de <strong>${vel} Km/h</strong>.</p>`
    if (vel > 60) {
        res.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade!</p>`
    }
    res.innerHTML += `<p>Sempre dirija com cinto de segurança!</p>`
}