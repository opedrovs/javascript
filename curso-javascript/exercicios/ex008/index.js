const data = new Date()
const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
let idade = 30
let peso = 84
let altura = 1.80

const imc = (peso / (altura*altura)).toFixed(2)
const anoNascimento = data.getFullYear() - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)
