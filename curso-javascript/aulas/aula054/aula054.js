// Funções de Callback

// Callback - Coisas que você chama quando alguma coisa terminar de ocorrer

// OBS: Esse setTimeout, estou simulando alguma coisa que demoraria na web, exemplo: Se estiver no servidor, clicar para logar em uma base de dados, ou conectar/baixar alguma coisa, e o rand para gerar um número aleatório que levaria nesse processo

/*
function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1() {
    setTimeout(function() {
        console.log('f1');
    }, rand());
}

function f2() {
    setTimeout(function() {
        console.log('f2');
    }, rand());
}

function f3() {
    setTimeout(function() {
        console.log('f3');
    }, rand());
}

// A ordem deveria ser f1, f2, f3 e por último o console.log('Olá mundo!'), como trabalhamos na web, precisamos as vezes conectar na base de dados, buscar recursos da base de dados, exibir alguma coisa na tela, buscar recursos de API, carregar um arquivo JSON, na internet precisamos fazer coisas que não tem como controlar quanto tempo elas vão demorar, exemplo como quanto tempo o JS vai levar para ir na base de dados e retornar

f1();
f2();
f3();
console.log('Olá mundo!');
*/

// Fazer os comandos serem executadas na ordem certa

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function() { // essa função anônima dentro do setTimeout é uma função de callback 
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());
}

// Sendo executado em ordem

/*
f1(function() {
    // f2 só é executado se f1 for executado.
    f2(function() {
            // f3 só é executado se f2 for executado.
        f3(function() {
            console.log('Olá mundo!');
        });
    });
});
*/

// Melhorando o código acima

f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo!');
}