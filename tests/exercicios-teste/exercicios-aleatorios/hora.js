let data = new Date()
let hora = data.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora >= 0 && hora < 5) {
    console.log(`Boa Madrugada`)
} else if (hora < 12) {
    console.log('Boa Manhã')
} else if (hora <= 18) {
    console.log('Boa Tarde')
} else {
    console.log('Boa Noite')
}