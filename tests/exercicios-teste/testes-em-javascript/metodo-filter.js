let produtos = [
    {nome: 'Vinho', preco: 50},
    {nome: 'Coca Cola', preco: 10},
    {nome: 'Suco Laranja', preco: 5},
    {nome: 'Pizza', preco: 23},
    {nome: 'X-Burguer', preco: 30},
    {nome: 'Espeto-Carne', preco: 12},
    {nome: 'Sorvete', preco: 8}
]

let produtosBaratos = produtos.filter(function(produto) {
    return produto.preco < 20
})

console.log(produtosBaratos)