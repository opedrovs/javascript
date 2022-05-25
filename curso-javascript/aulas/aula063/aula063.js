// Função que faz pop, push, shift, unshift e mais um pouco, e ela mexe no array original

//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice atual, delete, elem1, elem2, elem3);

// Primeiro argumento: Qual índice começar a mexer.
// Segundo argumento: Quantos elementos eu quero remover do meu array.
// Terceiro argumento: Elementos para adicionadar, separados por vírgula.

// const removidos = nomes.splice(-2, 0); // Remover do índice 3, 2 elemento (Ele retorna um array com os elementos removidos)
// const removidos = nomes.splice(-2, Number.MAX_VALUE) // Number.max_value é o número máximo, ou seja ele vai até o final

// const removidos = nomes.splice(3, 0, 'Luiz'); // Adicionando Luiz no índice 3
// const removidos = nomes.splice(3, 1, 'Luiz'); // Trocando o Gabriel no índice 3 por Luiz (na posição 3, remove 1 valor, e adiciona Luiz)

// const removidos = nomes.splice(3, 2, 'Luiz');

// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);

// push
// nomes.splice(nomes.length, 0, 'Luiz', 'Otávio');
// nomes.splice(Number.MAX_VALUE, 0, 'Luiz');

// unshift
// nomes.splice(0, 0, 'Luiz'); 
// nomes.splice(0, 0, 'Luiz', 'Otávio');

console.log(nomes);
