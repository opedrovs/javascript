// const multiplicacao = require('./mod');
// console.log(multiplicacao(2, 2));

// Importando numero
// const n = require('./mod');
// console.log(n);

// Importando classe
const Cachorro = require('./z/mod2'); // A extensão .js é opcional
const c1 = new Cachorro('Pintcher');
c1.latir();

// console.log(__filename); // Nome do arquivo atual
// console.log(__dirname); // Nome da pasta atual 
// Ambos são caminhos absolutos, vão desde a raiz do sistema, até a pasta ou arquivo requisitado

// const path = require('path');
// Exemplo, eu queira navegar, mas não sei em qual sistema meu programa vai rodar (como Windows), e daí gostaria que ele resolvesse o caminho para chegar no caminho correto (utilizando barras)
// console.log(__dirname);
// console.log(path.resolve(__dirname, '..', '..'));
