// For clássico - Geralmente interáveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

//            0123...
/*
const nomes = ['Luiz', 'Otávio', 'Henrique']


for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('-=-=-=-=-')

for (let i in nomes) {
    console.log(nomes[i]);
}

console.log('-=-=-=-=-')

for (let valor of nomes) {
    console.log(valor)
}

console.log('-=-=-=-=-')

nomes.forEach(function(valor, indice, array) {
    console.log(valor,indice, array);
});
*/

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

/*
for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}
*/

for (let valor of pessoa) { // Vai dar erro, pois objeto pessoa não é iterável, como string, array (que possuem índices)
    console.log(valor)
}