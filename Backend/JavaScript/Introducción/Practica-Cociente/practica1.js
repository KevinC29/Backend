//Variables

let n1, n2, cociente, residuo;

//Inputs
n1 = Number(prompt('Ingrese el primer numero: '));
n2 = Number(prompt('Ingrese el segundo numero: '));

//Process
cociente = n1/n2;
residuo = n1%n2;

//Outputs
document.write('Cociente: ' + cociente + '<br>');
document.write('Residuo: ', residuo);