console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
Legibilidad: Hacer que el código sea más claro y fácil de entender.
Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
Evitar efectos secundarios: Una función no debe modificar variables externas.

*/


/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
------- Funciones declarasdas -------
(function declaration, function statement)

hoisting: comportamiento en 

*/
console.log(saludar("Johan")); // undefined porque la funcion saludar() no retorna nada
//console.log( console.log("Saludo dentro de un console.log") ); //


function saludar(nombre){
    console.log(`Hola ${nombre}, que vas a comer hoy?`);
    return;
}

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.
sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/

/**  
 * Funcion que reciber nombre y apeido y retorna el nombre completo 
 * Esto es un comentario de funcion, se le asigna este comentario a la funcion 
 * @param {string} firstName - El primer nombre de la persona
 * @param {string} lastName - El apellido de la persona
 * @return - Concatenacion del nombre y apellido de la persona 
 * 
*/
const printFullName = function (firstName, lastName){
    return `${firstName} ${lastName} estudiante de la ch62 `;
};
console.log( printFullName("Johan", "Gonzales") ); // Para mover codigo alt y flecas arriba y abajo 

/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una sola instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/
// Convertir la funcion a Funcion flecha

const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido} estudiante de la Ch62`;

console.log ( nombreCompleto("Juan", "Perez") );

/* 
-------- Parametros por defecto  --------
        (default parameters)
Inicializamos un parametro de la funcion, si no se envia el argumento cuando se incova
*/
const makeCoffe = ( type = "Americano" ) => `Preparando un café ${type}`;
console.log( makeCoffe("Latte") ); // Preparando un café Latte
console.log( makeCoffe() ); // Preparando un café undefined, porque no se le agrego argumento 
// agregamos el ="Americano" como parametro por defecto, asi ya no tenemos undefined

// Generar una funcion que calcule el area de un rectangulo
// Usando parametros por defecto para largo y ancho
const areaRectangulo = ( base = 2, altura = 4 ) => base * altura;
console.log( `El area del rectangulo es: ${ areaRectangulo(5,3) }` ); // 15
console.log( `El area del rectangulo es: ${ areaRectangulo() }` ); // 2 * 4 = 8
//`El area del rectangulo es: ${ areaRectangulo() }`; // 7 * 4 = 28, si solo se envia un argumento, el otro sera el por defecto

// Ejemplo de uso de default parameters 
console.log(`Vales 1000, estoy diciendo que vales: ${parseInt("1000")}`); // 1000
console.log(`Vales 1000 base 2, estoy diciendo que vales: ${parseInt("1000",2)}`); // 8


/*
Pase de datos:
- Por valor: Se crea una copia independiente del dato. 
Si modificas la copia, el original NO cambia.
- Por referencia: Se pasa la dirección de memoria (referencia), 
no el dato en sí. Si modificas algo a través de esa referencia, el original SÍ cambia.

*/

/* 
-------- Funciones callback  --------
Es una funcion(definida, exppresada, arrow, anonima) que se pasa a otra funcion 
como argumento. 
Se pasa en el argumento como referencia (sin parentesis). 

*/
// Mal diseño: Cada vez que quieras una operacion nueva, modificas esta funcion 
const calculateBad = (a, b, type) => {
    if (type === "sum") return a + b;
    if (type === "substract") return a - b;
}
// Aplicando funcioones callback
// 1. La función principal está "Cerrada" (no la tocamos más)
const calculate = (a, b, operationFunction) => {
    return operationFunction(a, b);
};
/*
console.log(`Usando incorrectamente la funcion: ${caculate(5,3,10)}`); // NaN
*/
//2.- Definimos operaciones basicas 
const substract = (a, b) => a - b;
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const division = (a, b) => a / b;
const residuo = (a, b) => a % b; 

console.log(`Usando incorrectamente la funcion: ${calculate(5,3,substract)}`);//2
console.log(`Usando incorrectamente la funcion: ${calculate(5,3,multiply)}`);//15
console.log(`Usando incorrectamente la funcion: ${calculate(5,3,add)}`);//8
console.log(`Usando incorrectamente la funcion: ${calculate(5,3,division)}`);//8

// Aplicar una funcion que calcule, la poterncia de un numero 
console.log(`Realizando una potencia:${calculate(6,3,(a,b) => a ** b)}`); // 216
// Tambien se puede hacer con Math.pow(a,b)
// En este caso no se puede volver a llamar la potencia 
//Aplicar una funcion que calcule el residuo de una division para saber si es divisible entre 3
console.log(`Calculando el residuo de una division: ${calculate(6,3,(a,b) => a % b)}`); // 0

// Variables globales 
var a = 10;
let b = 20;
const c = 30;
const d = 40;
const e = 50;
const f = 60;
const g = 70;

const cambairValores = (a, b, c) => {
  // Muchas instrucciones
  // No se puede usar la variable g dentro de la funcion, porque no existe en este contexto
  
    a = 100;
    b = 200;
    c = 300;
    // Variables locales de la funcion 
    var d = 400;
    let e = 500;
    const f = 600;
    console.log(a,b,c); 
    // se desechan las variables locales al terminar la funcion
}



