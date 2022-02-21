let produtos = [
    {nome: 'Pizza', preco: 15},
    {nome: 'Hambúrguer', preco: 18},
    {nome: 'Coca-Cola', preco: 8},
    {nome: 'Kinder Ovo', preco: 85}
];

let produtosBaratos = produtos.filter(function(produto) {
    return produto.preco <= 20
})

console.log(produtosBaratos)