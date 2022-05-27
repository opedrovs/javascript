// Métodos para objetos

/*
Object.values - (similar ao Object.keys, ele pega apenas os valores)
Object.entries - (como Object.keys e Object.values, ele mostra os dois)
Object.assign(des, any) - (copiar objetos)
Object.getOwnPropertyDescriptor(o, 'prop') - (retornar as propriedades: writable, configurable, value, enumerable de alguma função)
... (spread)

// Já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)
*/

// const produto = { nome: 'Produto', preco: 1.8 };
/*
const caneca = {
    ...produto,
    material: 'porcelana' // Adicionando chave a mais em outra coisa
};
*/

// const caneca = Object.assign({}, produto, { material: 'porcelana' }); // Ele pega os objetos e manda para o primeiro objeto (nesse caso, um vazio)

// const caneca = { nome: produto.nome, preco: produto.preco }; // Pior forma possível

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca);

// Object.freeze(produto); // Não podemos alterar
// produto.nome = 'Outro nome';
// const caneca = { nome: produto.nome, preco: produto.preco };
// console.log(Object.keys(produto)); // Mostra as chaves

const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));
// console.log(Object.values(produto));
// console.log(Object.entries(produto));

/*
for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}
*/

for (let valor of Object.entries(produto)) {
    console.log(valor[0], valor[1]); // Não é muito comum, mas é possível
}
