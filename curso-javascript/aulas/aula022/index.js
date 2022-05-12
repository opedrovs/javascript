/*
Operadores Lógicos
    && -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
    || -> OR -> OU -> Basta apenas uma ser verdadeira para retornar true
    ! > NOT -> NÃO -> Ignora o valor
*/
// const expressaoAnd = true && true && true && true;
// const expressaoOr = false || false || true || false;


// Exemplo de utilização para esse operadores lógicos
/*
const usuario = 'Luiz'; // form usuário digitou
const senha = 'abcde'; // form usuário digitou
//                      True                False
const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);
*/

console.log(!false); // Ele está negando o false, então inverte para true
console.log(!true); // Ele está negando o true, então inverte para false
