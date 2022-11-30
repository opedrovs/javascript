/*
function meuEscopo() {
    const elementos = [
        {tag: 'p', texto: 'Frase 1'}, // 0
        {tag: 'div', texto: 'Frase 2'}, // 1
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'}
    ];
 
    const [ ...resto ] = elementos;
    console.log(resto);
    const container = document.querySelector('.container');
    const div = document.createElement('div');

    for (let c = 0; c < elementos.length; c++) {
        div.innerHTML += `<${resto[c]['tag']}>${resto[c]['texto']}</${resto[c]['tag']}>`;
    }
    container.appendChild(div);
}
meuEscopo();
*/


// SOLUÇÕES DO PROFESSOR
/*
const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser.'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);
*/

/*
const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser.'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    div.appendChild(tagCriada);
}

container.appendChild(div);
*/

const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser.'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let { tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    
    tagCriada.appendChild(textoCriado);
    div.appendChild(tagCriada);
}

container.appendChild(div);
