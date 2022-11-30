exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.' // A variável umaVariavelLocal vai estar disponível em todos os locais
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};
