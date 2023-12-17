function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  let arrayOrdenado = array.sort(function(a, b) {
    return a - b;
  });
  return arrayOrdenado;
}

module.exports = ordenarArray;
