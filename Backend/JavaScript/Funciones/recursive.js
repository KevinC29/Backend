//Funcion Recursiva
function factorial(num) {
    console.log(num);
    if(num > 1){
        num = num * factorial(num-1);
        console.log(num);
    }
    return num;
}

factorial(3);

