// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

// EXEMPLOS

const pontuacaoUsuario = 500;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

// Cor de fundo

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';
// A cor padrão se baseia em qual cor o corUsario tem, se não tiver nenhum (null, 0, NaN, false...) a corPadrao escolherá a cor Preto.

console.log(nivelUsuario, corPadrao);


/*
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}
*/

// Exemplo de sistema de Aprovação e Reprovação
/*
const nome = 'Leonardo';
const idade = 21;
const nota = 5.6;
const aprovacaoAluno = nota >= 6 ? `APROVADO` : `REPROVADO`; // Aprova alunos que tiraram 6 para cima, e reprova os que tiraram 5 para baixo.
console.log(`O aluno ${nome} com ${idade} anos tirou nota de ${nota} pontos e foi ${aprovacaoAluno}`);
*/
