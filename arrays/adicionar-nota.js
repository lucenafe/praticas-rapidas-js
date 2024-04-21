const notas = [10, 6, 8];

// método push - adiciona no array (no final)
// const pode ser usado com array (nao precisa se prender ao let)

notas.push(7);

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);