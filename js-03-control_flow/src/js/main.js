
// --------- Condicional if-else ------------
/*
= asignacion, asigna un valor 
== operador de igualdad, para saber si dos valores son iguales,
este hace conversion implicita 
=== operador estrictamente igual 
si no son del mismo tipo, es false. No hace conversiones. 

*/
let isActive = true ;

if(isActive === true) console.log("El usuario esta activo");  // lo mas basico 
if(isActive == true) console.log("El usuario esta activo"); 
// No importan las tabulaciones, saltos de linea o espacios, pero se recomienda por legibilidad 
if(isActive === true){
    console.log("El usuario esta activo");  
};
if(isActive){   // solo con variables booleanas
    console.log("El usuario esta activo");  
};
// Bloque de codigo: 
// Conjunto de sentencias agrupadas entre llaves {...}
{
    let firtsName = "Juan";
    let lastName = "Perez";
    var alias = "Juanpi";
    let age = 28;

    console.log(firtsName,lastName,alias); // Juan Perez Juanpi
    { // Bloque de codigo anidado 
        let firtsName = "Sergio";
        let lastName = "Torres";
        var alias = "serch";
        var alias = "Serchmo" //Redeclaracion
        console.log(firtsName, lastName, alias, age); // Sergio Torres Serchmo 28 
    }
    console.log(firtsName, lastName, alias, age); // Juan Perez Serchmo 28
}
//console.log(firtsName, lastName, alias, age); // firstName, lastName y age no estan 
//declaradas, porque let no tiene alcance de bloque. Alias si existe porque var no tiene 
// alcance de bloque de codigo a diferencia de let 
console.log(alias);

// Diferencia entre var, let y const 
// Var y let pueden cambiar su valor, const no 
// var no tiene alcance de codigo a diferencia de ley y const 
// var es el unico que se puede redeclarar 
// let y const no se pueden redeclarar en el mismo scope 

/*
  Realizar una funcion (arrow function) que reciba un numero como valor de temperatura
  Si la temperatura es mayor a 25 ° retornar "Hace calor"
  en caso contrario "Hace frio"
  imprimir el valor de retorno por la consola 

*/
const evaluarTemperatura = (temperatura) => {
  if (temperatura >= 25) {
    return "Hace calor";
  } else {
    return "Hace frío";
  }
};

// Imprimir el resultado en consola
console.log(evaluarTemperatura(25));
console.log(evaluarTemperatura(23));
console.log(evaluarTemperatura(29));
// ief else if 
const checkTemperature = (temperature) => {
     let message = ""
    if (temperature > 25) {
        message = "Hace calor"
    }   else if (temperature >= 15 && temperature <= 30){ 
        message = "Temperatura agradable"
    }    else if  (temperature < 15 && temperature >= 0){ 
        message = "Hace mucho frio"
    }     
    return message;
}


//Operadores AND && y OR ||
/*
Operador de corto circuito .
OP1 && OP2 Si OP1 es verdadero, retorna la expresion OP2
Si OP1 es falso, se retorna la expresion de OP1, ya no evalua OP2
OP1 || OP2 Si OP| es verdadero, se retorna la expresion de OP1
Si OP1 es falso, se retorna la expresion de OP2

se consideran falsos: "", 0, null undefined, NaN
*/ 
console.log( true && true ); // false
console.log( true && "Usando corto circuito"); // "usando corto circuito"
console.log( "false" && "Mi mente sigue de vacaciones"); // "Mi mente sigue de vacaciones"
console.log( 0 && "Chau chau" ); //0
console.log( "" && "Chau chau" ); // ""
console.log( false && "Chau chau"); // false

console.log( true || false); // true 
console.log( true || "Usando corto circuito"); //true 
console.log( "false" || "Mi mente sigue de vacaciones"); // "false"
console.log( 0 || "Chau chau"); // "Chau chau"
console.log( "" || "Chau chau"); // "Chau chau"
console.log( false || "Chau chau"); //"Chau chau"
console.log( false || undefined); // undefined
console.log( "Activado" && undefined); // undefined 

const isLoggedIn = true;
if(isLoggedIn){
    console.log("El usuario esta logueado");
}   else {
    console.log("El usuario no esta logueado");
}

console.log( isLoggedIn && "El usuario esta logueado" || "El usuario no esta logueado" )

/*
Realizar una funcion que reciba un codigo (weatherCode) de temperatura
de acuerdo al codigo recibido retornar un mensaje 
Code	Description
0	Clear sky
1, 2, 3	    Mainly clear, partly cloudy, and overcast
45, 48	    Fog and depositing rime fog

*/
const weatherCode = (code) => {
    let message = ""
    if (code === 0 ) {
        message = "Clear sky"
    }   else if (code === 1 || code === 2 || code === 3){ 
        message = "Mainly clear, partly cloudy, and overcast"
    }    else if  (code === 45 || code === 48  ){ 
        message = "Fog and depositing rime fog"
    }   else 
        message = "Codigo no definido"
        
        return message;
    }
    console.log ( weatherCode(0));
    console.log ( weatherCode(1));
    console.log ( weatherCode(45));
    console.log ( weatherCode(2));
    console.log ( weatherCode(48));
    console.log ( weatherCode(3));
    /* 
        Realizar una funcion que reciba el valor booleano si una persona esta feliz o no
        Si la persona esta feliz, mostrar en la interfaz de usuario "public/images/dino"
    */

        
    
const estadoHumor = (felizBoolean) => {
    let mensaje = ""
    //let img = document.createElement('img');
         //var img = document.getElementById('miImagenUnica');
    // 1. Obtener la referencia al elemento imagen
    const miImagen = document.getElementById('miImagenUnica');

    if (felizBoolean){
        message = "Estoy feliz, dino feliz"
        // 2. Definir la ruta de la nueva imag
        const nuevaRuta = './public/images/dino.jpg';
        // 3. Cambiar la propiedad 'src'
        miImagen.src = nuevaRuta;

        return (miImagen); 
    } else 
        mensaje = "No estoy feliz, estoy triste, dino, triste"
        const nuevaRuta =  './public/images/dino-emo.png'
        // 3. Cambiar la propiedad 'src'
        miImagen.src = nuevaRuta;
        return (miImagen); 
}

//console.log( estadoHumor(true));
console.log( estadoHumor(false));

/*
let eresFeliz = prompt("Eres feliz? 1 = Si, soy feliz  2 = No, toy tite" );
if (eresFeliz == 2){
    eresFeliz=false;
} else {
    eresFeliz=true;
} 
estadoHumor(eresFeliz);
*/

/* 
let eresFeliz = prompt("Eres feliz?" );
if (eresFeliz === "No" || eresFeliz ==="no"){
    eresFeliz=false;
} else {
    eresFeliz=true;
} 
estadoHumor(eresFeliz);

*/
/*
----------- Condicional switch case ---------------------
La condicional switch evalua una expresion 

*/

/**
 * Switch case con el patron "Single  "
 
 */
const getAccessLevel = ( role ) => {
    let accessLevel; // o let accessLevel = "" ; 
    switch ( role ) {
        case "super_admin": 
        case "admin":
            accessLevel = "Acceso completo al sistema";
            break;
        case "editor":
            accessLevel = "Acceso para editar contenido";
            break;  
        case "viewer":
            accessLevel = "Acceso solo para ver contenido";
            break;
        default:
            accessLevel = "Acceso denegado"; // No se pone el brak porque ya es el final 
    }
    return accessLevel;
};

/**
 * Switch case con el patron "Early Return"
 * Este es menos verboso 
 
 */
const getAccessLevelWhitEarlyReturn = ( role ) => { 
    switch ( role ) {
        case "super_admin": 
        case "admin":
           return "Acceso completo al sistema";
            break;
        case "editor":
            return "Acceso para editar contenido";
            break;  
        case "viewer":
            return "Acceso solo para ver contenido";
            break;
        default:
            return "Acceso denegado"; // No se pone el brak porque ya es el final 
    }
};

console.log( getAccessLevel("admin") ); // Acceso completo al sistema
console.log( getAccessLevel("super_admin") ); // Acceso completo al sistema
console.log( getAccessLevel("editor") ); // Acceso para editar contenido   
console.log( getAccessLevel("customer") );    // Acceso denegado

/*
 Refactorizar la función getWeather usando switch-case
*/
    const getWeatherSwitch=(codigo)=>{
     let message;
     switch ( codigo){
        case 0 :
            message="Clear Sky";
            break
        case 1:
        case 2:
        case 3:
            message="Mainly clear, partly cloudy, and overcast";
            break;
        case 45:
        case 48: 
            message="Fog and depositing rime fog";
            break
        default :
            message="no definido";
     }
     return message;  
    } 

console.log (getWeatherSwitch(45));

    const getWeatherSwitch2=(codigo)=>{
     switch ( codigo){
        case 0 :
            return "Clear Sky";
        case 1:
        case 2:
        case 3:
            return "Mainly clear, partly cloudy, and overcast";
        case 45:
        case 48: 
            return "Fog and depositing rime fog";
        default :
            return "no definido";
     } 
    }
console.log (getWeatherSwitch2(0));

/*
 Dado un número entero, imprimir:

 "Negativo":  si el número es menor a 0.
 "Cero":  si el número es  0.
 "Positivo":  si el número es mayor a cero pero menor a 100.
 "Grande": si el número es mayor o igual a 100.
 */
function clasificarNumeroIfElse(numero) {
    if (numero < 0) {
      return "Negativo";
    } else if (numero === 0) {
      return "Cero";
    } else if (numero > 0 && numero < 100) {
      return "Positivo";
    } else {
      return "Grande";
    }
  }
  
  console.log(clasificarNumeroIfElse(-5));   // Negativo
  console.log(clasificarNumeroIfElse(0));    // Cero
  console.log(clasificarNumeroIfElse(50));   // Positivo
  console.log(clasificarNumeroIfElse(100));  // Grande

  // ----- Function Switch ----------
function evaluarElNumeroSwitch(numero) {

    switch ( true ) {
        case (numero < 0):
            mensaje = "Negativo";
            break;
        case (numero === 0):
            mensaje = "Cero";
            break;
        case (numero >0 && numero < 100):
            mensaje = "Positivo";
            break;
        case (numero >= 100):
            mensaje = "Grande";
            break;
        default:
            mensaje = "Numero desconocido";
    }
    return mensaje;
};
// Para el caso de los rangos se recomienda mas usar if else que switch 
console.log(evaluarElNumeroSwitch(-45) ); // Negativo
console.log(evaluarElNumeroSwitch(0) ); // Cero
console.log(evaluarElNumeroSwitch(45) ); // Positivo
console.log(evaluarElNumeroSwitch(100) ); // Grande

// ------------ Operador ternario --------------------
/* 
Es el unico operador de JavaScript que tiene 3 operandos
Genreralmente se utiliza como opcion a la sentencia if else 

    sintaxis 
    condicion ? espesionCondicionEsVerdadera : expresionSiCondicionEsFalsa 

*/
let userAge = 20; 
//let canVote =  userAge >= 18 ? "Puede votar" : "No puede votar"; 
const votingEligibility = (age) => {
    return age >= 18 ? "Puede votar" : "No puede votar"; 
}

console.log(votingEligibility(20));// Puede votar 
console.log(votingEligibility(16));// No Puede votar 
/*
 Realizar una función que reciba un número y retorne
 "Par" si el número es par o "Impar" si el número es impar.
 Usar el operador ternario.
*/

const parImpar = (num) => {
    return num%2 === 0 ? "Par" : "Inpar";
}
console.log(parImpar(18));
console.log(parImpar(7));




