function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var suma = resultadosTest.reduce((suma, elemento) => suma + elemento, 0);
  return suma / resultadosTest.length;
}

module.exports = promedioResultadosTest;
