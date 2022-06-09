// Factory Functions + Prototypes

// Relembrando Factory Function

// Utilizando Prototypes nas Funções fábrica


/*
function criaPessoa(nome, sobrenome) {
    return {
        nome, 
        sobrenome,

        falar() {
            console.log(`${this.nome} está falando.`);
        },

        comer() {
            console.log(`${this.nome} está comendo.`);
        },

        beber() {
            console.log(`${this.nome} está bebendo.`);
        },
    };
}
*/
// Dessa maneira, com métodos dentro da função, para cada pessoa ele irá criar essa funções, e acaba consumindo muitos recursos, para isso, pode fazer o seguinte:

/*
function criaPessoa(nome, sobrenome) {
    // Isso é para ser o Prototype das pessoas
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando.`);
        },

        comer() {
            console.log(`${this.nome} está comendo.`);
        },

        beber() {
            console.log(`${this.nome} está bebendo.`);
        },
    };

    // Linkar nosso objeto com o nosso prototype pessoaPrototype
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}
*/

// -------------------------------------

// Com isso, estamos desaclopando, e podemos usar essas funções em qualquer lugar, não apenas no Objeto criaPessoa.

const falar = {
    falar() {
        console.log(`${this.nome} está falando.`);
    },
};

const comer = {
    comer() {
        console.log(`${this.nome} está comendo.`);
    },
};

const beber = {
    beber() {
        console.log(`${this.nome} está bebendo.`);
    },
};

// const pessoaPrototype = { ...falar, ...comer, ...beber };
const pessoaPrototype = Object.assign({}, falar, comer, beber)

function criaPessoa(nome, sobrenome) {
    // Linkar nosso objeto com o nosso prototype pessoaPrototype
    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    });
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A.');
console.log(p1);
