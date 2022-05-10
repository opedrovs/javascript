// Diferenças entre VAR e LET

/*
// Redeclara variável, e isso não é bom para o sistema
var nome = 'Luiz';
var nome = 'Otávio';
*/
/*
let nome = 'Luiz';
nome = 'Otávio';

// nome = 'Luiz'; // NÃO FAÇA ISSO, isso cria uma variável global e pode afetar outras variáveis do sistema

console.log(nome);*/



// TIPOS PRIMITIVOS DE DADOS

// String, number, undefined, null, boolean, symbol
const nome = 'Luiz'; // string
const nome1 = "Luiz"; // string
const nome2 = `Luiz`; // string
const num1 = 10; // number
const num2 = 10.52; // number
let nomeAluno; // undefined -> não aponta para local nenhuma na memória
const sobrenomeAluno = null; // Nulo -> não aponta para local nenhuma na memória
// Existe diferença entre null e undefined, null é quando você explicita vai querer que essa variável não aponte para nenhum lugar na memória.
const aprovado = true; // Boolean = true ou false (lógico)
// você pode usar isso para ver aluno está aprovado ou não, ex: "const aprovado = true;" ou const "aprovado = false;"
// Os valores boolean são lógicos ou seja, quer mudar o fluxo da aplicação, fazer um desvio condicional

// console.log(typeof aprovado, aprovado);


// O valor A vale 2, o valor B é uma cópia de A, mas ele tem uma conexão, se ele tiver o valor alterado, o valor de A também é alterado. Agora se o valor de A é alterado, o valor de B não é alterado.

let a = 2
let b = a;
console.log(a, b) // 2, 2

a = 3;
console.log(a, b) // 3, 2

/*
let a = [1, 2];
let b = a;
console.log(a, b);
b.push(3)
console.log(a, b)
*/
