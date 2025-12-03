/*
Las clases en JavaScript (introducidas en ES6) son "azúcar sintáctico" 
sobre los prototipos, pero ofrecen una estructura mucho más limpia y 
familiar para programadores de otros lenguajes (como Java o C#).

Sus principales ventajas son:
Reutilización (Plantillas): Funcionan como un "molde". 
    Escribes la lógica una vez y creas (instancias) miles de objetos con ella.

Herencia (extends): Permite crear clases nuevas basadas en 
    otras existentes, heredando sus propiedades y métodos sin duplicar código.

Encapsulamiento: Facilita la protección de datos internos y 
    lógica sensible mediante campos privados (#).

O
rganización: Agrupa datos y comportamientos relacionados en un solo bloque lógico.

Recomendaciones para el nombre de las clases:
 - Usar un sustantivo o una combinación de sustantivo y adjetivo que describa claramente el propósito de la clase.
 - Utilizar la convención de PascalCase (cada palabra comienza con mayúscula y no se usan guiones bajos ni espacios).
 - Evitar abreviaturas o acrónimos que puedan generar confusión.
 - Asegurarse de que el nombre sea único dentro del contexto del proyecto para evitar conflictos.

*/

class User {
    //Plantilla de como va a funcionar mi objeto
    constructor(firstName, lastName, age, correoElectronico) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = correoElectronico;
    }
    /** Saludar */
    greet () {
        return `Hello, I'm ${this.firstName} ${this.lastName}, ${this.age} years old.`;
    }

}
export {User};

