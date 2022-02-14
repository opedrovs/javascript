let alunos = [
    {nome: 'pablo', idade: 19},
    {nome: 'ricardo', idade: 18},
    {nome: 'leonardo', idade: 23},
    {nome: 'gustavo', idade: 32}
]

let aluno = alunos.find(function(aluno) {
    return aluno.nome === 'leonardo'
})

console.log(aluno)