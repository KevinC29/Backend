let n1 = 10;

for (let index = 0; index < 12; index++) {
    console.log(`${n1} * ${index} = ${n1 * index}`);    
}

let age = [16,19,11,17,15];
let word = 'Kevin';


for (let dato in word) { //In para obtener el indice
    console.log(dato);
}
for (let dato of age) { //of para recuperar el dato
    console.log(`Años: ${dato}`);
}