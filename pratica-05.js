// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.

var regraIdadeMinimaCompra = 18;
var idadeUsuario = 17;

if (idadeUsuario >= regraIdadeMinimaCompra) {
    var podeComprar = 'O usuário está habilitado a comprar!';
} else {
    var podeComprar = 'O usuário não está habilitado a comprar!';
}

console.log(podeComprar);