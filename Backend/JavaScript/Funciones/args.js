//Funcion que recibe varios argumentos indeterminados
function suma(...args) {
    console.log(args);
    let suma = 0;
    for (let index of args) {
        suma += index;
    }
    return suma;
}


const result = suma(40,50,60);
console.log('La suma es: ', result);