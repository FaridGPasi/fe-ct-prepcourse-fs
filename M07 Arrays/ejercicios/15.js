function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var anterior = array[0];
  for (let i = 1; i < array.length; i++) {
    if (anterior !== array[i]) {
      return false; // Si encuentra un elemento diferente, retornar false
    }
  }

  return true;
}

module.exports = todosIguales;
