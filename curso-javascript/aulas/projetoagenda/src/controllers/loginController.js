const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
};

exports.register = async function(req, res) {
    const login = new Login(req.body); // Enviar req.body para validar os dados
    await login.register(); // Esse método é async, e como precisamos esperar, colocamos um async nesse método register

    if(login.errors.length > 0) { // Exibir mensagens temporárias de erro
        req.flash('errors', login.errors);
        req.session.save(function() {
            return res.redirect('back');
        });
        return;
    }

    res.send(login.errors);
};
