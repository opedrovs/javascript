const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

console.log(tag, texto);

const container = document.querySelector('.container');
const div = document.createElement('div')

for (let i = 0; i <= elementos.length; i++) {
    div.innerHTML = `<${tag}> ${texto} </${tag}>`
}

container.appendChild(div)
