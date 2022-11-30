// Valor por referência
//                 0         1        2
/*
const nomes = ['Eduardo', 'Maria', 'Joana'];
nomes[2] = 'João';
delete nomes[2];
console.log(nomes);
*/
// ----------- '' ---- '' ------------

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// const novo = [...nomes]; // Usando [...] para copiar

// novo.pop(); // Remover o último valor do array
// console.log(nomes);
// console.log(novo);

// console.log(nomes.length) // Saber quantos elementos tem no array

// const removido = nomes.pop(); // Ele retorna o valor removido para a variável
// const removido = nomes.shift(); // Ao contrário do pop, ele remove o primeiro valor do array, e desloca os índices (Maria índice 0, e Joana índice 1)

// nomes.push('João'); // Adicionar um valor ao final do array
// nomes.push('Wallace');

// Não muito comum, similar ao push, podemos adicionar elementos no inicío do array, não é comum pois eles vão deslocar todos os índices do array, array pequeno não faz diferença, mas array grande pode trazer problemas de perfomance para o programa.
// nomes.unshift('João');
// nomes.unshift('Wallace');
// console.log(nomes);

// ----------- '' ---- '' ------------

// Fatiar o array
/*
const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
const novo = nomes.slice(1, -1);
console.log(novo);
*/

// Conveter uma String em um array

/*
const nome = 'Luiz Otávio Miranda';
const nomes = nome.split(' '); // Aqui colocamos o que queremos separar essa string em um array, um espaço. 
*/

/*
const nome = 'Luiz, Otávio, Miranda';
const nomes = nome.split(', ');
console.log(nomes);
*/

// Converter array em uma string
const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
const nome = nomes.join(' ');
console.log(nome);
