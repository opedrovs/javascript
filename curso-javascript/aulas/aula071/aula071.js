// defineProperty - defineProperties
// defineProperty - Define só uma
// defineProperties - Define várias de uma vez

// Sobre congelar um objeto para não poder alterar nada, quando fazia um freeze, mas imagine que queremos fazer em apenas 1 ou 2 objetos, e não em todas

// defineProperty
/*
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', { // estoque foi criado aqui
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true // configurável
    });

    Object.defineProperty(this, 'estoque', { // Podemos usar um método como valor
        enumerable: true, // mostra a chave
        value: function() {
            return estoque;
        }, // valor
        writable: true, // pode alterar
        configurable: true // configurável
    });

    Object.defineProperty(this, 'estoque', { // Reconfigurando
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: false // configurável
    });
}
*/

/*
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000;
// delete p1.estoque; // configurable como false não permite apagar e reconfigurar a variável
console.log(p1);
console.log(Object.keys(p1)); // Se enumerable estiver como false, não vamos ver a chave estoque

for (let chave in p1) {
    console.log(chave);
}
*/

// defineProperties


function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar (o valor)
        configurable: true // configurável
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: true, // pode alterar (o valor)
            configurable: true // configurável
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: true, // pode alterar (o valor)
            configurable: true // configurável
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for (let chave in p1) {
    console.log(chave);
}

