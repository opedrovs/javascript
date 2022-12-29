// Views - Porque precisamos do views? Há algumas coisas que precisa fazer dentro do tamplate, por exemplo um if, for para renderizar alguma coisa dentro do próprio HTML (html puro não faz isso, por isso utilizaremos essa engine) 

const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({ extended: true }));
// Caminho relativo -> ./src/views
// Caminho absoluto -> path.resolve(__dirname, 'src', 'views')
app.set('views', path.resolve(__dirname, 'src', 'views')); // Falar pro express que vamos utilizar a pasta como views
app.set('view engine', 'ejs') // E qual engine ele vai renderizar para utilizar esses views

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});