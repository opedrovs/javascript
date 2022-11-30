const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true })); // Serve para que o express tratar o body, e me dar o objeto do que foi postado. Ou seja, sem ele, qualquer POST ou PUT que for enviar via formulario, não vai ser tratado, vai vir como undefined

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome"><br>
    Outro campo: <input type="text" name="outrocampo">
    <button>Olá mundo</button>
    </form>
    `); // O formulário POST serve para que dados não fiquem expostos na URL (dados sensíveis, como email, senha, cpf, etc)
});

               // idUsuarios é um parâmetro, para sinalizar é sinalizar que é um parâmetro é necessário ter /: antes do parâmetro, e no final o "?" caso queira que o parâmetro seja opcional
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    // params -> /profiles/3
    // query  -> /profiles/?chave1=valor1&chave2=valor2&chave3=valor3

    // OBS: Para começar a query string, precisa de um ? no começo, e quando tem mais de uma query string, coloca um &
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post('/', (req, res) => { // Quando envia um formulário, ele vem dentro da requisição
    console.log(req.body); // Objeto do formulário
    res.send(`O que você me enviou foi: ${req.body.nome}`); // A chave nome, vem do name do formulário
});

app.listen(3500, () => {
    console.log('Acessar http://localhost:3500');
    console.log('Servidor executando na porta 3500');
});