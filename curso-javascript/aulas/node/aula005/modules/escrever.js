const fs = require('fs').promises;

// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');
// fs.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'a'} ); // dentro do objeto, podemos colocar o "enconding: 'utf8'", mas por padrão, ele já é assim, então não será necessário

// w - indica se o arquivo já existe, vai apagar tudo que há nele, e escrever novamente
// a - se o arquivo já existe, ele adiciona a mais no arquivo, sem apagar nada

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' });
};


