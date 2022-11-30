// Não são todas as funções que retornam valores
/*
function saudacao(nome) {
    return `Bom dia ${nome}!`;
}

const variavel = saudacao('Luiz');
console.log(variavel);*/

// Caso não tenha nenhum valor em x ou y, ele receberá o valor 1 (por isso: x = 1, y = 1).
/*
function soma(x = 1, y = 1) {
    const resultado = x + y;
    return resultado; // Tudo que está abaixo de return não é mais executado, é o nosso flag
}
// Eu não posso modificar e nem pegar nada de dentro da função (isso chamamos de escopo)
const resultado = soma(4, 2);
console.log(resultado);
*/

// A variável raiz é igual a uma função anônima
/*const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));*/

// Arrow Function
const raiz = n => n ** 0.5;

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));
