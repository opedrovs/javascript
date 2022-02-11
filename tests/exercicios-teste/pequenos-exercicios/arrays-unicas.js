const numeros = ['Leonardo', 'Gustavo', 'Hector', 'Hector', 'Leonardo', 1, 2, 2, 3, 2, 3, 1]
const unica = numeros.filter(function(ele, pos) {
    return numeros.indexOf(ele) == pos;
})

console.log(unica)