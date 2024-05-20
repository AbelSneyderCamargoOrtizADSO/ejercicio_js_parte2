/*
17. Realiza una llamada a un archivo local Muestra en formato json, luego muestre los datos 
obtenidos en la consola.
*/

fetch("muestra.json").then(respuesta => respuesta.json()).then(datos => {
    datos.forEach(dato => {
        console.log(dato)
    });
})

