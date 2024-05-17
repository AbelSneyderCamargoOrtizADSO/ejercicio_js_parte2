/*
6. Crear una función some que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como 
argumento
• devuelva true si al menos una de las llamadas al callback devolvió true
*/

const nums = [2,6,5,-7,5,7];

const callback = x => x < 0;

const resultado = nums.some(callback);

console.log(resultado)