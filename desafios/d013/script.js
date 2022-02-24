let res = window.document.getElementsByClassName('res')[0]
function entrarnotas() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let pri = Number(window.prompt(`Primeira nota de ${nome}:`))
    let seg = Number(window.prompt(`Segunda nota de ${nome}:`))
    
    res.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`

    /*
    Média:            Situação:
    Abaixo de 3,0     / REPROVADO
    Entre 3,0 e 6,0   / RECUPERAÇÃO
    Acima de 6,0     / APROVADO
    */

    let media = (pri + seg) / 2
    res.innerHTML += `<p>Com as notas ${pri} e ${seg}, <strong>a média é ${media}</strong></p>`

    if (media > 6) {

        // APROVADO
        res.innerHTML += `<p>Com média acima de 6,0, o aluno está <span class="aprov">APROVADO</span></p>`
    } else if (media >= 3) {

        // RECUPERAÇÃO
        res.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <span class="recup">RECUPERAÇÃO</span></p>`
    } else if (media < 3) {
        
        // REPROVADO
        res.innerHTML += `<p>Com média abaixo de 3,0, o aluno está <span class="reprov">REPROVADO</span></p>`
    }
} 