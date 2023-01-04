const path = require('path');   // CommonJS

// Importar módulo
module.exports = {
    mode: 'production',
    entry: './src/main.js', // pasta onde queremos pegar os arquivos
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    }, // a pasta onde jogue meus arquivos
    module: {
        rules: [{
            exclude: /node_modules/, // Exclue a pasta node_modules (eu não quero que o webpack analise a pasta do node, pois podera deixar o sistema muito lento)
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }] // regras
    },
    devtool: 'source-map' // Ele faz o mapeamento, caso ocorra algum erro, ele vai mapear o arquivo original

    /*
    No output, o path vai resolver o caminho absoluto, e o resolve() ele vai resolver o caminho que daremos a ele, e dentro delas temos acesso a variável __dirname (diretório atual), então, para ser compatível com Linux, Windows, MacOS, etc... o resolve irá resolver o jeito de colocar as barras, então colocamos apenas os nomes das pastas que ele vai passar:

    Ex: __dirname(pasta atual) -> 'public' -> 'assets' -> 'js'
    */  
};
