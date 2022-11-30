// Não consegui fazer
/*
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function retornaHora(data) {
    if (data && !(data instanceof Date)) {
        // instanceof - Se essa data não for uma instância de Date, vai dar false
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Remover o "PM" da data. Ex: 6:24:45 PM
    });
}

const data = new Date();
const hora = retornaHora();
console.log(hora);
let horaAtualTimer;

iniciar.addEventListener('click', function(event) {
    relogio.style.color = 'black';
    const timer = setInterval(function () {
        relogio.innerHTML = `${retornaHora()}`
    });
    return horaAtualTimer = timer;
});

pausar.addEventListener('click', function(event) {
    relogio.style.color = 'red';
    setTimeout(function() {
        clearInterval(horaAtualTimer);
    }, 500);
});

zerar.addEventListener('click', function(event) {
    setTimeout(function() {
        clearInterval(horaAtualTimer);
    }, 500);
    relogio.style.color = 'black';
    relogio.innerHTML = '00:00:00';
});
*/

// Solução Professor
function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');
    // const iniciar = document.querySelector('.iniciar');
    // const pausar = document.querySelector('.pausar');
    // const zerar = document.querySelector('.zerar');
    // Não precisamos mais de selecionar os botões acima, pois já está fazendo em document.addEventListener()
    let segundos = 0;
    let timer;

    function iniciaRelogio() {
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = `${criaHoraDosSegundos(segundos).slice(-8, relogio.length)}`;
        }, 1000);
    }

    // Minha variável está mantendo seu estado, e aqui não estamos atualizando os estados das variáveis

    document.addEventListener('click', function(e) {
        // console.log(e.target); // target - Vai me falar qual elemento está sendo clicado
        const el = e.target;
        
        if(el.classList.contains('iniciar')) {
            console.log('Você clicou em iniciar');
            relogio.classList.remove('pausado');
            clearInterval(timer); // Faz com que não crie 2 timers na mesma página
            iniciaRelogio();
        }

        if(el.classList.contains('pausar')) {
            console.log('Você clicou em pausar');
            relogio.classList.add('pausado');
            clearInterval(timer);
        }

        if(el.classList.contains('zerar')) {
            console.log('Você clicou em zerar');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }
    });

    /*
    iniciar.addEventListener('click', function(event) {
        relogio.classList.remove('pausado');
        clearInterval(timer); // Faz com que não crie 2 timers na mesma página
        iniciaRelogio();
    });

    pausar.addEventListener('click', function(event) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    });

    zerar.addEventListener('click', function(event) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        relogio.classList.remove('pausado');
        segundos = 0;
    });
    */
}
relogio();
