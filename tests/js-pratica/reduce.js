let valores = [5, 10, 15, 20, 30, 20]

let soma = valores.reduce(function(soma, valor) {
    return soma + valor
})

console.log(soma)