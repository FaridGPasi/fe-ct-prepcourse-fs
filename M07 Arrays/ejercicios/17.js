function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var arreglo = [];
  for(let i=0; i<=10 ; i++){
    arreglo.push(i*6);
  }
  return arreglo;
}

module.exports = tablaDelSeis;
