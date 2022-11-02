// Só mexemos no index.html que é nosso (na pasta public) e no index.js na pasta src, não alteramos nada na pasta public

/*
OBS: Para executar automaticamente no package.json, trocamos o "test": "..." para "gera": "webpack -w", sem o -w, nós teriamos que a cada atualização no código, parar e depois executar novamente o babel

OBS: No terminal, temos o comando timeout, ele serve para matar o terminal após um certo período de tempo, ex: timeout 30 npm run gera
Com esse comando, ele irá matar o terminal após se passar 30 seg, isso é útil por conta que mesmo desligando o sistema, ele continuará executando por baixo dos panos
*/

console.log('OPPAAAA');
