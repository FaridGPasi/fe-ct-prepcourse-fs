function encontrarIndiceMayor(array) {
  // Convierte cada elemento del array a números
  var numeros = array.map(function(elemento) {
    return Number(elemento);
  });

  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  return numeros.indexOf(Math.max(...numeros));
}

module.exports = encontrarIndiceMayor;
