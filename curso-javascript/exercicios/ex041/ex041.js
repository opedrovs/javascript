// Escreva uma função que recebe 2 números e retorne o maior deles
/*
function maiorNumero(priNumero=0, segNumero=0) {
    if (priNumero > segNumero) {
        return `O MAIOR número é ${priNumero}.`;
    } else if (priNumero < segNumero) {
        return `O MAIOR número é ${segNumero}.`;
    } else {
        return 'Ambos os números são IGUAIS.';
    }
}

console.log(maiorNumero());
*/

// Minha outra solução
function maiorNumero(priNumero=0, segNumero=0) {
    if (priNumero > segNumero || priNumero < segNumero) {
        return priNumero > segNumero ? `O MAIOR número é ${priNumero}.` : `O MAIOR número é ${segNumero}`;
    } else {
        return 'Ambos os números são IGUAIS.';
    }
}

console.log(maiorNumero(5, 5));
