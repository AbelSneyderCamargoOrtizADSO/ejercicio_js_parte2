/*
23. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
try/catch para mostrar un mensaje de error en caso de fallo.
*/

fetch("muestra.json").then(respuesta => respuesta.json()).then(datos => {
  datos.forEach(persona => {
    console.log(persona)
  });
}).catch(error => {
  console.error("Fallo en la carga del archivo json")
})