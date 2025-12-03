/* Ejemplo de Objeto Literal 
    - Util para configuraciones unicas
    - No escalable para crear multiples entidades
    - Facil de crear y usar 
    - Evitar tener decenas de variables sueltas


Symbol: 
Un Symbol es un tipo de dato primitivo introducido en ES6
Su caracteristica principal es que es unico e inmutabke.

Se utiliza principalmente para crear propiedades "ocultas" o identificadores 
únicos en objetos que no colisionen con otras claves (keys), 
incluso si tienen el mismo nombre descriptivo.
*/
const internalId = Symbol("id");

const literalUser = {
    [internalId]: "User-T100", 
    // no es igual a internalId de arriba si NO se usan corchetes
    name: "Alice",
    lastName: "Smith",
    age: 30,
    email: "alice@gmail.com",
    //El this no funciona en las arrow functions 
    getFullName(){
        //return `${literalUser.name} ${literalUser.lastName} ${literalUser.age}`;
        return `${this.name} ${this.lastName} ${this.age}`; // Este es mejor 
    },
    stringify() {
        return JSON.stringify(this);
    }
}
export{ literalUser}