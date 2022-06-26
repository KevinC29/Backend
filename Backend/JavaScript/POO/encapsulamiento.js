class Persona{
    #nombre //privado
    #edad
    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#detallePersona();
    }

    set setNombre(nombre){
        this.#nombre = nombre;
    }

    get getNombre(){
        return this.#nombre;
    }

    set setEdad(edad){
        this.#edad = edad;
    }

    get getEdad(){
        return this.#edad;
    }

    #detallePersona(){
        console.log(`Metodo Privado`);
    }
}



const p1 = new Persona('Kevin', 26);
console.log(p1);
p1.setNombre = 'Luis';
console.log(p1);