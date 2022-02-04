let numeros = [1, 2, 3, 4, 5, 6]

let total = numeros.reduce(function(total, numero) {
    return total + numero
})

console.log(total)