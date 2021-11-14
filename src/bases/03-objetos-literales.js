//Objetos Literales: trabajan con pares de valores
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 5557745,
        lat: 14.3232,
        lng: 25.3535,
    }
};

//console.table(persona)
// console.table(persona.nombre)
// console.table({persona:persona})

//Operador Spread: sirve para hacer un clon del objeto

const persona2 = {...persona};
persona2.nombre = 'Peter';

console.log(persona);
console.log(persona2);
