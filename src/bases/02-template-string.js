//Template Strings: es una manera para concatenar strings, poner variables o resultados de operaciones dentro de strings.

const nombre = 'Alejandro', apellido = 'Almonacid';

//const nombreCompleto = nombre+' '+apellido;
const nombreCompleto =`${nombre} ${apellido} ${5*2}`;

console.log(nombreCompleto)

function getSaludo(/*Argumento*/ nombre){
    return 'Hola '+ nombre;
}

console.log(`Este es un texto: ${getSaludo(/*argumento*/ nombre)}`)