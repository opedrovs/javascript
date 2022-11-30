// Classes

// Classe é a mesma coisa da Função construtora, mas só é um modo diferente de escrever uma função construtora

class Pessoa {
    // Esse método pode não existir se não precisar dele, mas se precisar passar parâmetros para a classe, usamos o método constructor
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    // Métodos, nesse caso não tem a complexidade de criar um prototype, atrelar o método ao prototype, nesse caso, ela faz isso AUTOMATICAMENTE
    falar() {
        console.log(`${this.nome} está falando.`);
    }
}

// COMPARANDO COM FUNÇÃO CONSTRUTORA

function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function() {
    console.log(`${this.nome} está falando.`)
}

const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa2('Luiz', 'Miranda');
console.log(p1);
console.log(p2);
