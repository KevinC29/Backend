const palindromo = (palabra) => {
    palabra = palabra.replace(' ','');
    palabra = palabra.toLowerCase();

    let palabraInvertida = palabra.split('').reverse().join('');

    //console.log(palabraInvertida);

    if (palabra === palabraInvertida) {
        return true;
    }else{
        return false;
    }
}

/*console.log(palindromo('carro'));
console.log(palindromo('ana'));*/

let palabra = prompt('Ingrese una palabra');
let resultadoPalindromo = palindromo(palabra);

if(resultadoPalindromo){
    document.write('La Palabra es Palindromo');
}else{
    document.write('La Palabra no es Palindromo');
}