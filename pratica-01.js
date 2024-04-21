// Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

var valorSaldoBancario = 1000;
var valorDeposito = 700;
var valorSaque = 200;

var operacao = valorSaldoBancario + valorDeposito - valorSaque;

console.log(`O saldo disponível é de: ${operacao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. Deseja efetuar outra operação?`);