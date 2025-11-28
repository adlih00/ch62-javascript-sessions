console.log("Session JS01 -Data Types");

// TODO: Declara 3 variables para un perfil de usuario ficticio
const userName = "John Doe"; // String
let userAge = 30; // Number
let isMember = true; // Boolean     
//Usar const cuando no se va a reasignar el valor 

// ---Template Literals--- (Backticks ``)
// Permite la interpolación ${} y saltos de línea. Mas limpio que concatenar con +

const firstName = "Daniel";
let currentAge = 24;
const currentNationality = "Mexican";

// De las variables anteriores muestra en console el sig. mensaje:
// "My name is Daniel, I am 24 years old and I am Mexican."

console.log(`My name is ${firstName}, I am ${currentAge} years old and I am ${currentNationality}.`);

// 3.- Datos primitivos: Number y bigint
// JavaScript tiene un solo tipo para enteros y decimales: 'Number' 
// Number: de 64 bits para representar valores entero y de punto flotante +infinity, -infinity y NaN (not a number)

const gravityEarth = 9.81; // m/s^2 Aceleracion debido a la gravedad en la Tierra
console.log( typeof gravityEarth); // number    

// Tipos de datos Number 
// positivos 
// negativos
// NaN 
// infinity -Infinity

console.log ( typeof 3.141591 ); // 'number'
console.log ( typeof 3*3 ); // 'number'
console.log ( typeof "" ); // 'string'
console.log ( typeof " " ); // 'string'
console.log ( typeof 3*"pitufo trabajador" ); // NaN
console.log ( typeof (3*"pitufo trabajador") ); //number
console.log ( typeof NaN ); // 'number'
console.log ( typeof +Infinity ); // 'number'
console.log ( typeof ( 3 + "Viernes tematico" ) ); // 'string'
console.log ( typeof ( "3Viernes tematico" ) ); // 'string'
console.log ( 4 / 0 ); // +infinity 
console.log ( typeof ( -4 / 0 ) ); // 'number' 
console.log ( "4" * "2" ); // 8  'number' 
console.log (typeof  ( "4" * "2" ) ); // 'number'
console.log (typeof  (8) ); // 'number'
console.log ( typeof "4" * "2" ); // NaN
console.log ( typeof ( 'string' * "2" ) ); // 'NaN

console.log ("---- Precision ----");
console.log(`0.1 +0.2 = ${0.1 + 0.2}`); // 0.30000000000000004 (Ojo en entrevistas) Perdida de precision

console.log("---- Limites ----");
console.log(`Entero seguro máximo: ${Number.MAX_SAFE_INTEGER}`); // 9007199254740991
console.log( `MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1 }`); // 9007199254740992
console.log( `MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2 }`); // 9007199254740993
console.log( `MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3 }`); // 9007199254740994
console.log( `MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4 }`); // 9007199254740995
console.log( `MAX_SAFE_INTEGER + 5: ${Number.MAX_SAFE_INTEGER + 5 }`); // 9007199254740996

/*
 Tipos de datos BigInt
 Sirve para representar valores numéricos enteros, de los que el
 tipo number no pueda representar o no es seguro.

 Las operaciones con un bigInt se debe hacer con otro bigInt

*/
const myBigInt = 9007199254740991n;
console.log( typeof myBigInt ); // bigint
console.log( `Resultado de myBigInt + 1n: ${ myBigInt + 1n }`); // 9007199254740992
console.log( `Resultado de myBigInt + 2n: ${ myBigInt + 2n }`); // 9007199254740993
console.log( `Resultado de myBigInt + 3n: ${ myBigInt + 3n }`); // 9007199254740994
console.log( `Resultado de myBigInt + 4n: ${ myBigInt + 4n }`); // 9007199254740995
console.log( `Resultado de myBigInt + 5n: ${ myBigInt + 5n }`); // 9007199254740996
console.log( `Resultado de myBigInt + 6n: ${ myBigInt + 6n }`); // 9007199254740997
console.log (typeof (myBigInt + 6n) ); // bigint

// 4.- Datos primitivos: Boolean NULL e Undefined 
// Boolean: true o false
// Null: ausencia intencional de valor 
// Undefined: valor no asignado (automatico) 

let currentTask; 
console.log (`Valor de currentTask: ${currentTask}`); // undefined

currentTask = "Iniciar sesion"; 
console.log (`Valor de currentTask: ${currentTask}`); // Iniciar sesion

currentTask = null;
console.log (`Valor de currentTask: ${currentTask}`); // null


// 5.- Conversion de datos (Type Casting)
// Transformar un tipo de dato en otro

// 5.1 Conversion implicita
// JS intenta "ayudarte" convirtiendo tipos automaticamente
console.log("--- Implicita ---");
console.log("5" + 2); //"52" Concatena por que hay un string
console.log("5" - 2); //3 Convierte el string a number
console.log("5" * "2"); // 10 

const myNumber = "10";
console.log(`Multiplicacion: ${myNumber * 2}`); //20
                            // 10 * 2 = 20
console.log(typeof myNumber); // string 

// 5.2 Conversion explicita (Recomendada)
// Nosotros controlamos el cambio.
// Opciones:
// Number(): Convierte todo o devuelve NaN si hay letras.
// parseInt(): Busca enteros al inicio.
// parseFloat(): Busca decimales al inicio.

/* 
Number() VS parseInt() y parseFloat() 
Number devuelve NaN si la cadena contiene algun caracter no numerico
Con parseInt y parseFloat, si la entrada comienza con un valor no numerico devuelve NaN ("123abc" -> 123 , "abc123" -> NaN)
parseInt convierte solo la parte entera 
parseFloat convierte la parte entera y decimal
parseInt y parseFloat realizan la conversion hasta encontrar un caracter no numerico  
*/
console.log( Number("68.58") ); // 68.58
console.log( parseInt("68.58") ); // 68
console.log( parseFloat("68.58") ); // 68.58 

console.log( Number("68.58 dolares") ); // NaN
console.log( parseInt("68.58 dolares") ); // 68
console.log( parseFloat("68.58 dolares") ); // 68.58 

console.log( Number("$68.58 dolares") ); // NaN
console.log( parseInt("$68.58 dolares") ); //NaN
console.log( parseFloat("$68.58 dolares") ); // NaN

console.log( Number("68-58")); // NaN
console.log( parseInt("68-58")); // 68
console.log( parseFloat("68-58")); // 68

console.log( Number( true) ); // 1
console.log( Number( false) ); // 0

console.log( Number( [] ) ); // 0
console.log( Number( [30] ) ); // 30
console.log( Number( [30,40] ) ); // NaN  

// Conversion a boolean
// En la conversion a boolean los siguentes valores son falsos 
// "" (cadena vacia) 0, NaN, null, undefined
console.log( Boolean(1) ); // true
console.log( Boolean(10000) ); // true
console.log( Boolean(-10000) ); // true
console.log( Boolean(0) ); // false


console.log( Boolean("") ); // false
console.log( Boolean(" ") ); // true
console.log( Boolean("i") ); // true
console.log( Boolean("0") ); // true

// Conversion explicita a string
console.log( String( 123 ) ); // "123"
console.log( String( 12.34 ) ); // "12.34"
console.log( "Mi numero es " + 12.34); // "Mi numero es 12.34"
console.log( "Mi numero es " + String(12.34)); // "Mi numero es 12.34"
console.log( String( true ) ); // "true"
console.log( String( null ) ); // "null"  
console.log( String( undefined ) ); // "undefined"
console.log( String( [] ) ); // "" (cadena vacia)
console.log( String( [2,3,4,5,null,3] ) ); // "2,3,4,5,null,3"


console.log( JSON.stringify( {name:"Serch", active:true})); // "{"name":"Serch","active":true}"

const calificaciones = [9,6,5,9];
console.log("Mi calificacion es " + calificaciones); // "Mi calificacion es 9,6,5,9"
console.log( {name:"Serch", active:true} ); // "[object Object]"



// Resumen : 

// Number()
// [] (empty array) -> 0 [30] -> 30 [30,40] -> NaN, false -> 0, true -> 1

// Strring() 
// [] -> "", [12,2]


//




