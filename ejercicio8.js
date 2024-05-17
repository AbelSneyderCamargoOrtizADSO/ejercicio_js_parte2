/*
8. Crear una función findIndex que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como 
argumento
• devuelva el índice del elemento pasado como argumento del primer callback que 
devuelva true
• sí ningún callback devuelve true, devuelva undefined
*/

const Array1 = [1, 4, 5, 8, 6];

const callback = j => j % 2 === 0;

const resultado = Array1.findIndex(callback);

console.log(resultado)