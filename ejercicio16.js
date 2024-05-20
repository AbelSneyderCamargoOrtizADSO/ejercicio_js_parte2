/*
16. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y 
devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados 
y mostrar el resultado final.
*/

new Promise(resolve => {
    setTimeout(() => resolve(4), 1000)

}).then(numero1 => {
    console.log("El primer numero es " + numero1)
    return new Promise(resolve => {
        let numero2 = 2;
        setTimeout(() => resolve([numero1 + numero2, numero2]), 1000)
    })

}).then(([suma, numero2]) => {
    console.log("El segundo numero es " + numero2)
    return new Promise(resolve => {
        let numero3= 8;
        setTimeout(() => resolve([suma + numero3, numero3]), 1000)
    })

}).then(([suma, numero3]) => {
    console.log("El tercer numero es " + numero3)
    setTimeout(() => console.log("LA SUMA DE LOS 3 NUMEROS ES: " + suma), 1000)
})