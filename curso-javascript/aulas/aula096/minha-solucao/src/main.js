import criaSenha from './modules/geraSenha';

import './assets/css/style.css';

(function() {
    document.addEventListener('click', e => {
        const el = e.target;
    
        if(el.classList.contains('gerar-senha')) {
            e.preventDefault();
            const resultado = document.querySelector('.resultado');
            
            const caracteres = document.querySelector('.caracteres');
            const conterNumeros = document.querySelector('.conterNumeros');
            const conterMaiusculas = document.querySelector('.conterMaiusculas');
            const conterMinusculas = document.querySelector('.conterMinusculas');
            const conterSimbolos = document.querySelector('.conterSimbolos');

            resultado.innerHTML = criaSenha(Number(caracteres.value), conterNumeros, conterMaiusculas, conterMinusculas, conterSimbolos);
        }
    });
})();
