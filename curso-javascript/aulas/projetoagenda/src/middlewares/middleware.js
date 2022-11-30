exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors'); // Enviamos uma variável para todas as páginas, eu jogo todas as flash messages relacionadas com errors
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user; // Estamos colocando a sessão do usuário em todas as páginas
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfError = (err, req, res, next) => {
    if(err) {
        return res.render('404');
    }
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

exports.loginRequired = (req, res, next) => { // Verificar se o usuário está logado ou não, para que possa ou não acessar a página
    if(!req.session.user) {
        req.flash('errors', 'Você precisa fazer login.');
        req.session.save(() => res.redirect('/'));
        return;
    }

    next();
};
