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

const max2 = (x, y) => x > y ? x : y;
console.log(max2(10, 5));
