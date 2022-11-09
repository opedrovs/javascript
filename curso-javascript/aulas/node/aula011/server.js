// Arquivos estáticos -> Bundle que criamos com webpack, é um conteúdo estático, assim como css, logo, imagens, etc...

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public'))); // adicionar pasta de conteúdo estático

app.set('views', path.resolve(__dirname, 'src', 'views')); 
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});