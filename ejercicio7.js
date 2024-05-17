/*
7. Crear una función find que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como 
argumento
• devuelva el elemento pasado como argumento del primer callback que devuelva true
• sí ningún callback devuelve true, devuelva undefined
*/  

const Array1 = [1, 4, "hola", 72, "adios", 6];

const callback = element => isNaN(element);

const resultado = Array1.find(callback);

console.log(resultado)

