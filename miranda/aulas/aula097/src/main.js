import 'core-js/stable';
import 'regenerator-runtime/runtime';
// Para quando sua aplicação precisa rodar em navegadores mais antigo, é bom deixar importado acima. (O problema está relacionado com código muito moderno de Javascript sendo convertido para código muito antigo, o que causa erros com Promises e Async Await).


import executa from './modules/promises';

import './assets/css/style.css';

executa();