exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors'); // Enviamos uma variável para todas as páginas, eu jogo todas as flash messages relacionadas com errors
    res.locals.success = req.flash('success');
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
