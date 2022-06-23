const numPrimo = (numero)=>{
    let cont = 0;

    let numeros = [];
    for (let index = 0; index < numero; index++) {
        numeros.push(index+1);       
    }

    console.log(numeros);
    console.log(numeros.length);

    for (let i of numeros) {
        if(i === 1 || i === numero){
            continue;
        }
        if(numero % i === 0){
            cont++;
        }
    }

    return cont === 0;

}

console.log(numPrimo(5));

let numero = Number(prompt('Ingrese el numero'));

if(numPrimo(numero)){
    document.write(`El numero ${numero} es primo`);
}else{
    document.write(`El numero ${numero} no es primo`);
}