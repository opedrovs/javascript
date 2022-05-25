// Funções geradoras
// Seria quase, um código que pode ser pausado com o nome de Laser Evaluation, que seria uma avaliação preguiçosa, ela nunca vai te entregar todos os valores de uma vez.

function* geradora1() {
    // Código qualquer ...
    yield 'Valor 1';
    // Código qualquer ...
    yield 'Valor 2';
    // Código qualquer ...
    yield 'Valor 3';

    // yield é familiar com return, a diferença é que no yield, ele me retorna o primeiro yield, na próxima vez ele vai chamar o segundo yield, e por útimo (nesse caso) o terceiro...
}
/*
const g1 = geradora1();

// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());
// console.log(g1.next());

for (let valor of g1) {
    console.log(valor);
}
*/

// --------------- // ---- // -------------------

function* geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++;
        if (i > 100) return; // Colocando limite de até 100, para que consiga usa-lo no laço de repetição for.
    }
}

/*
const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
for(let valor of g2) {
    console.log(valor);
}*/

// --------------- // ---- // -------------------

// Delegamos parte do geradora3 para a geradora4.
function* geradora3() {
    yield 0; // Poderia ser qualquer coisa, não apenas números (uma função por exemplo)
    yield 1;
    yield 2;
}

function* geradora4() {
    // Continuar apartir do geradora3()
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

/*
const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}*/

// --------------- // ---- // -------------------

function* geradora5() {
    // Sistema que tem etapas, onde uma função executa uma tarefa, outra função executa outra tarefa etc...
    yield function() {
        console.log('Vim do y1');
    }

    // return function() {
    //    console.log('Vim do return');
    // }

    // ...

    yield function() {
        console.log('Vim do y2');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
