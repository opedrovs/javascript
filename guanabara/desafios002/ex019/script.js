let res = window.document.getElementsByClassName('res')[0]
function iniciar() {
    res.innerHTML = `<h2>Calculando...</h2>`
    let pri = Number(window.prompt('Primeiro valor'))
    let seg = Number(window.prompt('Segundo valor:'))
    let calc = window.prompt(`Valores informados: ${pri} e ${seg}.
O que vamos fazer?
[1] Somar
[2] Subtrair
[3] Multíplicar
[4] Dividir`)
    
    if (calc == 1) {
        res.innerHTML += `<p>${pri} + ${seg} = <strong>${pri+seg}</strong></p>`
    } else if (calc == 2) {
        res.innerHTML += `<p>${pri} - ${seg} = <strong>${pri-seg}</strong></p>`
    } else if (calc == 3) {
        res.innerHTML += `<p>${pri} x ${seg} = <strong>${pri*seg}</strong></p>`
    } else if (calc == 4) {
        res.innerHTML += `<p>${pri} / ${seg} = <strong>${pri/seg}</strong></p>`
    } else {
        res.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${pri} e ${seg}, mas não sei o que fazer com eles.</p>`
    }
}