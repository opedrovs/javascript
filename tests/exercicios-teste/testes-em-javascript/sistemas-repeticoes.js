let valores = [5, 2, 7, 3, 9]
valores.push(1)
valores.sort()
//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

    Não recomendado, segundo https://www.javascript.info/
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for(let valor of valores) {
    console.log(valor, valores)
}

for (let [pos] of valores.entries()) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

valores.forEach(function(valor) {
    console.log(valor)
})