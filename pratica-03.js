// Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

var statusLogin = true;
var acessoAdministrador = false;

const resultado = statusLogin && acessoAdministrador

console.log(resultado);

// forma mais complexa

// if (statusLogin && acessoAdministrador) {
//     var permissoes = 'O usuário está logado e possui permissões de edição';
// } else {
//     var permissoes = 'O usuário não está logado ou não possuí permissões de edição';
// }

// console.log(permissoes);