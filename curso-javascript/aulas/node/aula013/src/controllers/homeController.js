exports.paginaInicial = (req, res) => {
    res.render('index'); // Não precisa da extensão ejs, ele vai saber
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de POST.');
};
