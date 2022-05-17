/*
const nome = 'Luiz';

let i = 0;

while (i < nome.length) {
    console.log(nome[i]);
    i++;
}

console.log('Segue a vida...')
*/

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

// While
/*
const min = 1;
const max = 50;
let rand = random(min, max);

while (rand !== 10) { // Enquanto rand for diferente de 10, executa o laço, se o rand for igual a 10, ele sai do laço.
    rand = random(min, max);
    console.log(rand);
}
*/

/*
// Do... While
const min = 1;
const max = 50;
let rand = 10;

while (rand !== 10) { // While
    rand = random(min, max);
    console.log(rand);
}

console.log('-=-=-=-=-')

do { // Do... While
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10);
*/
