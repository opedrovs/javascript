// Filter
// Filter -> Sempre retornar um array, com a mesma quantidade de elementos ou menos.

// Filter basicamente filtra nosso array, no qual atualmente estamos utilizamos ele para filtrar números maiores que 10.

/*
Minha solução
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const numMaiorDez = [];
for (let valor of numeros) {
    if (valor > 10) {
        numMaiorDez.push(valor);
    }
}
console.log(numMaiorDez);
*/

// Filter, map, reduce

// O filter não modifica minha array original, então criamos uma para conter os valores

// Retorne os números maiores que 10
//               0  1   2   3  4  ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// function callbackFilter(valor) { // Só de passar essa função callback para filter, ele recebe automaticamente os valores nos parâmetros (que são: valor, índice, array completo)
//     return valor > 10;
// }
// const numerosFiltrados = numeros.filter(callbackFilter); // O método filter ele tem uma função de callback(vai 1 por 1 de cada elemento do array)

// --- Se for utilizar essa função callbackFilter em outro local do código, é interessante criar ela fora do filter, caso contrário, crie uma função anônima---

const numerosFiltrados = numeros.filter(valor => valor > 10);
// console.log(numerosFiltrados);

// Para cada elemento:
// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];
// const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
// console.log(pessoasComNomeGrande);

// const pessoasAcimaCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
// console.log(pessoasAcimaCinquentaAnos);

// const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().slice(-1) === 'a');
// console.log(nomeTerminaComA);

const nomeTerminaComA = pessoas.filter(obj => {
    return obj.nome.toLocaleLowerCase().endsWith('a');
});
console.log(nomeTerminaComA);
