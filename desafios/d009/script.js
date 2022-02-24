let res = window.document.getElementsByClassName('res')[0]
function reajuste() {
    let nome = window.prompt('Qual o nome do funcionário?')
    let salario = Number(window.prompt(`Qual é o salário de ${nome}?`))
    let porcentagem = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let aumento = (porcentagem * salario) / 100
    let novoSalario = aumento + salario
    
    res.innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`
    
    res.innerHTML += `<p>O salário atual era ${salario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
    
    res.innerHTML += `<p>Com um aumento de ${porcentagem}%, o salário vai aumentar ${aumento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no próximo mês.</p>`
    
    res.innerHTML += `<p>E a partir daí, ${nome} vai passar a ganhar ${novoSalario.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
}