// Getters e Setters em Classes

/*
const _velocidade = Symbol('velocidade'); // Ele cria uma chave privada
// Ou seja, o Symbol nunca tem os mesmos valores, basta ver: Symbol() === Symbol();
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade(valor) {
        console.log('SETTER');
        // Agora, para setar o valor velocidade, iremos verificar se ele é um número e esta entre 0 e 100.
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;

        this[_velocidade] = valor
    }
    
    get velocidade() {
        console.log('GETTER');
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade]  >= 100) return;
        this[_velocidade] ++;
    }

    freiar() {
        if(this[_velocidade]  <= 0) return;
        this[_velocidade] --;
    }
}


// Vamos usar for para simular que alguém pressinou o botão para acelerar o carro
// for(let i = 0; i <= 200; i++) {
// c1.acelerar();
// }

// c1.velocidade = 55; // Ela foi setada, mas não é a minha velocidade que estou utilizando no programa
    
const c1 = new Carro('Fusca');
c1.velocidade = 99;
console.log(c1.velocidade);
*/


class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nomeCompleto() {
        return this.nome + ' ' + this.sobrenome;
    }

    set nomeCompleto(valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
    }
}

const p1 = new Pessoa('Luiz', 'Miranda');
p1.nomeCompleto = 'Luiz Miranda Oliveira';
console.log(p1.nome);
console.log(p1.sobrenome);
