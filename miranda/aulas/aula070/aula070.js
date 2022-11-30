// Criando objeto de modo literal
/*
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);

// Em muitos casos é interessante usar a forma de colchetes do que de ponto, pois podemos colocar um valor dinâmico (como se a chave fosse vir de algum banco de dados)
const chave = 'nome';
console.log(pessoa[chave]);
console.log(pessoa['sobrenome']);
*/

// Ao invés de usar o modo literal, podemos usar o construtor do objeto

/*
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;
pessoa1.falaNome = function() {
    return (`${this.nome} está falando seu nome.`);
    // this -> pessoa1
};
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade; 
};

// delete pessoa1.nome; // Apagar chave do objeto

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
    // Funções dentro de objetos, chamamos de método
}
*/

// Factory functions
/*
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,
        get nomeCompleto() {
            return `${nome} ${sobrenome}`;
        }
    };
}
const p1 = criaPessoa('Luiz', 'Otávio');
console.log(p1.nomeCompleto);
*/

// Constructor functions
function Pessoa(nome, sobrenome) {
    // this -> p1 / this -> p2 - OU seja, ele varia de acordo com quem cria
    this.nome = nome;
    this.sobrenome = sobrenome;

    Object.freeze(this); // Nenhum objeto feito nessa função pode ser alterado, e pode ser perigoso, depende do que você quer fazer

    // Nós temas 2 variáveis criando o objeto Pessoa, por isso this varia, por esse motivo não utilizamos p1 ou p2, pois ele vai variar de acordo com quem está criando
}

// New - O que new faz é criar um novo objeto e atrelar o this a esse objeto, e a função vai retornar o this 
const p1 = new Pessoa('Luiz', 'Miranda');

// Object.freeze(p1); // Travar um objeto/array, fazendo com que ele não possa ser alterado

p1.nome = 'Outra coisa'; // EU não estou alterando o valor da variável em sí, estou alterando o valor do valor da variável
p1.sobrenome = 'QLQ';
// p1.fala = function() { console.log('Oi'); };
// p1.fala();

delete p1.nome;

const p2 = new Pessoa('Maria', 'Miranda');
console.log(p1);
console.log(p2);
