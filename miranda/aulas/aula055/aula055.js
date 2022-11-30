// Funções imediatas (IIFE)
// IIFE -> Immediately invoked function expression


/*
function qualquerCoisa() {
    console.log(13234354);
}
qualquerCoisa();
*/
// Para evitar o escopo global, fazemos isso acima, mas precisou dar um nome, e a função qualquerCoisa toca o escopo global

// O que vamos aprender no IIFE, a função não vai ter nome ou seja, não vai ter como tocar o escopo global, mas para invoca-lá automaticamente 

/*
(function() {
    const nome = 'Luiz';
    console.log(nome);
})();
// Nada disso que está aqui dentro, toca o escopo global
const nome = 'Qualquer coisa';
console.log(nome);
*/

(function(idade, peso, altura) { // Parâmetros

    const sobrenome = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.80); // Idade, Peso, Altura
