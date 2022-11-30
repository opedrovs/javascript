// TRATAMENTO DE ERROS

// try - Tente executar esse bloco.
// catch - Caso tenha dado um erro no bloco do try, executará o bloco do catch
// throw - Lança o erro personalizado em string.
// throw new Error('') - Ele lança o erro como se fosse do JavaScript em string, podendo personaliza-lo

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('x e y precisam ser números.');
                // TypeError, ReferenceError, etc...
    }
    
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch(error) {
    // console.log(error);
    console.log('Alguma coisa mais amigável para o usuário.')
}

/*
try {
    console.log(naoExisto);
} catch(err) {
    console.log('naoExisto não existe.');
    console.log(err);
}
*/
