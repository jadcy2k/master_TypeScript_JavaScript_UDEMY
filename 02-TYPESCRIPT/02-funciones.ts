// FUNCIONES EN TYPESCRIPT:
// Ejecutar en terminal la compilación con watch:
// $ tsc *.ts -w



// FUNCIONES:
// ----------
let saludo = (persona:string):string => {
  return "Hola "+ persona;
}
let no_devuelve_nada = (mensaje:string):void => {
  console.log(mensaje);  
}
// Uso de una función:
console.log("LLamada a función saludo:", saludo("Alfredo"));
// Llamada a función que no devuelve nada (solo console.log):
no_devuelve_nada("Esto es una llamada a una funcion que devuelve 'void'.");
console.log("---------------------------------------------------------------");


// TIPO FUNCTION;
// --------------
let grupos_musicales: (datos: string[]) => string;  //Esta definición es de tipo "undefined"

grupos_musicales = (datos) => {
  return "Mis bandas favoritas: " + datos.toString();
}
// Ahora, el tipo es "function";
console.log("La variable 'grupos_musicales' es de tipo:", typeof grupos_musicales);
console.log(grupos_musicales(["ACDC", "Beatles", "MetallicA", "DepecheMode"]));
console.log("---------------------------------------------------------------");


// TIPO LITERAL:
// -------------
function tekken (personaje:string, nivel:number):string {
  return `El personaje ${personaje} es de nivel ${nivel}`;
}
console.log("Llamada a función:", tekken("Saggat", 5));
console.log("---------------------------------------------------------------");


// TIPO PERSONALIZADO (type):
// ---------------------------

type nivel = "especial" | 1 | 2 | 3 | 4 | 5;
let superhero = (personaje:string, nivel:nivel) => {
  return `El héroe ${personaje} es de nivel ${nivel}`;
}
console.log("Llamada a función:", superhero("Spiderman", "especial"));
console.log("---------------------------------------------------------------");


