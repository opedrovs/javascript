const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: { // objeto dentro de objeto
        rua: 'Av Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação em OBJETOS

const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, resto);


/*
const {
    endereco: { rua: r = 12345, numero },
    endereco
} = pessoa;
console.log(r, numero, endereco);
*/


/*
const { nome='<desconhecido>', sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade);
*/


// Aqui colocamos "<desconhecido>" como valor padrão, caso não tenha nada. E trocamos o nome da variável nome por n.
/*
const { nome: n = '<desconhecido>', sobrenome, idade } = pessoa;
console.log(n, sobrenome, idade);
*/
