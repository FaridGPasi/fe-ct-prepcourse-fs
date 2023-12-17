function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if(numeros.length === 0){
    return null;
  }
  let numero = numeros[0];
  for(let i=1; i < numeros.length; i++){
    if(numeros[i] === numero+1){
      numero = numeros[i];
      continue;
    }else{
      return numeros[i]+1;
    }
  }
  return null;
}

module.exports = encontrarNumeroFaltante;