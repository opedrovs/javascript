//            01234567
// const nome = 'VSanches';
// console.log(nome[7]);

//             0       1        2
let alunos = ['Luiz', 'Maria', 'João'];
alunos = 123

console.log(typeof alunos);
console.log(alunos instanceof Array); // Para saber se está trabalhando com arrays, "alunos é uma instancia de array?" Se retornar true é um array, se for false não é um array


//               0       1        2          3      4
// const alunos = ['Luiz', 'Maria', 'João']; // Luiza, Eduardo
// alunos.push('Luiza');
// alunos.push('Eduardo');
// console.log(alunos.slice(0, 3)); // Fatiamento
// console.log(alunos.slice(0, -2)); // Fatiamento
// console.log(alunos[50]); // Acessar array que não existe, que retorna "undefined", mas se precisar acessar algo dentro do índice vai dar erro

// delete alunos[1] // Remove o valor Maria, mas não altera o índice (Como o pop, shift, etc...)

// const removido = alunos.shift(); // Remove no começo do array
// const removido = alunos.pop(); // Remove no final do array
// console.log(removido);

// alunos.unshift('Fábio'); // Adicionar no começo do array
// alunos.unshift('Luiza');

// alunos.push('Otávio'); // Adiciona ao final do array
// alunos.push('Fábio');

// alunos[alunos.length] = 'Luiza'; // Adiciona ao final do array
// alunos[alunos.length] = 'Fábio';
// alunos[alunos.length] = 'Luana';

// alunos[0] = 'Eduardo'; // Altera
// alunos[3] = 'Luiza'; // Adiciona

// console.log(alunos);
// console.log(alunos[1])
