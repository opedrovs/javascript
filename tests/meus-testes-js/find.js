let alunos = [
    {nome: 'maria', idade: 17},
    {nome: 'joao', idade: 18},
    {nome: 'guilherme', idade: 21},
    {nome: 'eduardo', idade: 16}
]

let aluno = alunos.find(function(aluno) {
    return aluno.nome = 'joao'
})

//console.log(alunos)
console.log(aluno)