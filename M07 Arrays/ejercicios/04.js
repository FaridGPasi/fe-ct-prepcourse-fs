function obtenerElementoAleatorio(array) {
  // Devuelve un elemento aleatorio del arreglo array.
  // PISTA: Usa el método Math.random().
  // Tu código:
// Verificar si el array no está vacío
  if (array.length === 0) {
    return undefined; // Si el array está vacío, devuelve undefined
  }

  const indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

module.exports = obtenerElementoAleatorio;
