// Factory function (Função fábrica)
// Constructor function (Função construtora)
/*
function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            // Ele poderia fingir que é um atributo, como eu só obtem um valor, e não precisa setar um valor
            return `${this.nome} ${this.sobrenome}`; // Não utilizamos o this, pois estamos utilizando os parâmetros
        },

        // Setter
        set nomeCompleto(valor) { //
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'falando sobre NADA') { // Chamamos isso de método
            return `${this.nome} está ${assunto}.`; // No nome estamos usando o this, this significa quem chamar o objeto.
            // Exemplo, usar o p2.fala(), o this vai se referir ao objeto que está chamando ele (no caso, o p2)
        },

        altura: a,
        peso: p,
        
        //imc() {
        //    const indice = this.peso / (this.altura ** 2);
        //    return indice.toFixed(2);
        //}

        // Getter
        get imc() { // Vai passar a fingir ser um atributo do objeto
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        } // Para acessar o nome, nós utilizamos por exemplo: p1.nome, mas, vai dar erro se pedirmos p1.nome(), pois nome não é uma função e sim uma string normal, e se quisermos acessar o imc de uma pessoa como se fosse um atributo (p1.imc())? Basta colocar: get imc(), na função dentro do objeto e para chamar, basta chamar como se fosse um atributo: p1.imc
    };
}


// Ficou bem mais simples
const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Otávio', 1.90, 57);
const p3 = criaPessoa('Junior', 'Otávio', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);
*/

// console.log(p1.imc);
/*p1.nomeCompleto = 'Maria Oliveira Silva';
// console.log(p1.nome + ' ' + p1.sobrenome);
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
*/

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            // Ele poderia fingir que é um atributo, como eu só obtem um valor, e não precisa setar um valor
            return `${this.nome} ${this.sobrenome}`; // Não utilizamos o this, pois estamos utilizando os parâmetros
        },

        // Setter
        // Basicamente, com esse Setter, se eu colocar: p1.nomeCompleto = 'Maria Oliveira Silva', ele vai automaticamente vai setar o método nome: 'Maria', e sobrenome: 'Oliveira Silva'.
        set nomeCompleto(valor) { 
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        altura: a,
        peso: p,

        // Getter
        get imc() { // Vai passar a fingir ser um atributo do objeto
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    }
}

// Ficou bem mais simples
const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.sobrenome);
