let val = [6, 4, 8, 2]
val.push(1)
val.sort()
console.log(val)

for (let pos in val) {
    console.log(`Valor ${val[pos]} adicionado`)
}