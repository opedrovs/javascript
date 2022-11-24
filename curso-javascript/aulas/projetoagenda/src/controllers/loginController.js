const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    res.render('login');
};

exports.register = async function(req, res) {
    try {
        const login = new Login(req.body); // Enviar req.body para validar os dados
        await login.register(); // Esse método é async, e como precisamos esperar, colocamos um async nesse método register
    
        if(login.errors.length > 0) { // Exibir mensagens temporárias de erro
            req.flash('errors', login.errors);
            req.session.save(function() { // Salvamos a sessão, e retornamos para /login/index, aonde exibira o erro com flash messages (caso houver)
                return res.redirect('/login/index');
            });
            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(function() {
            return res.redirect('/login/index');
        });
    } catch(e) {
        console.log(e);
        return res.render('404');
    }
};
