let carros = ['fiesta', 'onix', 'fusca', 'saveiro']

/*
for (carro of carros) {
    console.log(carro)
}
*/

for (let [index, carro] of carros.entries()) {
    console.log(index, carro)
}