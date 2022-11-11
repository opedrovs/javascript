exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este será o título da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    }); // Função render é o que está renderizando o nosso index.ejs, então eu posso injetar um objeto como segundo parâmetro, e mandar dados dentro do objeto

    // Outra forma de injetar dados, mas seria mais útil quando precisassemos injetar em vários arquivos ejs, utilizando o middleware, nós temos um middlewareGlobal (não tem rota, então ele irá para todas as rotas), e eu precise injetar dados em todas essas rotas alguma coisa que eu precise (que usaremos em breve o CSRF)

    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};
