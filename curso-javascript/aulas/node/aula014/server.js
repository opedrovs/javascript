// dotenv - para que arquivos não vão para o público (repositórios públicos), como senhas, etc...
// mongoose - é o que vai fazer a modelagem dos dados, ele vai validador os dados (ex: deixar idades como númericos, não deixar campos vazios, etc) e ele vai fazer a conexão do banco de dados

require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectei à base de dados.')
        app.emit('pronto'); // Aqui emitimos um sinal, emitimos aqui o sinal "pronto", e daí, podemos capturar esse evento para carregar o banco de dados (enquanto a conexão com base de dados não realizar, não conectaremos ao site)
    })
    .catch(e => console.log(e)); // Aqui, poderiamos renderizar, criar uma rota, uma página/tela de erro para o cliente
    
    // mongoose.connect() nos retorna uma promessa, quando ela for resolvida ou rejeitada (deixar de ser pending), emitiremos um sinal, e conecta nosso app na porta 3500

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');
const { emit } = require('process');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views')); 
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => { // Capturamos o evento do emit
    app.listen(3500, () => {
        console.log('Acessar http://localhost:3500');
        console.log('Servidor executando na porta 3500');
    }); // Só conectaremos se app.emit() retornar "pronto"
})