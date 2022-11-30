// Manipulando Prototypes

/*
// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
    // __proto__: objA
}

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA); // Configurar o prototype
// Configurar prototype de quem?      =  objB
// Quem vai ser o prototype de objB?  =  objA
Object.setPrototypeOf(objC, objB);

// Agora, mesmo eu não tendo essa chaveA em objB, eu posso acessar ela pelo objB
// console.log(objB.chaveA);
console.log(objC.chaveC);
*/

// Object.getPrototypeOf(objA)

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;

    // Não vamos criar métodos aqui, pois agora temos o prototype do Produto para isso, não é muito perfomático isso, é melhor colocar métodos fora da sua função construtora
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);

// Literal
const p2 = {
    nome: 'Caneca',
    preco: 15 // Aqui o preço precisa bater com as das funções
}
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(15);
// console.log(p1);
// console.log(p2);

// const p3 = Object.create(Object.prototype); // Object.create pode receber o objeto literal (Object.prototype), eu tenho um objeto normal
// console.log(p3);

// Nós podemos criar um objeto e já setar o prototype dele de cara

// const p3 = Object.create(Produto.prototype);
// p3.preco = 113;
// p3.aumento(10);
// console.log(p3);

const p3 = Object.create(Produto.prototype, {
    // Criando objeto, setando prototype (o pai do objeto que estamos criando), as chaves e seus configurações
    // Essas chaves é opcional
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    }
});
p3.aumento(10);
console.log(p3);

