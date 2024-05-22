/*
10. Crear una función takeWhile que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva un array con los elementos hasta el primer callback que devolvió false
• (Inverso del dropWhile)
*/

const _ = require('lodash');

let num = [1, 5, 7, 4, 9, 10, 19]

const callback = x => x < 10;

const resultado = _.takeWhile(num, callback)

console.log(resultado)