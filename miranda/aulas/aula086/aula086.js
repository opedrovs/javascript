// Promises (promeça)

// Trabalhando com código assíncrono

// Quando trabalhamos na internet, procuramos por recursos aonde não temos noção exata de quando esses recursos vão voltar. Ex: Conectamos a uma API, e pede dados de um usuário, e não temos a noção exata (nosso código em sí) de quando esses dados vão retornar para nós, para podermos trabalhar com esses dados. (A nossa antiga solução era a de callback, quando pedimos um dado e passamos como parâmetro de uma função callback que será executada quando o dado estiver pronto).

// Vamos usar um setTimeout que é a única forma no momento para simular algo que demora

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

// Com Callback
/*
function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg);
        if(cb) cb();
    }, tempo);
}
// Precisamos de uma maneira de falar para o JS, Exemplo: Executa a 2 depois que 1 for executada, a 3 só pode ser executado se 2 for executada
// Isso vai criar uma "árvore de natal"/gambiarra, então, não é a melhor solução
esperaAi('Frase 1', rand(1, 3), function() {
    esperaAi('Frase 2', rand(1, 3), function() {
        esperaAi('Frase 3', rand(1, 3));
    });
});
*/


// Com Promises
/*
function esperaAi(msg, tempo) {
    // resolve - Olha, esse código executou com sucesso, então resolve ele para mim
    // reject - Olha, deu um erro aqui no código, rejeita isso para mim
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1, 3))
  .then(resposta => {
      console.log(resposta);
  })
  .catch(); // Esse then, será executado quando a gente resolver a nossa Promise, no caso, resolve(). Se chamar o reject, será o método catch() para capturar erro 
*/

/*
function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

// Encadeando os then
esperaAi('Frase 1', rand(1, 3))
  .then(resposta => {
      console.log(resposta);
      return esperaAi('Frase 2', rand(1, 3));
      // Aqui, podemos retornar uma promise, mas para pegar o dado dessa promise, preciso de outro then()
  })
  .then(resposta => {
      console.log(resposta);
      return esperaAi('Frase 3', rand(1, 3));
  })
  .then(resposta => {
      console.log(resposta);
  })
  .then(() => {
      console.log('Eu serei o último a ser exibido.');
  })
  .catch();
*/ 

// Usando o reject

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') reject(new Error('ERRO'));
            // if(typeof msg !== 'string') reject('BAD VALUE'); // reject (rejeita) a msg se não for uma string, então vai cair no catch
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o DB', rand(1, 3))
  .then(resposta => {
      console.log(resposta);
      return esperaAi('Buscando dados da BASE', rand(1, 3));
      // Aqui, podemos retornar uma promise, mas para pegar o dado dessa promise, preciso de outro then()
  })
  .then(resposta => {
      console.log(resposta);
      return esperaAi('Tratando os dados da BASE', rand(1, 3));
  })
  .then(resposta => {
      console.log(resposta);
      return esperaAi(2222, rand(1, 3));
    }).then(resposta => {
        console.log(resposta)
    })
    .then(() => {
      console.log('Exibe dados na tela');
  })
  .catch(e => {
      console.log('ERRO:', e);
  });

console.log('Isso aqui será exibido antes de qualquer promise.')

// Resumo: Você cria uma Promise, usando o construtor da promise, recebe dois parâmetros, dos quais comum serem chamados de "resolve" e "reject", sempre que você quiser resolver uma promessa, em qualquer lugar do código, usamos o resolve() para deixar uma promessa pendente, depois essa promessa vai cair no then, e todo resolve vai cair no then. Se eu dou reject, ele vai direto pro catch, e trata o erro do jeito que quiser. 
