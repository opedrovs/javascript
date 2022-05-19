const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) { // Verifica se você clicou Enter no teclado
    if (e.keyCode === 13) {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    // botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa'); 
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
    if (!inputTarefa.value) return; // Ele retorna nada, caso inputTarefa não tenha nenhum valor.
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        // console.log(el.parentElement); // Descobrir o Pai do elemento
        el.parentElement.remove();
        salvarTarefas();
    }
})

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        // replace para trocar "Apagar" por nada (''), e trim para tirar espaçinhos da letra (esquerdo e direito, mas NÃO os do meio).
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // JSON.stringify - converte elemento JavaScript para uma string no formato JSON
    localStorage.setItem('tarefas', tarefasJSON) // Esse é um local no navegador onde pode salvar coisas, como se fosse uma mini base de dados que está no navegador, e só pode salvar strings.

    // localStorage.setItem('tarefas', tarefasJSON) - 'tarefas' é o nome que você vai usar para recuperar esse valor de novo, e o valor disso é o tarefasJSON.
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // JSON.parse - convertendo de volta para um objeto JavaScript

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();
