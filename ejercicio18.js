/*
18. Después de realizar una llamada a un archivo local en formato json, utiliza el método then() 
para filtrar los datos y mostrar solo los elementos que cumplan ciertos criterios (por ejemplo, 
mostrar solo los nombres que comiencen con "A").
*/

fetch("muestra.json").then(respuesta => respuesta.json()).then(datos => {
    let filtrado = datos.filter(persona => {
        return persona.nombre[0] === "A"
    })

    filtrado.forEach(resultado => {
        console.log(resultado)
    });

}).catch(error => {
    console.error("ERROR AL LEER EL ARCHIVO MUESTRA.JSON", error)
})