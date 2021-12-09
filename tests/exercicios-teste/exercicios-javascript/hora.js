let data = new Date()
let hora = data.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora >= 0 && hora <= 6) {
    // Madrugada
    console.log('Boa Madrugada!')
} else if (hora < 12) {
    // Manhã
    console.log('Boa Manhã!')
} else if (hora <= 18) {
    // Tarde
    console.log('Boa Tarde!')
} else {
    // Noite
    console.log('Boa Noite!')
}