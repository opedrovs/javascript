let valores = [4, 10, 1, 8, 2]

let soma = valores.reduce(function(soma, valor) {
    return soma + valor
}, 0)

console.log(soma)