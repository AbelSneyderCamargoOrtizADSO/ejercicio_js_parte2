/*
5. Crear una función every que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como 
argumento
• devuelva true si todas las llamadas al callback devolvieron true
*/

const Array1 = ["perro", "gato", "siu", "hola"];

const callback = x => isNaN(x);

const respuesta = Array1.every(callback)

console.log(respuesta)  