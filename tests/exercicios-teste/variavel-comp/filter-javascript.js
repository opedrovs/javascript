let produtos = [
    {nome: 'Coca Cola', preco: 5},
    {nome: 'Pizza', preco: 15},
    {nome: 'Kinder Ovo', preco: 99},
    {nome: 'Sorvete', preco: 25},
]

let produtosBaratos = produtos.filter(function(produto) {
    return produto.preco < 20
})

console.log(produtosBaratos)