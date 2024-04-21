const notas = [10, 6, 8, 5.5, 10];

//com o método pop(), sempre retiramos o último elemento do array

notas.pop();

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media.toFixed(2));

// exemplo de métodos
// (9.999).toFixed(2); // toFixed é um método de Number
// 'string'.toUpperCase(); // toUpperCase é um método de String
// [1, 2, 3].push(4); // push é um método de Array
