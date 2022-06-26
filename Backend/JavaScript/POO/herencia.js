class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    detallePersona(){
        console.log(`Nombre: ${this.nombre} \nEdad: ${this.edad}`);
    }
}

class Empleado extends Persona{
    sueldo;
    constructor(nombre, edad, sueldo){
        super(nombre, edad); //Heredar constructor
        this.sueldo = sueldo;
    }
    detallePersona(){
        super.detallePersona(); //Heredar metodo
        console.log(`Sueldo: ${this.sueldo}`);
    }
}

const emp1 = new Empleado('Kevin', 26, 1000);
console.log(emp1);
emp1.detallePersona();