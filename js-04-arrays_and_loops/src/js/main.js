console.log("Sesión JS-04: Arrays y Bucles");

/* ================================================================
   ARRAYS (ARREGLOS) 
   ================================================================
   Un Array es una estructura de datos que nos permite almacenar 
   múltiples valores en una sola variable.
   
   Analogía: Una cajonera donde cada cajón tiene un número (índice)
   para identificar qué hay dentro.
*/
const myArray = [true, 42, "Hola", null, { nombre: "Juan" }, [1, 2, 3 ]];

// --- 1. Definición ---
// Sintaxis moderna: Usamos corchetes [] (Array Literal)
// Nota: Usamos 'const' aunque el contenido cambie. Lo que es constante
// es la referencia en memoria, no los datos internos.

const frutas = []; // empty array
const fruits = new Array(); // array using constructor (less common)

const numeros = [ 5 ]; // array with one element
const numbers = new Array(5); // array with 5 empty slots [ <5 empty items> ]

// --- 2. Acceso a Elementos ---
// Los índices comienzan en 0 (Zero-based indexing).
// [0] -> Primer elemento
// [length - 1] -> Último elemento

const techStack = ["HTML", "CSS", "JavaScript"];

// Acceder al primer elemento
console.log( techStack.length ); // 3
console.log(`Accediendo al primer elemento:  ${ techStack[0] }` ); // "HTML"

// Accediendo al segundo elemento
console.log(`Accediendo al segundo elemento: ${ techStack[1] }`);

// Acceder al último elemento (longitud - 1)
console.log(`Accediendo al último elemento: ${ techStack[ techStack.length - 1 ] }`);

// --- 3. Modificación de Elementos ---
techStack[1] = "Sass"; // Cambiando "CSS" por "Sass"
console.log("Después de la modificación:", techStack); // ["HTML", "Sass", "JavaScript"]

// Agregar un nuevo elemento al final
// techStack[3]
techStack[ techStack.length ] =  "TypeScript"; // ["HTML", "Sass", "JavaScript", "TypeScript"]


/* ================================================================
   BLOQUE 2: MÉTODOS DE ARRAYS (Add/Remove) 
   ================================================================
   JavaScript nos da métodos para manipular la lista como una pila o cola.
*/
const shoppingList = ["Leche", "Huevos"];

// 1. push(): Agrega al FINAL (El más usado)
// Retorna la nueva longitud del array.
shoppingList.push("Pan"); 
console.log("Push:", shoppingList); // ["Leche", "Huevos", "Pan"]

// 2. unshift(): Agrega al INICIO (Mueve todos los índices, es más lento)
shoppingList.unshift("Café");
console.log("Unshift:", shoppingList); // ["Café", "Leche", "Huevos", "Pan"]


// --- Eliminar Elementos ---

// 3. pop(): Elimina el ÚLTIMO y lo devuelve
const removedItem = shoppingList.pop();
console.log(`Eliminado con pop: ${removedItem}`); // "Pan"
console.log("Lista actual:", shoppingList);

// 4. shift(): Elimina el PRIMERO y lo devuelve
const firstRemoved = shoppingList.shift();
console.log(`Eliminado con shift: ${firstRemoved}`); // "Café"

// --- Método splice() ---
// Permite eliminar o agregar elementos en cualquier posición
const colors = ["Rojo", "Verde", "Azul", "Amarillo", "Morado", "Naranja"];
console.log("Colores iniciales:", colors.toString());
console.log("Colores iniciales:", colors.join);

// Agrega 2 elementos en el incide 2, sin eliminar otros elementos 
colors.splice(2,0,"Rosa","Cian");
console.log("Despues de agregar con splice:",colors.toString());

// TODO EJERCICIO RÁPIDO:
// 1. Crea un array 'guestList' con 2 nombres.
// 2. Agrega un invitado al final.
// 3. Agrega un invitado al principio
// 4. Elimina al segundo invitado (índice 1) y agrega a otro en su lugar.
// 4. Muestra la lista final.

/*
Mi version 
    const guestList =["Juan", "Pancho"];
    console.log(guestList);
    guestList.push("Paco");
    console.log(guestList);
    guestList.unshift("Pedro");
    console.log(guestList);
    guestList[1]="Jose";
    console.log(guestList);
*/
/*
//Intento de funcion 
const listaInvitados = () => {
    guestList =["Juan", "Pancho"];
    //console.log(guestList);
    guestList.push("Paco");
    //console.log(guestList);
    guestList.unshift("Pedro");
    //console.log(guestList);
    guestList[1]="Jose";
    //console.log(guestList);
    return guestList
};
listaInvitados(guestList);
*/

/*
// Version de misa 
const guestList = ['Walter', 'Jesse'];// paso 1
guestList.push('Hank'); // paso 2
guestList.unshift('Mike'); // paso 3
guestList.splice(1, 1, 'Gustavo'); // paso 4 
console.log('Lista final de invitados:', guestList.join(', ')); // paso 5
*/
/* 
Bloque 3: Estructuras de datos- Pilas y colas 

Las pilas y colas son estructuras de datos que organizan como se 
almacenan y accedes a los elementos 

1.- LIFO (Last-In, First-Out) - Pila (Stack)
concepto: El ultimo elemento en entrar es el primero en salir. 
*/
// Navegamos a sitios (push)
const historyStack=[];
historyStack.push("google.com");
historyStack.push("youtube.com");
historyStack.push("github.com");

console.log("Historial actual:", historyStack); //["google.com", "youtube.com", "github.com"]

// Presiono el boton de "atras"
console.log(`Regresando a: ${ historyStack.pop()}`); // "github.com"

/*
    2.- FIFO ( first-In, First-Out) - Cola (Queue)
    Concepto: El primer elemento en entrar es el primero en salir 
*/
const printQueue =[];
printQueue.push("thesis.pdf");
printQueue.push("meme.png");
printQueue.push("invoice.docx");
console.log("Cola de impresión:", printQueue); // ["thesis.pdf", "meme.png", "invoice.docx"]

// La impresora termina el primer trabajo (shift)
const printingNow = printQueue.shift();

console.log(`Imprimiendo: ${printingNow}`); // thesis.pdf (El primero que llegó)

/*
Ejercicio:
    Crea un array llamado 'taskList' para gestionar tareas.
    1.- Agrega 3 tareas usando push
    2.- Muestra la lista completa de tareas 
    3.- Las tareas normales se atienden en orden de llegada (FIFO)
    3.1 Retira (elimina) la primera tarea de la lista y muestrala
    4.  No dan un tarea URGENTE que debe ser atendido inmediatamente.
        Por lo que debes poner al inicio de la lista.
    5.  Muestra la lista actualizada.
     6. Atiende (elimina) la primera tarea de la lista y muéstrala.

*/

const taskList =[];
taskList.push("Lavar los platos");
taskList.push("Barrer la casa");
taskList.push("Trapear la casa");
console.log(`Lista de tareas Pendientes: ${taskList}`); 
let taskCheck = taskList.shift();
console.log(`Tarea Realizada: ${taskCheck}`); 
//taskList[0]=("Comprar el agua");
taskList.unshift("Comprar el agua");
console.log(`Lista de tareas Pendientes: ${taskList}`); 
taskCheck = taskList.shift();
console.log(`Tarea Realizada: ${taskCheck}`); 
console.log(`Lista de tareas Pendientes: ${taskList}`); 

/*
Version de Sandra 
// Crea un array llamado 'taskList' para gestionar tareas.
   const taskList = [];
// 1. Agrega 3 tareas usando 'push'.
   taskList.push("Barrer", "Trapear", "Sacudir");
// 2. Muestra la lista completa de tareas.
   console.log("Lista de tareas inicial: " + taskList.join(", "));
// 3. Las tareas normales se atienden en orden de llegada (FIFO)
// 3.1 Retira (elimina) la primera tarea de la lista y muéstrala.
   console.log("Tarea completada: " + taskList.shift());
// 4. No dan una tarea URGENTE que debe ser atendida inmediatamente. Por lo que debes ponerla al inicio de la lista.
   taskList.unshift("Limpiar arenero");
// 5. Muestra la lista actualizada.
   console.log("Tarea URGENTE añadida, lista de tareas actualizada: " + taskList.join(", "));
// 6. Atiende (elimina) la primera tarea de la lista y muéstrala.
   console.log("Tarea URGENTE completada: " + taskList.shift());
   console.log("Lista de tareas final: " + taskList.join(", "));
*/
/* ================================================================
   BLOQUE 3: BUCLES (LOOPS) 
   ================================================================
   Estructuras que repiten un bloque de código mientras una condición sea verdadera.
*/
// --- 1. Ciclo FOR (Controlado) ---
// Úsalo cuando sabes cuántas veces quieres repetir algo (ej. recorrer un array).
// Sintaxis: for (expresión_inicial; condición; expresión_final) { ... }
// Imprimier los números del 1 al 5
for(let i = 1; i <=5 ; i++ ) {
    console.log(`Número ${i}`);
}

// ---------- Uso de break en ciclos ----------------
// break detiene la ejecucion de la iteracion en curso y termina el ciclo 

for(let i = 1; i <= 10; i++){
    if(i=== 6){
        console.log(" Se alcanzo el numero 6!");
        break;
    }
    console.log(`Número con break ${i}`);
}
// =========== Ejercicios mentales ========================
let interacion = 0
for ( ; ; ){
    console.log(`Núm de interación: ${interacion}` ); //0,1,2,3,4
    interacion++;
    if( interacion === 5 ){
        break;
    }
}
// for ( ; ; ) se considera for ( no importa en el codigo; true ; no importa en el codigo)
// ctrl+shift+escape -> abre el administrador de tareas 
// =====================================================
let jiteration;
for ( jiteration = 0; jiteration < 3; jiteration++ ) {
    console.log("For loop", jiteration ); //0,1,2
}
console.log("Final", jiteration); // 3
// =========================================================
let k;
for ( k = 0; k < 5; k++ ); {
    console.log("Valor de K", k ); //5
}
console.log("Final", k); // 5
/*
En el caso de arriba el ; al final del for termina la funcion del for 
por lo cual se toma lo demas como un bloque de codigo aparte es decir...
let k;
for ( k = 0; k < 5; k++ ); 
{console.log("Valor de K", k ); // Valor de K 5
}
console.log("Final", k); // Final 5
*/

for ( k = 0; k < 5; k++ ) {
    console.log("Valor de K", k ); //0,1,2,3,4
}
console.log("Final", k); // 5

// ------------------- Uso de continue en ciclos ----------------------------
// break: Termina completamente un bucle (for, while, switch, etc.).
// continue: Salta la iteración actual y pasa a la siguiente sin salir del bucle.

for (let i= 0; i<=5; i++){
    if (i === 3) continue; // No se ejecuta el 3 
    console.log("Estoy dentro del ciclo for");
    console.log("Valor de i ", i); // 0,1,2,4,5
}

// --- 2. Ciclo WHILE (Basado en condición) ---
// Úsalo cuando NO sabes cuántas veces se repetirá, depende de algo externo.
// Cuidado: Si la condición nunca es falsa, creas un bucle infinito (Infinite Loop).

/*
while(  confirm("¿Quieres tu número de la suerte")  ){
    const numeroSuerte = Math.random(); // 0....1.0(sin incluir 1.0)
    console.log("Tu número de la suerte es: " + numeroSuerte);
}
console.log("Gracias por participar");
// confirm despliega una ventana flotante en el navegador como su fuera un promt 
*/
// Imprime los numeros del 1 al 5 (usando while)

let n = 1;
while(n<=5){
    console.log("Numero: "+ n);
    n++;
}

// ====================================================================================
const contries = ["Mexico", "Usa", "Canada", "Japon"];
// Usando FOR LOOP
for (let index = 0; index < contries.length; index++){
    const element = contries[index];
    console.log(`(for) Pais en indice ${index}: ${element}`);
}
// Usando For OF (Es6+)
for (const contry of contries){
    console.log(`(for of) Pais: ${contry}`);
}

// TODO: RETO FINAL (Simulación de Cajero)
// Tienes un array de movimientos: [100.00, -50.00, 200.00, -100.00]
// 1. Usa un ciclo FOR, o WHILE o FOR-OF para recorrer los movimientos.
// 2. Suma los valores a una variable 'totalBalance'.
// 3. Imprime el balance final.
const transactions = [100.00, -50.00, 200.00, -100.00, 500.00];
let totalBalance = 0;
let balancei=0;
for (i=0;i< transactions.length; i++){
    balancei= transactions[i];
    totalBalance += balancei;
    //console.log(balancei+" movimiento");
    //console.log(totalBalance+" sumatoria");
};
console.log(totalBalance+" Saldo actual");
// Este se ve mejor |
//                  V
totalBalance=0;
for ( const movimiento of transactions) totalBalance += movimiento;
console.log("Balance final: ", totalBalance);

// usando for-each 
totalBalance=0;
transactions.forEach((transaction, index, array)=>totalBalance+=transaction );
// index y array estan en otro color por que no se usan, se pueden eliminar en este caso 
console.log("Balance Total: ", totalBalance);


