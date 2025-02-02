function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:
  var arregloResultados = [];

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue; // Se salta la iteración cuando i es igual a 5
    }

    num += 2;
    arregloResultados.push(num);
  }

  return arregloResultados;
}

module.exports = continueStatement;
