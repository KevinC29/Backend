let n1 = -10, aux;

if (n1 !== 0){
    if(n1 > 0){
        if (n1%2 == 0) {
            aux = `El numero ${n1} es PAR POSITIVO`;
        }else{
            aux = `El numero ${n1} es IMPAR POSITIVO`;
        }
    }else{
        if (n1%2 == 0) {
            aux = `El numero ${n1} es PAR NEGATIVO`;
        }else{
            aux = `El numero ${n1} es IMPAR NEGATIVO`;
        }
    }
}else{
    aux = `El numero ${n1} es NEUTRO`;
}


console.log(aux);