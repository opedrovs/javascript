//               0123456789
let umaString = "O rato roeu a roupa do rei de roma.";

console.log(umaString.toUpperCase()); // Maiúsculas
console.log(umaString.toLowerCase()); // Minúsculas

// console.log(umaString.split(' ', 3)); // Dividir a string baseado em um caractere qualquer.

// console.log(umaString.substring(umaString.length - 5, umaString.length - 1)); // slice faz a mesma coisa que substring, mas com menos código
// console.log(umaString.slice(-5, -1)); // Versão resumida da de baixo
// console.log(umaString.slice(umaString.length - 5, umaString.length - 1));

// console.log(umaString.slice(2, 6)); // Fatiar a palavra "rato".

// console.log(umaString.length); // Descobrir tamanho da string

// console.log(umaString.replace(/r/g, '#'));

// console.log(umaString.replace(/Um/, 'Outra')); // A mesma coisa mas usando expressões regulares
// console.log(umaString.replace('Um', 'Outra')); // Substitui a palavra "Um" por "Outra".

// console.log(umaString.search(/x/)) // Procura pela letra x

// console.log(umaString.match(/[a-z]/g)) // Expressões regulares, estudar

// console.log(umaString.lastIndexOf('m', 3)) // Começa da posição 3, procura de trás para frente
// console.log(umaString.indexOf('o', 3)) // Começa da posição 3, procura de frente para trás

/*console.log(umaString.concat(' em um lindo dia.'));
console.log(umaString + ' em um lindo dia.')
console.log(`${umaString} em um lindo dia.`) // Forma preferida*/

/*let umaString = "Um \\\"texto\"";
console.log(umaString);*/