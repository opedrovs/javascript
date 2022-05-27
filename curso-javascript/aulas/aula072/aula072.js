// Getters / Setters

// Getter - Pegar o valor e retorna-lo
// Setter - Configurar e válidar o valor

// Trabalhando com getter e setter com função construtora
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configurável
        get: function() { // Obter valor com getter
            return estoquePrivado;
        },
        set: function(valor) { // Validando, caso o valor não seja um número
            if(typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }

            estoquePrivado = valor;
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
p1.estoque = 20;
console.log(p1.estoque);

// Trabalhando com getter e setter com função factory
// Nós podemos fazer direto no objeto
function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            valor = valor.replace('coisa.', '');
            nome = valor;
        }
    };
}

// const p2 = criaProduto('Camiseta');
// p2.nome = 'Qualquer coisa.';
// console.log(p2.nome);
