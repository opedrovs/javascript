let num = [5, 8, 2, 1, 3]
num.push(4)
num.sort()
console.log(num)
for (let pos = 0;pos < num.length;pos++) {
    console.log(`O vetor ${pos} possui o valor ${num[pos]}`)
}