let data = new Date()
let hora = data.getHours()
let min = data.getMinutes()

console.log(`Agora são exatamente ${hora} horas e ${min} minutos.`)

if (hora <= 3) {
    console.log(`Boa Madrugada!`)
} else if (hora < 12) {
    console.log('Boa Manhã!')
} else if (hora < 19) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}