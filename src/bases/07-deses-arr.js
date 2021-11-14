//Desestructuración de Arreglos

const personajes = ['Goku', 'Vegeta', 'Chespirito'];

const [ ,,p3 ] = personajes; 

console.log(p3)

//resultado = Chespirito

//vamos a extraer letras y numeros
const retornaArreglo = () => {
    return ['ABC',123];
}
const [letras,numeros] = retornaArreglo();
console.log(letras,numeros)

//trarea
//1. el primer valor del arr se llamará nombre y el segundo setNombre
const userState = ( valor ) => {
    return [ valor, () => { console.log('setNombre')}];
}

const [nombre, setNombre] = userState('Goku');
console.log(nombre)
setNombre();