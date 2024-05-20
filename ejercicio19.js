/*
19. Crea una función asincrónica que realice una llamada a un archivo local en formato json y 
luego manipule los datos recibidos para mostrar información específica.
*/

async function llamada(){
    let respuesta = await fetch("muestra.json")
    let datos = await respuesta.json()

    // Mostrar solo nombres
    datos.forEach(nom => console.log(nom.nombre));
}

llamada()