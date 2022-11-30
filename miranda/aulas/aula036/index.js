// For in -> lê os índices ou chaves do objeto

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

// console.log(pessoa.nome);

// const chave = 'nome' // A variável chave iria de forma DINÂMICAMENTE para pessoa (acessar o nome)
// console.log(pessoa[chave]);

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
    // console.log(`${chaves} = ${pessoa[chaves]}`);
}

//                0       1       2
/*
const frutas = ['Pera', 'Maçã', 'Uva'];

for (let indice in frutas) {
    console.log(frutas[indice])
}
*/

/*
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
*/