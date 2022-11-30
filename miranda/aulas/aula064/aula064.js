// Concatenando arrays

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
/*
const a3 = a1.concat(a2, [7, 8, 9], 'Luiz'); // O array a1 vai concatenar com array a2
*/

// ... rest -> ... spread
// Spread Operator 

const a3 = [...a1, 'Luiz', ...a2, ...[7, 8, 9]];
console.log(a3);
