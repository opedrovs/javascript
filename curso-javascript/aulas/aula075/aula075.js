// Manipulando Prototypes

// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
    // __proto__: Object.prototype
}

Object.setPrototypeOf(objB, objA); // Configurar o prototype
// Configurar prototype de quem?      =  objB
// Quem vai ser o prototype de objB?  =  objA

// Agora, mesmo eu não tendo essa chaveA em objB, eu posso acessar ela pelo objB

console.log(objB.chaveA);
