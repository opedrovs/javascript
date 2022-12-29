// Nodemon serve para que não precisamos parar o servidor, e voltar para salvar alguma coisa, com Nodemon, ele faz isso automaticamente. Para ele ficar olhando cada nova modificação, digitamos no terminal: npx nodemon server.js (server.js é o nome do MEU arquivo)
// Outra forma, seria entrar no package.json e no start, colocar: "start": "nodemon server.js", após isso, digitar no terminal: npm start

const express = require('express');
const app = express();

//         Criar   ler   atualizar  apagar
// CRUD -> CREATE, READ, UPDATE,    DELETE
//         POST    GET   PUT        DELETE

// Express ajuda a trabalhar nas rotas da aplicação, após a barra "/" (caminho), ele quem cuida o que deve aparecer na página

// http://meusite.com/ <- GET -> Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato

// primeiro parâmetro, a rota (usamos a rota principal), o segundo parâmetro, uma função com dois parâmetros (requisição e resposta)
// Requisição ao que estou pedindo e resposta é o que eu vou mandar para o servidor
app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Olá mundo</button>
    </form>
    `); // Aqui, eu envio um formulário com método POST
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário');
}); // receber dados formulário

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente.');
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
}); // Uma porta é referente a um processo que está sendo executado no seu servidor, significa que se houver alguma coisa rodando em determinada porta do seu servidor e você tentar iniciar o express nessa porta, vai dar erro. Por isso utilizamos portas não muitos utilizadas, como 3000
