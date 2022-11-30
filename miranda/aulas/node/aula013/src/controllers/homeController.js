exports.paginaInicial = (req, res) => { // temos o parâmetro next, que seria o próximo middleware (função) a ser executada
    res.render('index'); // Não precisa da extensão ejs, ele vai saber
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};
