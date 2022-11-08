const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');

// const pessoas = [
//     { nome: 'João' },
//     { nome: 'Maria' }, 
//     { nome: 'Eduardo' },
//     { nome: 'Luiza' },
// ];
// const json = JSON.stringify(pessoas, '', 2); // vai criar uma string que contém JSON (nesse caso, irá conveter meu objeto para json)

// escreve(caminhoArquivo, json);

// UTILIZANDO ASYNC AWAIT e THEN
// async function leArquivo(caminho) {
//     const dados = await ler(caminho);
//     return dados; // Aqui, como estamos usando async await, eles nos retornará uma promessa, por isso abaixo utilizaremos o then (por isso algumas then é melhor)
// }
// const dadosArquivo = leArquivo(caminhoArquivo)
//     .then(dados => console.log(dados));


// UTILIZANDO FUNÇÃO
async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados); // Fazendo dados Json, voltar a ser um objeto
    dados.forEach(val => console.log(val.nome));
}
leArquivo(caminhoArquivo);