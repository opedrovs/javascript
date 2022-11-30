// Vamos introduzir o JSON e uma ferramenta chamada Axios, similar ao fetch API, que também retorna Promises, e também mais simples de utilizar, por conta de um passo a menos, na hora de entregar os dados, ele não te retorna uma Promise novamente para você conveter os dados e pegar o resultado

// Vamos utilizar o Fetch API para buscar os dados de pessoas.json




// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json));

// Utilizando axios
axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');

    for(let pessoa of json) {
        const tr = document.createElement('tr');

        // let td = document.createElement('td');
        // td.innerHTML = pessoa.nome;
        // tr.appendChild(td);

        // td = document.createElement('td');
        // td.innerHTML = pessoa.idade;
        // tr.appendChild(td);

        // td = document.createElement('td');
        // td.innerHTML = pessoa.salario;
        // tr.appendChild(td);
        
        // table.appendChild(tr);

        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        // let td3 = document.createElement('td');
        // td3.innerHTML = pessoa.salario;
        // tr.appendChild(td3);
        
        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}

// O que fizemos basicamente, buscamos o JSON e carregamos dentro de elementos da página. Exemplo detalhado:
// Fatch -> Para buscar os dados desse json (pessoas.json)
// .then -> Temos 2 then, por conta que pegamos a resposta do primeiro then, convertemos para json, o que retornou uma nova Promise, e pegamos a nova Promise, mandou para nossa função que criamos.
// Função carregaElementosNaPagina -> Criamos uma tabela, e criar uma linha (tr), com 3 dados (td) para cada pessoa, e adicionamos a linha a tabela
