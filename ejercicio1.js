/*
1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
• Usando setInterval.
• Usando setTimeout anidado
*/


let i = parseInt(prompt("Ingrese el numero de inicio"));
let f = parseInt(prompt("Ingrese el numero de fin"));

// VARIANTE 1
function imprimirNumeros(desde, hasta) { // DECLARAMOS LA FUNCION
  let cont = desde;
  let intervalo = setInterval(()=>{ // ASIGNAMOS LA VARIABLE AL SETINTERVAL
    console.log(cont) // IMPRIMIMOS EL NUMERO 
    if (cont === hasta) { // CREAMOS LA CONDICIONAL PARA LIMPIAR EL SETINTERVAL CUANDO EL CONTADOR LLEGUE AL NUMERO FINAL
      clearInterval(intervalo); // LIMPIAMOS EL INTERVALO
    }
    cont ++; // LE SUMAMOS 1 AL CONTADOR
  }, 1000) // ASIGNAMOS EL TIEMPO DE CADA INTERVALOR (1 SEGUNDO EN ESTE CASO)
}



/*
// VARIANTE 2
function imprimirNumeros(desde, hasta) { // DECLARAMOS LA FUNCION
    let cont = desde; // DEFINIMOS EL CONTADOR

    setTimeout(function numeros() { // DEFINIRMOS EL SETTIMEOUT CON LA FUNCION NUMEROS
      console.log(cont); // IMPRIMIMOS EL NUMERO POR CONSOLA
        if (cont < hasta) { // CONDICIONAL PARA SABER HASTA CUANDO SE DEBE CONTAR
          cont++; // SUMAMOS UNO AL CONTADOR
          setTimeout(numeros, 1000); // LE PASAMOS AL SETTIMEOUT LA FUNCION O CALLBACK NUMEROS Y EL TIEMPO
        }
    }, 1000); // ASIGNAMOS EL TIEMPO DE CADA INTERVALOR (1 SEGUNDO EN ESTE CASO)
}
*/


imprimirNumeros(i, f); // INVOCAMOS LA FUNCION
