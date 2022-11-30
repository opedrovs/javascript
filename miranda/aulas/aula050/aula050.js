/*
function funcao() {
    // Aonde foram esses parâmetros? Quando defininimos a função com a palavra function (apenas a palavra function, não funciona isso para arrow function), seja desse jeito ou uma function expression, temos disponível a variável "arguments", que é tudo que enviamos, inclusive pegar seus índices
    console.log(arguments[10])
}
funcao('Valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Luiz'); // Parâmetros são opcionais, e pode enviar quantos quiser
*/

// Arguments que sustenta todos os argumentos enviados
/*
function funcao() { // Conseguimos ter a soma total de todos os argumentos mesmo não tendo nenhum parâmetro aqui
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1, 2, 3, 4, 5, 6, 7);
*/

/*
function funcao(a, b, c) { // Mesmo colocando os parâmetros a, b e c que recebem os valores 1, 2 e 3, continuam na variável arguments, mas tem a possibilidade de ver os valores de a, b e c
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total, a, b, c);
}
funcao(1, 2, 3, 4, 5, 6, 7);
*/

// Valores opcionais

/*
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2, undefined, 20); // A única maneira de fazer b assumir seu valor padrão é colocando "undefined", então assumindo o valor de 2. Não é muito legal utilizar essa lógica
*/

// Atribuição via desestruturação
/*
function funcao({ nome, sobrenome, idade }) { // Aqui nos parâmetros estamos fazendo a desestruturação e retirando as variáveis nome, sobrenome, idade dessa chave do objeto
    console.log(nome, sobrenome, idade);
}
let obj = { nome: 'Luiz', sobrenome: 'Otávio', idade: 20 };
funcao(obj); // Enviando objeto literal como argumento da minha função
*/

// Também podemos fazer desestruturação com arrays
/*
function funcao([valor1, valor2, valor3]) {
    console.log(valor1, valor2, valor3);
}

funcao(['Luiz Otávio', 'Miranda', 30]);
*/

/*
const conta = function(operador, acumulador, ...numeros) { // O rest operator sempre deve ser o último parâmetro de sua função, pois ele é o resto
    // console.log(operador, acumulador, numeros);
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
};
conta('-', 0, 20, 30, 40, 50);
// Utilizamos nos numeros o Rest Operator, ou seja, todo o resto depois de operador('+') e acumulador(0), o resto estará dentro de um array(20, 30, 40, 50) 
*/

/*
const conta = function(operador, acumulador, ...numeros) {
    console.log(arguments);
};
conta('+', 1, 20, 30, 40, 50);
*/

/*
const conta = (operador, acumulador, ...numeros) => {
    console.log(operador, acumulador, numeros);
};
conta('+', 1, 20, 30, 40, 50);
// A única verdadeira diferença entre arrow function e função normal, a palavra this vai modificar um pouco, a arrow function é bem mais curta
*/

const conta = (...args) => { // Rest operator funciona em qualquer tipo de função, sempre que precisar enviar parâmetros inderterminados para uma função, que poderia receber, 10, 20, 30, 40 números, use REST Operator.
    console.log(args);
};
conta('+', 1, 20, 30, 40, 50);
