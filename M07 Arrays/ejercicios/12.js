function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  // var suma = 0;
  // arrayOfNums.forEach(element => {
  //   suma = suma + element
  // });
  // return suma;
  return arrayOfNums.reduce((suma, element) => suma + element, 0);
}

module.exports = agregarNumeros;
