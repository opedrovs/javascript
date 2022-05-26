// Reduce - Reduzindo o array
// Reduce é muito utilizado para reduzir a um único elemento, ex: uma lista de números onde quer saber o total, utilizo reduce pois reduzo meu array a um valor apenas que é o total da soma de todos os elementos

// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

//               0  1   2   3  4  ...
/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array) {
    // Diferente do filter e map, ele possui um acumulador, na qual sempre inicia com zero, e é preciso sempre retornar ele.
    acumulador += valor;
    // console.log(acumulador, valor);
    return acumulador;
}, 0); // Valor inicial do acumulador, é opcional, ele pega o primeiro valor do array caso não defina
*/

/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
    if(valor % 8 === 0) acumulador.push(valor);
    return acumulador;
}, []); // Iniciando com array
*/

/*
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
*/

// Só somar os PARES
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
    if(valor % 2 === 0) {
        acumulador += valor;
    }
    return acumulador
}, 0);
// console.log(total);

// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 }, // Acumulador
    { nome: 'Maria', idade: 23 }, // Valor
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
];
const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);

// É possível fazer Map e Filter com Reduce, mas não é o ideal
