// IEEE 754-2008

// Melhor maneira
let num1 = 0.7; // number
let num2 = 0.1; // number

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0

// Utilizando apenas o toFixed() não nos retorna o valor correto da variável (Exemp: 0.7 + 0.1 = 0.79999...), mas utilizando o num = parseFloat(num.toFixed(2)) ou num = Number(num.toFixed(2)) nos retorna o valor 0.8 (valor correto)

num1 = Number(num1.toFixed(2));

console.log(num1);
console.log(Number.isInteger(num1));


// Método mais Difícil
/*
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100; // 1.0

console.log(num1);
console.log(Number.isInteger(num1));

// let num1 = 10.3531; // number
// let num2 = 2.5; // number*/

// console.log(num1.toString() + num2); // Isso não transforma num1 de fato uma string, e sim em uma string temporária
// num1 = num1.toString(); // Isso altera de forma permanente a variável para um string
// console.log(typeof num1);

// console.log(num1.toString(2)); // Colocando número 2 dentro do toString temos a representação binária do valor da variável
// console.log(num1.toFixed(2)); // colocamos como 2 casas decimais
// o toFixed() não muda diretamente o valor da variável, apenas de forma visual.
// console.log(Number.isInteger(num1)); // Isso retorna se o valor é inteiro ou não (true ou false)

// let temp = num1 * 'Olá';
// console.log(Number.isNaN(temp)); // Ele manda true toda vez que a conta é inválida, e true quando a conta é válida