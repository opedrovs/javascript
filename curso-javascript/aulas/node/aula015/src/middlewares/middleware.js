// module.exports = (req, res, next) => {
    
//     if(req.body.cliente) {
//         req.body.cliente = req.body.cliente.replace('Miranda', 'NÃO USE MIRANDA'); // Se colocar Miranda no meio, ele irá interceptar, e mudar o valor
//         console.log();
//         console.log(`Vi que você postou ${req.body.cliente}`)
//         console.log();
//     } // Caso queira interceptar toda vez alguem postar, um formulário onde tem um campo chamado "cliente"

    
//     next();
// };
// // Não podemos esquecer o next dentro do middleware, se não sua requisição não termina

exports.middlewareGlobal = (req, res, next) => {
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};
