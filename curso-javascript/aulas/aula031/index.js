const verdadeira = true;

// Let tem escopo de bloco { ... bloco }
// Var só tem escopo de função

/*
let nome = 'Luiz'; // criando
var nome2 = 'Luiz'; // criando

if (verdadeira) {
    let nome = 'Otávio'; // criando
    var nome2 = 'Rogério'; // redeclarando

    if (verdadeira) {
        var nome2 = 'Ronaldo'; // redeclarando
        let nome = 'Outra coisa'; // criando
    }
}

console.log(nome, nome2)
*/

// -------------- // ------- // ---------------


// Var respeita apenas a Function, mas não respeita os outros blocos dentro, como if, else if, entre outros.
/* 
function falaOi () {
    if (verdadeira) {
        var sobrenome = 'Miranda';
    }
    console.log(sobrenome);
}

falaOi();
*/


// MOSTRAR VARIÁVEL ANTES DE DECLARA-LÁ # Aula 014, parte 03


// Com VAR
/*
console.log(sobrenome) // undefined

var sobrenome = 'Miranda';
*/
// Quando cria variáveis com var, ele faz um negócio chamado elevação, ele eleva a declaração de variáveis (Ele vai ler seu código e detectar todos os locais onde está criando a variável e vai pegar e declarar no topo do arquivo "var sobrenome;" e quando você setar, ele vai configurar o valor dela.)


// Com LET

// console.log(sobrenome);
// let sobrenome = 'Miranda';


// O mesmo acontece com funções.

// const func = function () { // Com isso não ocorre a elevação
// }

// function nomeFuncao () { // Com isso ocorre a elevação  
// }
