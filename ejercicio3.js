/*
3. Crear una función map que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• obtenga el resultado
• lo pushee a un nuevo array
• devuelva el array final con el resultado de cada una de las llamadas al callback.
*/

const numeros = [5, 8, 10, 19]
const nuevoArray = [];

const callback = x => x - 1;

const resultado = numeros.map(callback)

nuevoArray.push(...resultado)

console.log(nuevoArray)

