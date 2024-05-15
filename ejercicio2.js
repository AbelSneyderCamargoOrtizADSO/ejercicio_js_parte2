/*
2. En el siguiente código hay una llamada programada setTimeout, luego se ejecuta un cálculo
pesado que demora más de 100 ms en finalizar.
¿Cuándo se ejecutará la función programada y por qué se ejecutará?
a) Después del bucle.
b) Antes del bucle.
c) Al comienzo del bucle.
 ¿Qué va a mostrar alert()?
*/

let i = 0;

setTimeout(() => alert(i), 100)

for (let j = 0; j < 100000000; j++) {
  i++;
}



/*
RESPUESTA: 
LA FUNCION PROGRAMADA SE EJECUTA a) Después del bucle, ESTO PASA PORQUE LA LLAMADA PROGRAMADA TARDA MAS EN EJECUTARSE QUE EL BUCLE FOR, PODEMOS VERIFICAR ESTO MEDIANTE EL ALERT QUE LE AGREGUE DESPUES DEL FOR YA QUE SE EJECUTA ANTES QUE EL SETTIMEOUT.
EL ALERT() MUESTRA EL NUMERO 100000000, YA QUE EN CADA CICLO DEL FOR SE LE SUMA 1 A LA VARIABLE i.

FUNCION ASNCRONA SE EJECUTA AL FINAL DE LA COLA
*/