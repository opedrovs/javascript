let ano = 2011
console.log(`Descobrir o ano bissexto.`)
let divi = ano / 4

if (divi == Number.parseInt(divi)) {

    console.log(`${ano} É BISSEXTO`)

} else if (divi == Number.parseFloat(divi)) {

    console.log(`${ano} NÃO É BISSEXTO`)

}