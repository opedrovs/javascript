let res = window.document.querySelector('div.res')
function verificar() {
    let anterior = Number(window.prompt('Qual era o preço anterior do produto?'))
    let atual = Number(window.prompt('Qual é o preço atual do produto?'))
    res.innerHTML = `<h2>Analisando os valores informados</h2>`

    if (anterior < atual) {
        // Anterior MENOR Atual
        let subiu = atual - anterior
        let subiuporcen = (subiu / anterior) * 100
        res.innerHTML += `<p>O produto custava ${anterior.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${atual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
        res.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        res.innerHTML += `<p>O preço subiu ${subiu.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${subiuporcen.toFixed(1)}% pra cima.</p>`

    } else if (anterior > atual) {
        // Anterior MAIOR Atual
        let caiu = anterior - atual
        let caiuporcen = (caiu / atual) * 100
        res.innerHTML += `<p>O produto custava ${anterior.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} e agora custa ${atual.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
        res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
        res.innerHTML += `<p>O preço caiu ${caiu.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.</p>`
        res.innerHTML += `<p>Uma variação de ${caiuporcen.toFixed(2)}% pra baixo.</p>`
    }
}