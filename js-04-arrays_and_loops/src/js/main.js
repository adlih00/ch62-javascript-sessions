
console.log("Sesion JS-04: Arrays y Bucles");

/*
Arreglos (ARRAYS)
Un Array es una estructura de datos que nos permite almacenar 
multiples variables en una sola variable 

Analogia: Una cajonera donde cada cajon tiene un numero 

para identificar que hay dentro 
*/
const myArray = [true, 42, "Hola", null, {nombre: "Juan" }, [1, 2, 3]]

// --- 1.- Definicion --- 
// Sintaxis moderna: Usamos corchetes [] (Array Literal)
// Nota: Usamos 'const' aunque el contenido cambie. Lo que es constante 
// es la referencia en memoria, no los datos internos 
// Se recomienda usar nombres prulareles 

const frutas = []; //empy array 
const fruits = new Array(); // array using constructor (less common)

const numeros = [5 ] // Array con un solo elemento 
const numbers = new Array (5);// array with 5 empty slots  [ < 5 empty items>]

// --- 2- Acceso a Elementos --- 
// Los indices comienzan en 0 (zero-based indexing)
// [0] -> Primer elemento 
// [length - 1] -> Ultimo elento

const techStack = ["HTML", "CSS", "JavaScript"];

// Accediendo al primer elemento 
console.log(techStack.length); // 3
console.log(`Accediendo al primer elemento: ${techStack[0]}`); // "HTML" 
// Accediendo al segundo elemento 
console.log(`Accediendo al primer elemento: ${techStack[1]}`); // "CSS"
// Accediendo al ultimo elemento (longitud -1 )
console.log(`Accediendo al primer elemento: ${techStack[techStack.length - 1 ]}`); //"JavaScript"

// --- 3.- Modificando los elementos 
techStack[1] = "Sass"; // cambio de Css por Sass
console.log("Despues de la modificacion: ", techStack);// HTML Sass JavaScript 
// Agregar un nuevo elemento al final 
// techStack[3]
techStack[ techStack.length ] = "TypeScript";//["HTML", "Sass", "JavaScript", "TypeScript"]

/*
Bloque 2: Metodos de arrays 
*/
const shopingList = ["Leche", "Huevos"]; 

//1.-
shopingList.unshift("Cafe");
console.log("Unshift:", shopingList);