// Exportação e Importação com Node.JS

// const nome = 'Luiz';
// const sobrenome = 'Miranda';
// const falaNome = () => nome + ' ' + sobrenome;

// console.log(module); // - Estamos interessados no objeto exports

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;

// ----------------------------
//            ATALHO
// ----------------------------

// exports.nome = nome; // Isso é um objeto normal, então eu posso exportar com nome diferente (ex: tudo em maiúsculas)
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'O que eu quis exportar'; // Nesse contexto, a palavra this aponta para module.exports, e exports

// console.log(module.exports);

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa;
