/*
11. ¿Cuál es el resultado del código a continuación?
*/

let i = 0;

setTimeout(() => alert(i), 100)

// asumimos que el tiempo para ejecutar esta funcion es > 100ms
for (let j = 0; j < 100000000; j++) {
    i++;
}


/*
RESPUESTA:
El resultado del codigo anterior es el numero 100000000, ya que en el bucle for se le suma a la variable i esta misma cantida sumandole +1 cada vez
y luego de terminar ese proceso del bucle se imprime con el alert(1) dentro del setTimeout

Esto ocurre gracias el even loop, ya que pone para despues la tarea del setTimeout debido a que tiene tiempo o es asincrona y primero ejecuta el bucle, luego el setTimeout
*/