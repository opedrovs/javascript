// Async Await 

// Async e Await permite que a gente utilize promises dentro do corpo da função, como se as promises fossem de forma assíncrona (como o then, mas de um jeito mais limpo) 

// Await serve para esperar terminar para que execute o proximo a seguir

function rand(min = 0, max = 3) {
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


// esperaAi('Fase 1', rand())
//     .then(valor => {
//         console.log(valor);
//         return esperaAi('Fase 2', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi('Fase 3', rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {
//         console.log('Terminamos na fase', fase);
//     })
//     .catch(e => console.log(e));

// Deixando o código mais limpo (com async e await)

async function executa() { // Preciso do Async na função para poder usar a palavra await na função
    // Executar isso como se fosse assíncrono, precisamos fazer isso
    try {
        const fase1 = esperaAi('Fase 1', 1000);
        console.log(fase1);

        // O que é uma promise pendente? É quando ela está sendo executada mas ainda não retornou valor

        setTimeout(function() { // Aqui pegamos depois que a promise for resolvida ou rejeitada, podemos pegar seu valor depois
            console.log('Essa promise estava pendente', fase1);
        }, 1100);
    
        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);
    
        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);
    
        console.log('Terminamos na fase', fase3);
    } catch(e) {
        console.log(e);
    }
}
// executa();

// O await será como o then, se ocorrer algum erro, ele jogara para o catch

// Os estados:
// pending -> pendente
// fullfilled -> resolvida
// reject -> rejeitada

// pending -> é quando ela inicia, ela ainda não terminou e você chamou o valor dela, isso ocorre quando você não utiliza await (que serve para esperar terminar)

const teste2 = esperaAi('qlq', 5000);
console.log(teste2);
