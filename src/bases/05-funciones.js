// Funciones en JS

function saludar(nombre){
    return `Hola ${nombre}`
}

// Funcion Flecha
//
const saludar2 = (nombre) =>{return `Hola ${nombre}`}
const saludar3 = (nombre) => `Hola ${nombre}`;
const saludar4 = () => `Hola mundo`;

console.log(saludar("Alejandro"));
console.log(saludar2("Patricio"));
console.log(saludar3("Almonacid"));
console.log(saludar4());

const getUser = () => 
    ({
        uid: 'ABC123',
        username: 'alealmonacid'
    });


console.log(getUser())

//tarea
//Retornar objeto implicito
//testear

//Funcion Flecha
const getUsuarioActivo = (nombre) =>
//objeto implicito
    ({
        uid: 'ABC567',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo)