// Fetch API - que seria maisomenos uma melhoria para XMLHttpRequest, com 1 ou 2 linhas de código, iremos reescrever a função request, utilizando fetch api 

// Fetch API retorna Promises, por isso precisa do .then e .catch ou utilizar os async await 

// XMLHttpRequest
// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();
    
//         xhr.addEventListener('load', () => {
//             if(xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText);
//             }
//         });
//     });
// };

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase(); // Saber se é um link (<a></a>)

    if(tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
});

// Utilizando async await
async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href'); // Pegamos o link dentro do href
        const response = await fetch(href);
        
        if(response.status !== 200) throw new Error('ERRO 404!');
    
        const html = await response.text();
        carregaResultado(html);
    } catch(e) {
        console.log(e);
    };
}

// Utilizando .then e .catch
// function carregaPagina(el) {
//     const href = el.getAttribute('href'); // Pegamos o link dentro do href

//     fetch(href)
//         .then(response => {
//             // Aqui estou assumindo o ERRO 404, que não encontrou a página, mas poderia ser um erro interno do servidor, qualquer outro erro que não é 404.
//             if(response.status !== 200) throw new Error('ERRO 404!');
//             return response.text();
//         })
//         .then(html => carregaResultado(html))
//         .catch(e => console.log(e));

// }

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}




// Caso eu queira acessar a pagina001.html, usando exemplo utilizando o fetch

// fetch('pagina001.html')
//     .then(resposta => {
//         if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO'); // Colocando um eror no then, automaticamente ele é enviado ao catch (na qual, poderemos trata-lo)
//         return resposta.text();
//     })
//     .then(html => console.log(html))
//     .catch(e => console.error(e)); // Abaixo sobre o console.error()

// Sobre o console.log(), ele apenas loga um texto comum na tela, e não um erro, se você quiser um alerta, coloca console.warn(). Se você quer um erro, coloca console.error()
