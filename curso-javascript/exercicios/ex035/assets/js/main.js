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
