/*
24. Crear un objeto proxy usando la clase Proxy
*/

let perro = {
    nombre : "",
    edad : 4,
}

let handler = {
    set(obj, prop, val){
        if (prop === "edad" && isNaN(val)) {
            return console.error("LA EDAD DEL PERRO DEBE SER UN NUMERO")
        }

        if (prop === "nombre" && (/\d/.test(val))) {
            return console.error("EL NOMBRE DEL PERRO NO PUEDE TENER NUMEROS, SOLO LETRAS")
        }

        if (Object.keys(obj).indexOf(prop) === -1) {
            return console.error("ESTA PROPIEDAD NO EXISTE")
        }
        
        obj[prop] = val;

    },
    get(obj, prop){
        console.log(`HAZ ACCEDIDO A LA PROPIEDAD ${prop}`)
        return obj[prop]
    }
    
}

let animal = new Proxy(perro, handler)

animal.edad = "gsef"
animal.nombre = "Abel"
animal.daño = 35

console.log(animal.edad)


console.log(perro)