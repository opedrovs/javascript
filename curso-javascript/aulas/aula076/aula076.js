// Herança

// Camiseta, caneta - O que tem em comum? Tem como eu abistrar isso, eu abistraio camiseta, caneta em uma coisa só e depois eu especializo o programa para que eu reutilizo o meu código. Mas o que Camiseta, caneca lápis representa dentro de um ecommerce? Produto:


// Produto -> aumento, desconto
// Camiseta = Cor, caneca = material
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco); // O que vamos herdar de Produto (os agumentos de Produto), isso é o que eu quero passar para a função Produto() sem ter que repetir
    this.cor = cor;
};

// Cada função construtora tem sua propriedade prototype, a gente não linkou os prototypes das duas funções, eu preciso fazer com que Camiseta inicialmente tenha o mesmo prototype que Produto, então preciso modificar o prototype apenas de Camiseta, não de Produto, se eu incluir ou alterar alguma coisa dentro de Camiseta, ele não afeta meu Produto

// Linkar Camiseta com Produto
Camiseta.prototype = Object.create(Produto.prototype);
// Colocar Camiseta como construtor, por conta que criei um objeto vazio e eu usei o prototype de Produto como prototype do objeto vazio e a propriedade constructor vai passar a ser Produto, para arrumar isso:
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}; // Sobreescrevemos o Produto.prototype.aumento

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco); // O que vamos herdar de Produto (os agumentos de Produto)
    this.material = material;
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;

            estoque = valor;
        }
    });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Gen', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
caneca.estoque = 100; // Setter

console.log(caneca.estoque); // Getter
console.log(caneca);
console.log(camiseta);
console.log(produto);
