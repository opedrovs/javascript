// Funções recursivas - É uma função que ela mesmo se chama

// Recursividade tem um limite, e chegando no limite, ele vai parar de executar
function recursiva(max) {
    console.log(max);
    if (max >= 10) return; // Limite
    max++;
    recursiva(max); // Chamar a função de volta
}

recursiva(0);