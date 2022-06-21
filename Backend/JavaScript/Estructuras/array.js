let array = ['Kevin', 15, 12.5, ];

console.log(array);

for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

//Agregar elementos
array.push(30);
console.log(array);

array.unshift('Dayanna');
console.log(array);

//Eliminar elementos
array.pop();
console.log(array);

array.shift();
console.log(array);

//Longitud
console.log(array.length);

//Indice
console.log(array.indexOf(15));