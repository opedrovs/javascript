let num = [5, 7, 3, 8]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`A primeira posição tem o valor ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}