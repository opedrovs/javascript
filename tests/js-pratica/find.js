let alunos = [
    {nome: 'josé', idade: 18},
    {nome: 'joão', idade: 16},
    {nome: 'maria', idade: 21}
]

let aluno = alunos.find(function(aluno) {
    return aluno.nome === 'joão'
})

console.log(aluno)