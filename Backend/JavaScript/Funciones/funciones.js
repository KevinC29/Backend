//Funcion estructura
function saludo() {
    console.log('Hola Mundo');
}

//Funcion con parametros
function suma(num1, num2) {
    console.log(`Resultado: ${num1} + ${num2} = ${num1 + num2}`);
}

//Funcion con retorno
function saludo(nombre) {
    return `Hola ${nombre} desde la funcion`
}

//Funcion con valores de parametros predeterminados
function resta(num1 = null, num2 = null) {
    console.log(`Resultado: ${num1} - ${num2} = ${num1 - num2}`);
    if (num1 === null || num2 === null) {
        return '';
    }else{
        console.log('Error de datos: ingrese numeros para la funcion');
        return num1 - num2;
    }
}


/*  OUTPUTS
saludo();
suma(15,16);
const ej1 = saludo('Kevin');
const ej2 = saludo('Jeison');
console.log(ej1);
console.log(ej2);
const ej3 = resta(40,50);
console.log(ej3);
*/
