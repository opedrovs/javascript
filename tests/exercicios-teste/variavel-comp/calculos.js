let numeros = [7, 6, 9, 1, 2]

let media = numeros.reduce(function(media, numero) {
    return media + numero
})

console.log(media / 5)