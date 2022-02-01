let valores = [6, 4, 8, 2]
valores.push(1)
valores.sort()
console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

for (let [pos, valor] of valores.entries()) {
    console.log(`A posição ${[pos]} tem o valor ${valor}`)
}