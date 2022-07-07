// Requisição AJAX com JS

// XMLHttpRequest - POde fazer aquisição de qualquer tipo de dado, XML, HTML...

// MODO ANTIGO
/*
const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error(xhr.statusText);
        }
    });
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase(); // Saber se é um link (<a></a>)

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

// function carregaPagina(el) {
//     const href = el.getAttribute('href'); // Pegamos o link dentro do href

//     request({ // Objeto direto
//         method: 'GET',
//         url: href,
//         success(response) {
//             carregaResultado(response);
//         },
//         error(errorText) {
//             console.log(errorText);
//         }
//     });
// }

function carregaPagina(el) {
    const href = el.getAttribute('href'); // Pegamos o link dentro do href

    const objConfig = {
        method: 'GET',
        url: href,
        success(response) {
            carregaResultado(response);
        },
        error(errorText) {
            console.log(errorText);
        }
    }

    request(objConfig);
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
*/

// MODO MODERNO
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase(); // Saber se é um link (<a></a>)

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href'); // Pegamos o link dentro do href

    const objConfig = {
        method: 'GET',
        url: href,
    }
    try { // Aqui poderiamos ter utilizado .then e .catch
        const response = await request(objConfig);
        carregaResultado(response);
    } catch (error) {
        console.log(error);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
