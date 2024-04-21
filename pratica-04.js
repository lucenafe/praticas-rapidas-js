// Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.

var statusAprovacaoAlunoNotaExtra = false;
var statusAprovacaoAlunoNotaRegular = false;

const resultado = statusAprovacaoAlunoNotaExtra || statusAprovacaoAlunoNotaRegular;

console.log(`Resultado do operador OR: ${resultado}`);

// operação mais complexa
// if (statusAprovacaoAlunoNotaExtra || statusAprovacaoAlunoNotaRegular) {
//     var status = 'O aluno foi aprovado, ou por Nota Extra ou Nota Regular!';
// } else {
//     var status = 'O aluno foi reprovado, tanto em Nota Extra, como Nota Regular!';
// }

// console.log(status);