const persona = {
    nombre : 'Kevin',
    apellido : 'Cumbicus',
    edad : 26,

    nombreCompleto(){
        return `${this.nombre} ${this.apellido}`
    },

    trajes : ['Traje 1', 'Traje 2', 'Traje 3'],

    direccion : {
        zip : '014664',
        pais : 'Ecuador',
        depart : 'Curco'
    }
}

console.log(persona.nombre);
console.log(persona.nombreCompleto());
console.log(persona.trajes);
console.log(persona.direccion.pais);

