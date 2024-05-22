/*
23. Realiza una llamada a un archivo local en formato json y maneja posibles errores utilizando
try/catch para mostrar un mensaje de error en caso de fallo.
*/
async function manejoerrores(){
  try {
    let response = await fetch("muestra.json");
      
    if (!response.ok) {
      throw new Error("ERROR AL ENCONTRAR EL ARCHIVO JSON")
    }

    let respuesta = await response.json();
    
    if (respuesta.length === 0) {
      throw new Error("EL ARCHIVO JSON ESTA VACIO")
    }

    respuesta.forEach(info => {
      console.log(info)
    });
  
  } catch (error) {
    console.error("HA OCURRIDO UN ERROR EN EL ARCHIVO JSON: " + error)
  }
}

manejoerrores()


// fetch("muestra.json").then(respuesta => respuesta.json()).then(datos => {
//   datos.forEach(persona => {
//     console.log(persona)
//   });
// }).catch(error => {
//   console.error("Fallo en la carga del archivo json", error)
// })


