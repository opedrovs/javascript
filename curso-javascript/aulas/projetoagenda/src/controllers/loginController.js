const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-logado'); // Se existe a função user, significa que ele está logado, então renderizamos a página login-logado
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

exports.login = async function(req, res) {
    try {
        const login = new Login(req.body); // Enviar req.body para validar os dados
        await login.login(); 

        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function() { 
                return res.redirect('/login/index');
            });
            return;
        }

        req.flash('success', 'Você entrou no sistema.');
        req.session.user = login.user; // Colocamos nosso usuário para dentro da sessão (identificar usuário)
        req.session.save(function() {
            return res.redirect('/login/index');
        });
    } catch(e) {
        console.log(e);
        return res.render('404');
    }
};

exports.logout = function(req, res) { // Aqui só matamos a sessão
    req.session.destroy();
    res.redirect('/');
};
