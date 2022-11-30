// Basicamente usamos o Bundle para conseguir scripts que funcionam em navegadores antigos, utilizando de seu script moderno

const nome = 'Luiz';
const obj = { nome };
const novoObj = { ...obj };
console.log(novoObj);

// Código para obter scripts que funcionam em navegadores antigos:
// npx babel     main.js        -o bundle.js --presets=@babel/env
//                nome
//            do seu arquivo. 

class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
