/*
4. Crear una función filter que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como 
argumento
• sí dicho callback devuelve true, pushea el elemento a un nuevo array
• devuelva el array final con los elementos que pasaron el "filtro".
*/

const numeros = [5, 8, 10, 19];
const ArrayFinal = []

const callback = x => x % 2 === 0 || x < 9;

const resultado = numeros.filter(callback)

ArrayFinal.push(...resultado)

console.log(`LOS ELEMENTOS SON: [${numeros}]
EL ARRAY FINAL DE LOS ELEMENTOS QUE PASARON EL FILTRO: [${ArrayFinal}]`)

console.log(ArrayFinal)

