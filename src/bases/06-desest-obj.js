// Desestructuración de objeto
// Asignación Destructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan'
};

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

//asi se hace la asignación desestructurante
//extrae lo que hay en las llaves al objeto persona
// const {nombre} = persona;
// const {nombre:nombre2} = persona;

// const {edad, clave, nombre} = persona
// console.log(edad)
// console.log(clave)
// console.log(nombre)

// const retornaPersona = ({usuario}) => {
//     const {edad, clave, nombre} = usuario;

//     console.log(edad,clave,nombre);
// }

// const retornaPersona = ({nombre}) => {

//     console.log(nombre);
// }
//useContext
const test = ({clave, nombre, edad, rango = 'Capitán'}) => {

    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.123456,
            lng: 123.4567
        }
    }
    
}

const {nombreClave, anios, latlng:{lat,lng}} = test(persona);

console.log(nombreClave, anios)
console.log(lat,lng)
// retornaPersona(persona)