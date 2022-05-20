// Declaração de função (Function hoisting)

// Function hoisting - Ocorre quando declaramos do jeito que está abaixo, o hoisting faz com que a engine do JavaScript elevar as declarações de funções e variáveis declaradas como var, para o topo do JavaScript, podendo chamar a função antes e depois de declara-lá.

falaOi();

function falaOi() {
    console.log('Oie');
}


// ------ '' ------- '' ------


// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() { // Constante (variável) recebe uma função como dado
    console.log('Sou um dado.');
};
souUmDado(); // Executar essa variável como uma função normal

/*
function executarFuncao(funcao) { // Jogando a variável souUmDado como parâmetro da função, e executar a função souUmDado com a função executarFuncao() 
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executarFuncao(souUmDado);
*/

// Basicamente estamos passando uma função para outra função, e ela executa como um dado normalmente. Por isso o JavaScript é um objeto de primeira classe(first-class objects), na qual podemos tratar função como um dado naturalmente, passar ela para outra função, retornar, etc...


// ------ '' ------- '' ------


// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();


// ------ '' ------- '' ------


// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar(); // Jogar uma função como método de um objeto
