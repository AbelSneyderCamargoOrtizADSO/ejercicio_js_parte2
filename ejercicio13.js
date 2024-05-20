/*
13. Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise 
resuelta" cuando se cumpla.
*/

let num = 5

let promesa = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if (num > 0) {
            resolve("Promise resuelta")
        } else {
            reject(new Error ("Promesa NO resuelta"))
        }
    }, 3000)
})

promesa.then(resultado => {
    alert(resultado)
}).catch(error => {
    console.error(error)
    alert(error)
})