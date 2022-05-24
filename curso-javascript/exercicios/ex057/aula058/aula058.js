// Funções fábricas e construtoras são similares, a única diferença entre elas é que a função fábrica é uma função normal que faz ela retornar um objeto voluntariamente. Já na função construtora, ela faz muita coisa automaticamente para você, cria objeto, retorna objeto, a unica coisa que precisa fazer é criar ela.

// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new)

/*
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this;
    }
}
*/

function Pessoa(nome, sobrenome) {
    // Já está dando basicamente o corpo do objeto pronto para escrever

    // Atributos ou métodos privados
    // Caso eu preciso de atributos privados, exemplo: que sou vou precisar de um ID, e só vou precisar dele dentro da função, não preciso que ele esteja disponível fora
    const ID = 123456;
    const metodoInterno = function() {

    };

    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': Sou um método');
    };
}

// A palavra new, ela cria um novo objeto vazio, faz o this apontar para o objeto que está sendo utilizado e retorna implicitamente o objeto para a variável (então não precisa do return)
const p1 = new Pessoa('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');
p2.metodo();
