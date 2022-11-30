// Importando

// const falaNome = require('./mod1').falaNome; // Estamos importando apenas a chave falaNome
// console.log(falaNome());

// ----------------------------

// Importar módulo inteiro, e pegar a função falaNome
// const mod1 = require('./mod1');
// const falaNome = mod1.falaNome;
// console.log(falaNome());

// ----------------------------

// const { nome, sobrenome, falaNome } = require('./mod1');
// console.log(nome, sobrenome);
// console.log(falaNome());

// ----------------------------

const path = require('path') // Módulos padrão e módulos que instalamos via npm (que vai aparecer no nome_modules), eles não requerem caminho, como o path
const { Pessoa } = require('./mod1');
const mod1 = require('./mod1');

const p1 = new Pessoa('Jão');

console.log(mod1);
console.log(p1);
