// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    nombre : "objeto",
    apellido : "anidado",
    propiedadesAnidadas : {
        color : "amarillo",
        altura : "170",
    },
    mostrarNombre : function () {
        return this.propiedadesAnidadas.color;
    }
};

module.exports = objetoAnidado;
