// Continue - continua para próxima iteração
// Break - sai do laço


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
for (let numero of numeros) {
    if (numero === 2) { // Ao chegar no 2 e checar essa condição e for verdadeira, ela encontrará a palavra continue, encontrando a palavra continue, ele pula para a PRÓXIMA interação do laço sem executar o restante de código abaixo.
        console.log('Pulei o número 2')
        continue;
    }

    console.log(numero);

    if (numero === 7) { // Com break, ao achar a palavra break ele vai sair do laço, e não executará mais nada.
        console.log('7 encontrado, saindo...');
        break
    }
}
*/

// com FOR
/*
for (let i = 0; i < numeros.length; i++ ) {
    let numero = numeros[i];
    if (numero === 2) { // Ao chegar no 2 e checar essa condição e for verdadeira, ela encontrará a palavra continue, encontrando a palavra continue, ele pula para a PRÓXIMA interação do laço sem executar o restante de código abaixo.
        console.log('Pulei o número 2')
        continue;
    }

    console.log(numero);

    if (numero === 7) { // Com break, ao achar a palavra break ele vai sair do laço, e não executará mais nada.
        console.log('7 encontrado, saindo...');
        break
    }
}
*/

// com WHILE (também funciona com Do... While)
// Sempre que utilizar, continue e break sempre é importante atualizar sua variável de controle antes.
let i = 0
while (i < numeros.length) {
    let numero = numeros[i];
    if (numero === 2) { 
        console.log('Pulei o número 2');
        i++;
        continue;
    }

    console.log(numero);

    if (numero === 7) { 
        console.log('7 encontrado, saindo...');
        i++;
        break;
    }
    
    i++
}
