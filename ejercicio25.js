/*
25. Usar un proxy para la validación de los valores de propiedades
• Cuando declaremos que el atributo es numérico solo perimimos que ingresen
números
• Cuando declaremos que el atributo es alfanumérico solo permitimos que ingresen
letras
• Cuando declaremos que el atributo es un email, solo permitimos que ingresen
correos
• Cuando declaremos que el atributo es de tipo date, solo permitimos que ingresen
fechas
• Para todos los atributos no se puede ingresar espacios en blanco tanto al inicio como
al final de estos y se debe mostrar el error personalizado por consola
*/

const perro = {
  nombre: "",
  dueno: "",
  correo: "abelc8099@gmail.com",
  edad: 7,
  FechaIngreso: ""
}

let handler = {
  set(obj, prop, val) {

    try {
      let propiedades = Object.keys(obj)

      if (prop === "edad" && isNaN(val)) {
        throw new Error("LA EDAD SOLO PUEDE SER NUMERICO")
      }

      if ((prop === "nombre" || prop === "dueño") && !/[A-Za-z]/.test(val)) {
        throw new Error("EN LOS NOMBRES SOLO SE PERMITEN LETRAS")
      }

      if (prop === "correo" && !/^([a-z \d]+)@([a-z]+\.[a-z]{3})$/g.test(val)) {
        throw new Error("CORREO INVALIDO, INGRESE UN CORREO VALIDO")
      }

      if (prop === "FechaIngreso" && !/^([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})$/.test(val)) {
        throw new Error("INGRESE UNA FECHA VALIDA")
      }

      if (propiedades.includes(prop) && /^\s|\s$/.test(val)) {
        throw new Error("NO INGRESE ESPACIOS EN BLANCO NI AL INICIO NI AL FINAL")
      }

      obj[prop] = val;

    } catch (error) {
      console.error(error)
    }
  }
}

let animal = new Proxy(perro, handler);

animal.edad = 9
animal.nombre = "Duque"
animal.dueno = "Abel"
animal.correo = "abelcamargo1@gmail.com"
animal.FechaIngreso = "24/02/2023"

console.log(perro)


