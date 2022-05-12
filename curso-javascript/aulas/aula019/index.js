/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/


// Primitivos


// Imagina uma variável como uma caixa, no primeiro momento um adesivo "Luiz" e colocou dentro da caixa, no segundo momento tira o adesivo "Luiz" e coloca "Otávio". Mas NÃO ALTEROU o valor do adesivo Luiz, apenas trocou
/*
let nome = 'Luiz';
nome = 'Otávio';
console.log(nome);*/

// Mostrando que são imutáveis
//          0123
/*
let nome = 'Luiz';
nome[0] = 'R';
console.log(nome[0], nome);
*/


/*
let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);
*/


// Referência


// Nesse caso, se utilizar o sinal de igual, não está fazendo uma cópia e sim, a variável que recebe apontar para o mesmo local que a outra variável aponta.

/*
let a = [1, 2, 3];
let b = [...a]; // Cópiar valor de A
let c = b; // Aponta para o mesmo lugar na memória que A

console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Luiz')
console.log(a, c);
*/


// Utilizando cópia:

/*
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = {...a}; // Cópiar valor de A

a.nome = 'João';
console.log(a);
console.log(b);
*/


// Não utilizando cópia

/*
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};
const b = a;

a.nome = 'João';
console.log(a);
console.log(b);
*/
