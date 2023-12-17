function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let max=0, min=0, producto = 0;
  if(a>b){
    max = a;
    min = b;
  }else{
    min = a;
    max = b;
  }
  for(let i = min; i <= max; i++){
    producto *= i;
  }
  return producto;
}

module.exports = productoEntreNúmeros;