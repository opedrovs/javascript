let valores = [5, 7, 3, 6, 1]
valores.push(9)
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
    console.log(`Temos o valor: ${valor}`)
}
*/


// Melhor Opção
for (let [pos] of valores.entries()) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}