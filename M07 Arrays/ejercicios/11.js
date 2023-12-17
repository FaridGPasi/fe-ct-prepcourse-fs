function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var elementoPorIndice = array.map( function (numero, indice){
    return numero * indice;
  })
  return elementoPorIndice;
}

module.exports = multiplicarElementosPorIndice;
