const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var cantidadPropiedades = 0;
  for(el in objeto){
    cantidadPropiedades++;
  }
  return cantidadPropiedades;
};

module.exports = contarPropiedades;
