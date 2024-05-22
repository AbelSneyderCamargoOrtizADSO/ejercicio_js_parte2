/*
22. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una 
lista de elementos uno por uno.
*/

async function llamada() {
    
    for (const i of lista) {
        let prom = new Promise((resolve, reject) => setTimeout(() => resolve("Procesando el numero: " + i), 1000))
        let esperar = await prom
        console.log(esperar)
    }
}

const lista = [1, 3, 5, 7, 8]
llamada()
