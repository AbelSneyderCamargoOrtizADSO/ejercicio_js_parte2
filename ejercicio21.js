/*
21. Realiza tres Promises, algunas de las cuales se resuelvan y otras se rechacen. Utiliza 
Promise.allSettled() para obtener información sobre el estado de todas las Promises.
*/

let edad = 21

let prome1 = new Promise((resolve, reject) => {
    if (edad < 18) {
        resolve("PROMESA RESUELTA")
        
    } else if(edad > 18) {
        reject("PROMESA RECHAZADA")
    }
})

let prome2 = new Promise((resolve, reject) => {
    if (edad > 18) {
        resolve("PROMESA RESUELTA")

    } else if(edad < 18) {
        reject("PROMESA RECHAZADA")
    }
})

let prome3 = new Promise((resolve, reject) => {
    if (edad === 22) {
        resolve("PROMESA RESUELTA")
        
    } else{
        reject("PROMESA RECHAZADA")

    }
})


Promise.allSettled([prome1, prome2, prome3]).then(resultados => {
    resultados.forEach(result => console.log(result.status))
})