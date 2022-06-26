//Clase
function Persona(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`${this.nombre} ${this.edad}`)
    }
}

const p1 = new Persona('Kevin', '22');
const p2 = new Persona('Luis', '25');
const p3 = new Persona('Carlos', '27');

console.log(p1.nombre);
p2.imprimir();