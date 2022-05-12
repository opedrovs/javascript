function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    
    function receberEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        // colocamos "form.querySelector()" pois os nossos inputs estão dentro do <form class="form">, por isso do form
        // .value -> pegar o valor da variável

        function criarPessoa(nome, sobrenome, peso, altura) {
            return { nome, sobrenome, peso, altura };
        }

        const dados = criarPessoa(nome, sobrenome, peso, altura);

        pessoas.push(dados);
        console.log(pessoas);

        resultado.innerHTML += `<p>${dados.nome} ${dados.sobrenome} ${dados.peso} ${dados.altura}</p>`;
    };

    form.addEventListener('submit', receberEventoForm);
}
meuEscopo();