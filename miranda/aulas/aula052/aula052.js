// Escopo Léxico

/*
const nome = 'Luiz';

function falaNome() {
    const nome = 'Otávio';
    console.log(nome);
}

function usaFalaNome() {
    falaNome();
}
usaFalaNome();
*/

// Isso é o escopo léxico, a função conhece o local onde foi declarada, tudo que está declarado dentro dela e os vizinhos, quando eu falo vizinhos, é uma bolha, se você busca uma variável (como no meu caso, busco nome dentro da função), e não estiver dentro da função, ele vai buscar no pai dela, se não achar, vai no pai do pai dela, até chegar no escopo global, se não encontrar até o escopo global ele vai dar erro que a variável não está definida.

/*
const nome = 'Luiz';

function falaNome() {
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otávio';
    falaNome();
}
usaFalaNome();
*/

// Meu ambiente testes
const nome = 'Luiz';

function falaNome() {
    const nome = 'Otávio';
    function dentroFalaNome() {
        console.log(nome);
    }
    dentroFalaNome();
}

function usaFalaNome() {
    falaNome();
}
usaFalaNome();
