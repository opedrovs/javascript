// ForEach - Uma forma diferente de iterar sobre arrays (como for clássico, for in, for of, while, etc.)
// ForEach so está disponível em arrays

const a1 = [10, 20, 30];
/*a1.forEach(function(valor, indice, array) {
    console.log(valor, indice);
});*/
let total = 0;
a1.forEach(valor => {
    total += valor;
});
console.log(total);
