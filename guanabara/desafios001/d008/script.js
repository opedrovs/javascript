let res = window.document.querySelector('div.res')
function calcdesconto() {
    let produto = window.prompt('Qual é o produto que você está comprando?')
    let preco = Number(window.prompt(`Qual é o preço de ${produto}?`))
    let desconto = (10 * preco) / 100
    let precoDesconto = preco - desconto

    res.innerHTML = `<h2>Calculando desconto de 10% para ${produto}</h2>`
    res.innerHTML += `<p>O preço original era ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar ${desconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} de desconto (-10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar ${precoDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} no produto ${produto}.</p>`
}