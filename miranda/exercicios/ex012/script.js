let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const principalA = 'A';
varC = principalA;

const principalB = 'B';
varA = principalB;

const principalC = 'C';
varB = principalC;

console.log(varA, varB, varC);


// Solução de Luiz Otávio

/*
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

[varA, varB, varC] = [varB, varC, varA]

// [varA, varB, varC] = [1, 2, 3]
// Com essa técnica, varA passa a valer 1, varB a valer 2, varC a valer 3.

console.log(varA, varB, varC);*/


/*let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);*/
