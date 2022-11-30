/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY:
    - Os Falsy são valores que são considerados false para o JavaScript.
    false (literal)
    0
    '' "" ``
    null / undefined
    NaN
*/


// Exemplo Operador lógico: And (&&)

// console.log('Luiz' && 'Maria' && 0 && 'João'); // Ele me retornou o valor 0, pois ele é o valor false.
// console.log('Luiz' && 'Maria' && 'João'); // Ele me retornou "João", pois quando não há nenhum valor falso, ele me retorna o último valor.

/*
function falaOi() {
    return 'Oi';
}
let vaiExecutar; // Aqui tem o valor "undefined", então ele é considerado falso, logo a função falaOi() não será executada.
console.log(vaiExecutar && falaOi())
*/


// Exemplo Operador lógico: Or (||)

// console.log(0 || false || null || 'Luiz Otávio' || true); // Retorna o valor "Luiz Otávio", pois ele mostra o primeiro valor verdadeiro que encontrar e ignora o resto

// A cor do usuário é null (ele não selecionou nenhuma), e a cor padrão é preto, com o comando abaixo não precisamos de if e else.
/*
const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);
*/

// Um jogo (pegadinha):
/*
const a = 0;        
const b = null;        
const c = 'false';  // Aqui é o valor true
const d = false;    
const e = NaN;      
*/
// console.log(a || b || c || d || e);
// console.log(a || b || 'Joãozinho' || c || d || e);
