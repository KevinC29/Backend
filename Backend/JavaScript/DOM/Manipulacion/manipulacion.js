document.querySelector('html');
document.querySelectorAll('div');

document.querySelector('html').lang = 'es';
document.querySelector('tittle').innerText = 'dom';  
document.querySelector('tittle').innerHTML = 'dom';  //Reemplaza todos los elemntos

document.querySelector('body').innerText = <h1>Hola</h1>; //Agrega al body como texto
document.querySelector('body').innerHTML = <h1>Hola</h1>; //Reemplaza todos los elemntos

document.querySelector('.caja');
document.querySelectorAll('.caja'); //NodeList

document.getElementsByClassName('caja'); //HTMLCollection
document.getElementById('caja1');
document.querySelector('#caja1');

let caja = document.querySelector('#caja1');
let caja1 = document.querySelector('#caja1');
let btn = document.createElement('button');
caja1.append(btn); //Agregamos el boton al div caja1
btn.innerText = 'Boton 01'; //Llenamos el boton
btn.classList.add('btn'); //Agregamos una clase