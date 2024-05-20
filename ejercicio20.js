/*
20. Crea tres Promises que se resuelvan después de diferentes intervalos de tiempo y luego 
utilice Promise.all() para mostrar un mensaje cuando todas se hayan resuelto.
*/

let prome1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("PROMESA 1 RESUELTA (1s)"), 1000)
})

let prome2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("PROMESA 2 RESUELTA (2s)"), 2000)
})

let prome3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("PROMESA 3 RESUELTA (3s)"), 3000)
})

Promise.all([prome1, prome2, prome3])
.then(resultado => {
    resultado.forEach(mensaje => console.log(mensaje))
    alert("TODAS LAS PROMESAS HAN SIDO RESUELTAS")
    console.log("TODAS LAS PROMESAS HAN SIDO RESUELTAS")
}).catch(error => {
    console.error("UNA DE LAS PROMESAS FALLÓ")
})