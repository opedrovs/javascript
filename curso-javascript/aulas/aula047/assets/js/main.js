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
        data = new Date('1970-01-01 00:00:00');
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Remover o "PM" da data. Ex: 6:24:45 PM
    });
}

try {
    const data = new Date('01-01-1970 00:00:00');
    const hora = retornaHora();
    console.log(hora);
} catch(e) {
    // Tratar erro
    // console.log(e);
}

const timer = setInterval(function() {
    console.log(retornaHora());
}, 1000);

/*
iniciar.addEventListener('click', function(event) {
    const timer = setInterval(function() {
        relogio.innerHTML = `${retornaHora(data)}`
    }, 1000);
});*/

/*
pausar.addEventListener('click', function(event) {
    alert('cliquei no pausar')
});

zerar.addEventListener('click', function(event) {
    alert('cliquei no zerar')
});
*/
