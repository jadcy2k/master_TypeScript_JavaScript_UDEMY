"use strict";
// FUNCIONES EN TYPESCRIPT:
// Ejecutar en terminal la compilación con watch:
// $ tsc *.ts -w
// FUNCIONES:
// ----------
var saludo = function (persona) {
    return "Hola " + persona;
};
var no_devuelve_nada = function (mensaje) {
    console.log(mensaje);
};
// Uso de una función:
console.log("LLamada a función saludo:", saludo("Alfredo"));
// Llamada a función que no devuelve nada (solo console.log):
no_devuelve_nada("Esto es una llamada a una funcion que devuelve 'void'.");
console.log("---------------------------------------------------------------");
// TIPO FUNCTION;
// --------------
var grupos_musicales; //Esta definición es de tipo "undefined"
grupos_musicales = function (datos) {
    return "Mis bandas favoritas: " + datos.toString();
};
// Ahora, el tipo es "function";
console.log("La variable 'grupos_musicales' es de tipo:", typeof grupos_musicales);
console.log(grupos_musicales(["ACDC", "Beatles", "MetallicA", "DepecheMode"]));
console.log("---------------------------------------------------------------");
// TIPO LITERAL:
// -------------
function tekken(personaje, nivel) {
    return "El personaje " + personaje + " es de nivel " + nivel;
}
console.log("Llamada a función:", tekken("Saggat", 5));
console.log("---------------------------------------------------------------");
var superhero = function (personaje, nivel) {
    return "El h\u00E9roe " + personaje + " es de nivel " + nivel;
};
console.log("Llamada a función:", superhero("Spiderman", "especial"));
console.log("---------------------------------------------------------------");
