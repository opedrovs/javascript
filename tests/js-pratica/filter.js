let produtos = [
    {nome: 'Coca Cola', preco: 8},
    {nome: 'Suco Laranja', preco: 6},
    {nome: 'Pizza', preco: 15},
    {nome: 'Saduíche', preco: 23},
    {nome: 'Kinder Ovo', preco: 35}
]

let produtosBaratos = produtos.filter(function(produto) {
    return produto.preco <= 25
})

console.log(produtosBaratos)