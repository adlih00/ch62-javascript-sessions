//document.getElementById("title").innerText = "OOP in JavaScript, Cohorte 62";
//console.log("Datos del arreglo participants desde main js: ", participants); // ['Alice', 'Bob', 'Charlie']
// Importacion nombrada 
import {changePrincipalTitle} from "./modules/changePrincipalTitle.js"
import { changeLogo } from "./modules/changeLogo.js";
import { literalUser } from "./modules/literalObjects.js";
import { User } from "../models/User.js";

changePrincipalTitle("title"); // title es el ID en el index 

// Crear una función que se le pase el nombre de la imagen a mostrar (cat o dino)
// esta imagen es la que se debe mostrar en el elemento con id "logo"

changeLogo("mona-lisa.jpeg");
console.log(literalUser.getFullName());
console.log(literalUser);
console.log(literalUser.stringify());

const fatima = new User("Fatima","Orozco",25,"fatima@gmail.com");
const juan = new User("Juan","Perez",28,"juan@gmail.com");
const luis = new User("Luis","Ramirez",32,"luis@gmail.com");

console.log(luis.greet()); // Hello, I'm Luis Ramirez, 32 years old.
console.log(juan.greet()); 
console.log(fatima.greet()); 
