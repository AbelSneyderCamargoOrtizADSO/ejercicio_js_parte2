/*
14. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que 
diga "Operación completada". Utiliza async/await.
*/

async function asincrona() {
    let promesa = new Promise(resolve => {
        setTimeout(() => {
            resolve("Operación completada")
        }, 1000)
    })

    let resultado = await promesa;

    alert(resultado)
}

asincrona();