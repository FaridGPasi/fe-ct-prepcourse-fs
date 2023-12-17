function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  // if(arr instanceof Array){
  //   if(arr.length > 0){
  //     return true;
  //   }else{
  //     return false;
  //   }
  // }

  return Array.isArray(arr) && arr.length > 0;
}

module.exports = esArrayNoVacio;