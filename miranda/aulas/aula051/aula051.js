// RETORNO DAS FUNÇṌES

// return
// Retorna um valor
// Termina a função
/*
function soma(a, b) {
    return a + b; // return retorna o resultado
}

// A diferença entre

function soma2(a, b) {
    console.log(a + b); // console.log apenas exibe no console, não retorna nada (mas pode ser útil)
}
soma2(5, 2);
*/


// Exemplo de função que não retorna nada, mas que faz alguma coisa útil
/*document.addEventListener('click', function() {
    document.body.style.backgroundColor = 'red';
});*/

/*
function criaPessoa(nome, sobrenome) {
    // return { nome: nome, sobrenome: sobrenome };
    return { nome, sobrenome };
    // Esse nome e sobrenome são as chaves do objeto 
}

const p1 = criaPessoa('Luiz', 'Otávio');

// O p1 é exatamente igual ao p2, mas a diferença é que no p1 tem a função que faz esse trabalho para mim

const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
};

console.log(typeof p1);
console.log(typeof p2);
*/

/*function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'))*/
// A função falaResto veio para a variável olaMundo, pois eu retornei ela, o que significa que olaMundo é uma função, então para eu executa-la eu chamo os parenteses, a função falaResto também recebe um parâmetro (resto), se eu colocar em olaMundo('Mundo!'), iremos ver "Olá mundo!"

/*
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');
console.log(resto);
*/

// --------- '' ------ '' -------------

// Exemplo de código onde isso acima seria útil
/*
function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}
*/

// Simplificando

function criaMultiplicador(multiplicador) {
    // multiplicador
    /*
    function multiplicacao(n) {
        return n * multiplicador;
    }
    return multiplicacao;
    */
   
    // Retornando direto
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));