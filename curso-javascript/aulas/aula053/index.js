// Closures

// A variável nome está como valor real, eu não mudo esse valor, então o Clouser de função para função, não vai mudar

// Quando executa uma função em algum lugar, o Closure fecha o escopo, retornar a variável do jeito que foi definida, ela lembra do seu escopo léxico
/*
function retornaFuncao() {
    const nome = 'Luiz';
    return function() {
        return nome  
    };
}

const funcao = retornaFuncao();
console.dir(funcao());
*/


// Global
function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Luiz'); // Temos 2 closures, e o clouser pode ser alterado de função para função
const funcao2 = retornaFuncao('João');
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2())


// Closures - Quando declara função e não vai mais mudar o parâmetro, será sempre 'Luiz' ou 'João' nessa função 
// Resumo: Closure - Habilidade que a função tem em acessar seu escopo Léxico
