// Express Session - Eu salvo coisas referente ao navegador, exemplo: supomos que você comprou um pc novo, instala e deixa tudo pronto, e depois loga no facebook, na primeira vez ele vai perguntar usuário e senha, daí ele pergunta se quer salvar os dados nesse navegador, daí ele salva a sua sessão (salva os dados do navegador, no nosso servidor). Assim que nós salvou um ID/Cookie, toda vez que o cliente acessar o servidor (desde que não limpe os cookies), ele vai mandar junto com sua requisição, um cookie, o servidor vai pegar, verificar, e ver se esse cookie é igual ao do servidor, ele irá logar o cliente, esse foi um exemplo de login, mas podemos salvar qualquer coisa
// Podemos salvar na memória, mas isso é inviável, pois para uma aplicação grande, vai consumir muita memória, e o servidor vai ficar sem memória rapidamente, outro problema é se reiniciar o servidor, nós perdemos todas as sessões ativas. Por isso iremos salvar na nossa base de dados.

// Flash Messages - É mensagens que são salvas na sessão, exemplo: Você digita seu usuário e senha, daí você digitou a senha errada, provavelmente uma mensagem vai ser retornada para você "usuário ou senha inválidos", e daí essa mensagem precisa sumir, precisamos mostrar ela para o cliente, e sumir com ela depois, e não apresenta-la denovo caso ele atualize a página, ou digite os dados corretamente. 

require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo'); // com MongoStore, enviamos os dados para a base de dados
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
    secret: 'secret',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), // vamos mandar o cliente de conexão do mongodb
    resave: false,
    saveUninitialized: false,
    cookie: { // 1000 milésimos * 60 segundos * 60 minutos * 24 horas * 7 dias
        maxAge: 1000 * 60 * 60 * 24 * 7, // quanto o cookie vai durar
        httpOnly: true
    }
});
app.use(sessionOptions); // falar pro app usar o sessionOptions
app.use(flash()); // Iremos mandar o flash uma função executável

app.set('views', path.resolve(__dirname, 'src', 'views')); 
app.set('view engine', 'ejs');

app.use(middlewareGlobal);
app.use(routes);

app.on('pronto', () => {
    app.listen(3500, () => {
        console.log('Acessar http://localhost:3500');
        console.log('Servidor executando na porta 3500');
    });
});