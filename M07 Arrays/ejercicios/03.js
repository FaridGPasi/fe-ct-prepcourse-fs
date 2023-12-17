function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  if(array.includes(elemento)) return true
  else return -1;
}

module.exports = encontrarElemento;
