// ARCHIVO PRINCIPAL QUE CARGAMOS EN EL HTML.
/**
 * al importar, se incluye entre {} las funciones y
 * fuera dejamos la DEFAULT.
 * En el ejemplo, "principal" es default y las otras se ponen entre llaves:
 */
import principal, {imprimirArray, getNombre, hoy} from './10-modulo.js';

console.log("++ Archivo main.js que importará funciones de un módulo.");
// Importaremos algunas funciones del módulo "10-modulo.js"

// Testeamos "imprimirArray":
const salad = ['🍅', '🍄', '🥦', '🥒', '🌽', '🥕', '🥑'];
imprimirArray(salad);

// funcion estandar getNombre():
getNombre("Pepote");
// funcion estandar hoy();
hoy();
// funcion DEFAULT principal():
principal();