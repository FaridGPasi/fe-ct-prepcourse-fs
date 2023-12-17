function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for(const elemento of array){
    if(elemento.length > 5){
      return elemento;
    }
  }
  return undefined;
}

module.exports = obtenerPrimerStringLargo;
