const path = require('path');   // CommonJS


// Importar módulo
module.exports = {
    mode: 'production',
    entry: './frontend/main.js', // pasta onde queremos pegar os arquivos
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
    devtool: 'source-map'
};
