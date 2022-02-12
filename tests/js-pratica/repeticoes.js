let valores = [5, 4, 8, 7]
valores.push(2)
valores.sort()
//console.log(valores)

/*
let pos = 0
while (pos < valores.length) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    pos++
}

let pos = 0
do {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    pos++
} while (pos < valores.length)

for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

for (let valor of valores) {
    console.log(valor)
}
*/

for (let [pos, valor] of valores.entries()) {
    console.log(`A posição ${pos} tem o valor ${valor}`)
}