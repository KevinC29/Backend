class Persona{
    //Propiedades
    otro;

    //Constructor, las propiedades ya no se inicializan antes.
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    //Metodos
    imprimir(){
        console.log(this.nombre, this.edad);
    }
}

const p1 = new Persona('Kevin',26); // Se instancia el objeto
/*p1.nombre = 'Kevin';
p1.edad = 22;*/
const p2 = new Persona('Luis',27);

console.log(p1);
p2.imprimir();