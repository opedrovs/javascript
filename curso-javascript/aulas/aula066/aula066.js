// Map - mapeando o array

// Similaridade do Map com FIlter: Filter filtra o array, e o array é do mesmo tamanho ou menor. A map já é diferente, ela altera os valores do array, vai receber um array do mesmo tamanho do original mas com valores alterados.
// O map não altera o valor do array original, mas ele cria um novo array com os valores do array original, e você quem decide altera-lo.

// Dobre os números
//               0  1   2   3  4  ...
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosEmDobro = numeros.map(valor => valor * 2);
// console.log(numerosEmDobro);

// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remove apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map(obj => {
    return obj.nome;
});
// console.log(nomes);

/*const idades = pessoas.map(obj => {
    // delete obj.nome; // Modifica o objeto original
    return { idade: obj.idade }; 
});*/

const idades = pessoas.map(obj => ({ idade: obj.idade })); // Solução, as chaves da função iria começar a fazer parte do objeto, por isso os parenteses.

// const comIds = pessoas.map((obj, indice) => ({ nome: obj.nome, idade: obj.idade, id: obj.id = indice }));
const comIds = pessoas.map((obj, indice) => {
    // obj.id = (indice + 1) * 1000; // Esse comando está afetando meu objeto original, pois ele trabalha no objeto por referência. Solução disso abaixo:
    const newObj = { ...obj };
    newObj.id = indice;
    return newObj;
});

// console.log(pessoas);
console.log(comIds);