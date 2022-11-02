// ImportExport
// Documentação import: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/import
// Documentação export: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/export

// MUDAR NOME VARIÁVEL NA EXPORTAÇÃO

// import { nome as nome2, sobrenome as seila, idade, soma } from './modulo1';

// "nome as nome2", serve para declarar a variável com outro nome, o mesmo com sobrenome, mudamos a variável "sobrenome" para "seila".

// const nome = 'João';
// console.log(nome, nome2, seila, idade);
// console.log(soma(5, 5));

/* ---------------------------- */
/* EXPORTAR NOME COM OUTRO NOME */
/* ---------------------------- */

// import { nome2, sobrenome, idade, soma, Pessoa as OutraCoisa } from './modulo1';

// const p1 = new OutraCoisa('Luiz', 'Otávio');
// console.log(p1);

/* ---------------------------- */
/* IMPORTAR TUDO                */
/* ---------------------------- */

// import * as MeuModulo from './modulo1';
// console.log(MeuModulo);

/* ---------------------------- */
/* IMPORTAR O PADRÃO DO MÓDULO  */
/* ---------------------------- */

// EXEMPLO 01
// import multiplica, { nome, sobrenome, idade, soma } from './modulo1';
// console.log(multiplica(5, 40));
// console.log(nome, sobrenome, idade, soma(4, 4));

// EXEMPLO 02

// Quando é default (padrão), não precisamos colocar dentro de chaves, e podemos dar qualquer nome a ele
import Pessoa, {nome, sobrenome} from './modulo1';
const p1 = new Pessoa(nome, sobrenome);
console.log(p1);
