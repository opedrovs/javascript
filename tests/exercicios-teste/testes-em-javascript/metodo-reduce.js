let valores = [4, 6, 5, 10]

let total = valores.reduce(function(total, valor) {
    return total + valor
})

console.log(total)