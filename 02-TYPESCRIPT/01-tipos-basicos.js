"use strict";
// TIPOS DE DATOS FUNDAMENTALES:
// Ejecutar en terminal la compilación con watch:
// $ tsc 01-tipos-basicos.ts -w
// Podemos decir que el tipo es como un contrato que se debe cumplir.
var texto = "Hola mundo!";
var numero = 3.141565; // Numeros decimales funcionan con punto (no con coma)
var verdadero = false;
// ---------------------------------------------------------------
// ANY y UNKNOWN:
var cualquiera = "Ahora soy un texto";
console.log("La variable 'cualquiera' es de tipo:", typeof (cualquiera)); //string
cualquiera = 4.45;
cualquiera = true;
var desconocido = "Desconocido";
console.log("La variable 'desconocido' es de tipo:", typeof (desconocido)); //string
desconocido = 3.1415;
desconocido = false;
// ---------------------------------------------------------------
// UNIÓN DE TIPOS:
var telefono = "+34.9333333333";
telefono = 156254586;
// ---------------------------------------------------------------
// ARRAYS:
var personas = ["Victor", "Ana", "Aida"];
personas.push("Daniel");
console.log("Array de strings:", personas);
//personas.push(16); => Da error porque el Array SOLO admite string.
// ---------------------------------------------------------------
// TUPLAS (ARRAY CON ELEMENTOS TIPADOS):
var pelicula = ["Batman", true, 1990];
// si hacemos mouseover en "pelicula", nos muestra:
// let pelicula: (string | number | boolean)[];
var film = ["ET", true, 1982];
console.log("Tupla [string,boolean,number]", film);
// film = ["Superman", false]; ==> Da error porque falta un dato.
console.log("---------------------------------------------------------------");
// ENUM (parecido a Objeto pero READ ONLY):
var DatosPersonales;
(function (DatosPersonales) {
    DatosPersonales[DatosPersonales["nombre"] = 0] = "nombre";
    DatosPersonales[DatosPersonales["edad"] = 1] = "edad";
    DatosPersonales[DatosPersonales["ciudad"] = 2] = "ciudad";
})(DatosPersonales || (DatosPersonales = {}));
// Define datos enumerados accesibles como propiedades:
DatosPersonales.nombre; // si no definimos nada, devuelve 0,1,2...
var dominiosWeb;
(function (dominiosWeb) {
    dominiosWeb["Espa\u00F1a"] = "ES";
    dominiosWeb["Francia"] = "FR";
    dominiosWeb["Alemania"] = "DE";
})(dominiosWeb || (dominiosWeb = {}));
console.log("Este dato es constante:", dominiosWeb.España);
//dominiosWeb.Alemania = "AL"; ==> da error porque es "solo-lectura".
console.log("---------------------------------------------------------------");
// CAST (CONVERSION DE DATOS): "<tipo>variable" o "variable as tipo"
var texto_desconocido = "Dato que no sabemos qué es...";
var frase1 = texto_desconocido;
console.log("Frase1:", frase1);
console.log("la variable 'frase1' es de tipo:", typeof frase1);
var dato_desconocido = 123456;
frase1 = dato_desconocido;
console.log("Frase1:", frase1);
console.log("Ahora, la variable 'frase1' es de tipo:", typeof frase1);
var frase2 = dato_desconocido;
console.log("Frase2:", frase2);
console.log("la variable 'frase2' es de tipo:", typeof frase2);
var num_desconocido = "2022";
var frase3 = num_desconocido;
console.log("Frase3:", frase3);
console.log("la variable 'frase3' es de tipo:", typeof frase3);
console.log("Recuerda que esta es una conversión en tiempo de compilación, y no una conversión en tiempo de ejecución.");
console.log("---------------------------------------------------------------");
