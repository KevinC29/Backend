let aux = 0;
while (aux < 10) {
    aux++;
    if (aux === 5) {
        console.log('Fin del Bucle');
        continue; //or break
    }
    console.log(aux);
}