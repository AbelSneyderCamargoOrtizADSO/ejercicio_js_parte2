/*
1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
• Usando setInterval.
• Usando setTimeout anidado
*/


let i = parseInt(prompt("Ingrese el numero de inicio"));
let f = parseInt(prompt("Ingrese el numero de fin"));
let cont = i;

/*
// VARIANTE 1
let intervalo = setInterval(function imprimirNumeros(){

  console.log(cont)
  cont++
  
  if (cont > f) {
    clearInterval(intervalo)
  }

}, 1000)
*/


/*
// VARIANTE 2
function imprimirNumeros(desde, hasta) {
    let cont = desde;

    setTimeout(function numeros() {
        console.log(cont);
        if (cont < hasta) {
            cont++;
            setTimeout(numeros, 1000);
        }
    }, 1000);
}

imprimirNumeros(i, f);
*/