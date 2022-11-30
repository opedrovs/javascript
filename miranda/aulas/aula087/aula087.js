// Métodos úteis para Promises

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }
           
            resolve(msg.toUpperCase() + ' - Passei na promise'); 
            return;
        }, tempo);
    });
}

// Promise.all / Promise.race / Promise.resolve / Promise.reject

// PROMISE.ALL
/*
const promises = [
    'Primeiro valor', // Um valor qualquer
    esperaAi('Promise 1', 3000), // Uma promessa
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    // esperaAi(1000, 1000),
    'Outro valor'
];

Promise.all(promises) // Resolve todas essas promises e retorna um then com todos os valores
    .then(valor => {
        console.log(valor);
    })
    .catch(erro => {
        console.log(erro);
    });
*/

// Promise.all - Você passa um array com promessas ou valores já resolvidos, e ele vai te entregar uma promessa só, com os valores dentro de um array
// Tem horas que você precisa de um valor para chamar outra promise e assim fazer uma cadeia/corrente (ex: Execute a Frase 1, depois a Frase 2 e depois a Frase 3). Se der erro nas promises, ela retorna o ERRO, e não o valor do resolve. Se tiver 10 promessas para esse Promise.all e 1 delas rejeita, todas serão rejeitadas



// PROMISE.RACE
/*
const promises = [
    esperaAi(1000, rand(1, 5)),
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
];

Promise.race(promises)
    .then(valor => {
        console.log(valor);
    })
    .catch(erro => {
        console.log(erro);
    });
*/

// Promise.race - Similar ao all, que no caso do race é como se fosse uma corrida, ex: Olha, eu vou te passar todos essas promessas, a primeira que resolver você me entrega. E uma coisa, ele me entrega o valor, mas isso não impede que os setTimeout continue executando, não tem como ele falar "Para de executar pois ja retornei", ele vai continuar executando todas as promessas, mas ele ja vai retornar a primeira promessa que resolveu. Basicamente ele vai tentar resolver uma a uma, e a primeira que ele resolver vai te entregar, se a primeira que ele resolver não rejeitar ele vai retornar o valor, mas se a primeira rejeitar, ele vai retornar o erro


// PROMISE.RESOLVE

/*
function baixaPagina() {
    const emCache = false;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));
*/

// Promise.resolve - Essa função baixaPagina, claramente espera que o que seja retornado dela seja uma promessa, no caso do Promise.resolve, eu não preciso esperar, pois ja tenho os dados em mãos, então eu já vou retornar uma promessa resolvida. Então se eu tenho emCache no true, ele vai retornar "Página em cache" e não irá levar nem milésimos de segundo para te entregar, agora se estiver como false, ele vai passar na promise.


// Promise.reject
function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('ERRO', e));

// Basicamente ele rejeita, então caimos no catch.

// Basicamente com Promise.resolve e Promise.reject, eles retornam uma promessa resolvida ou rejeitado de cara
