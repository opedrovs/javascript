const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); // Essa linha serve para tratar, sem ele, ele não irá tratar do body das requisições, ou seja, qualquer POST ou PUT que enviar via formulário, não irá ser tratado, vai vir como undefined

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    Outro campo: <input type="text" name="outrocampo">
    <button>Olá mundo</button>
    </form>
    `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // params -> /profiles/3
    // query  -> /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => {
    console.log(req.body); // vai vir chaves de acordo com que veio no name do formulário
    res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(3500, () => {
    console.log('Acessar http://localhost:3500');
    console.log('Servidor executando na porta 3500');
});