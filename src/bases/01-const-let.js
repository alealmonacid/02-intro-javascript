// Variables y Constantes

// Chaito var

//const : variables que no van a cambiar o no se van a renombrar
//let : variables que no se pueden repetir, si queremos cambiar el valor del let hay que llamar a la variable sin let, se pueden repetir en bloques


const nombre = 'Alejandro', apellido = 'Almonacid';
let valorDado = 5;

if (true) {
    const nombre = 'Patricio';
    let valorDado = 6;
    console.log(valorDado, nombre)
}

console.log(nombre, apellido, valorDado)