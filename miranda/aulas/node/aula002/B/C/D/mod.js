// module.exports = function(x, y) {
//     return x * y;
// };

// console.log(module.exports(2, 2));

// Exportando número
// module.exports = 2;

// Exportando class
module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome} está fazendo au au`)
    }
}
