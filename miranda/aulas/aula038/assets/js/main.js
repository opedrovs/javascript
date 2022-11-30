const paragrafos = document.querySelector('.paragrafos'); // Selecionar a variável .paragrafos
const ps = paragrafos.querySelectorAll('p'); // Seleciona todos os parágrafos(p) na variável .paragrafos.

const estilosBody = getComputedStyle(document.body); // Pega todos os estilos computados css do body e coloca na variável estilosBody.
const backgroundColorBody = estilosBody.backgroundColor; // Pega específicamente a cor de fundo (backgroundColor) de estilosBody.
console.log(backgroundColorBody);

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody, p.style.color = 'white';
    p.style.color = '#FFFFFF';
}
