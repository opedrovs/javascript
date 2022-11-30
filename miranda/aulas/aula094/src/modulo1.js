// const nome = 'Luiz';
// const sobrenome = 'Miranda';
// const idade = 30;

// function soma(x, y) {
//     return x + y;
// }

/* --------------------------- */
/* EXPORTAR COM NOME DIFERENTE */
/* --------------------------- */
// export { nome as nome2, sobrenome, idade, soma };

/* ------------------------------- */
/* EXPORTAR DIRETAMENTE NA CRIAÇÃO */
/* ------------------------------- */

// export const nome = 'Luiz';
// export const sobrenome = 'Miranda';
// export const idade = 30;

// export default function soma(x, y) {
//     return x + y;
// }

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }


/* --------------------------------- */
/* IMPORTANDO ARQUIVOS DEFAULT       */
/* --------------------------------- */

// OBS: Só podemos ter um default por arquivo/módulo

// EXEMPLO 01
// const nome = 'Luiz';
// const sobrenome = 'Miranda';
// const idade = 30;
// function soma(x, y) {
//     return x + y;
// }
// export default (x, y) => x * y;
// export { nome, sobrenome, idade, soma };

// EXEMPLO 02
export const nome = 'Joãozinho';
export const sobrenome = 'Oliveira';
export const idade = 30;
export function soma(x, y) {
    return x + y;
}
export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
