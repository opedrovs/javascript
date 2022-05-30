// 705.484.450-52 070.987.720-03
/*
7 x 10 = 70
0 x 9  = 0
5 x 8  = 40
4 x 7  = 28
8 x 6  = 48
4 x 5  = 20
4 x 4  = 16
5 x 3  = 15
0 x 2  = 0
      += 237
11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7 x 11 = 77
0 x 10 = 0
5 x 9  = 45
4 x 8  = 32
8 x 7  = 56
4 x 6  = 24
4 x 5  = 20
5 x 4  = 20
0 x 3  = 0
5 x 2  = 10
      += 284
11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

// 705.484.450-52
let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfLimpo);

console.log(cpfLimpo);
function validandoCpf(cpf) {
    let i = 10;
    let soma = 0;
    for(let digito = 0; digito < 9; digito++) {
        soma += cpf[digito] * i;
        i--;
    }
    primeiroDigito = 11 - (soma % 11);
    if (primeiroDigito >= 10) primeiroDigito = 0;
    console.log(primeiroDigito);
}
validandoCpf(cpfArray);
