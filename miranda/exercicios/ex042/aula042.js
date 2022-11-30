// Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

function ePaisagem(larg, alt) {
    return larg > alt ? true : false;
}

console.log(ePaisagem(12, 7));
