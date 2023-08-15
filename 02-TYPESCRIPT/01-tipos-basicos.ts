// TIPOS DE DATOS FUNDAMENTALES:
// Ejecutar en terminal la compilación con watch:
// $ tsc 01-tipos-basicos.ts -w

// Podemos decir que el tipo es como un contrato que se debe cumplir.

let texto:string = "Hola mundo!";
let numero:number = 3.141565; // Numeros decimales funcionan con punto (no con coma)
let verdadero:boolean = false;
// ---------------------------------------------------------------
// ANY y UNKNOWN:
let cualquiera:any = "Ahora soy un texto";
console.log("La variable 'cualquiera' es de tipo:", typeof (cualquiera)); //string
cualquiera = 4.45;
cualquiera = true;
let desconocido:unknown = "Desconocido";
console.log("La variable 'desconocido' es de tipo:", typeof (desconocido)); //string
desconocido = 3.1415;
desconocido = false;


// ---------------------------------------------------------------
// UNIÓN DE TIPOS:
let telefono: number | string = "+34.9333333333";
telefono = 156254586;
// ---------------------------------------------------------------
// ARRAYS:
let personas: string[] = ["Victor", "Ana", "Aida"];
personas.push("Daniel");
console.log("Array de strings:", personas);
//personas.push(16); => Da error porque el Array SOLO admite string.
// ---------------------------------------------------------------

// TUPLAS (ARRAY CON ELEMENTOS TIPADOS):
let pelicula = ["Batman", true, 1990];
// si hacemos mouseover en "pelicula", nos muestra:
// let pelicula: (string | number | boolean)[];

let film: [string, boolean, number] = ["ET", true, 1982];
console.log("Tupla [string,boolean,number]", film);
// film = ["Superman", false]; ==> Da error porque falta un dato.
console.log("---------------------------------------------------------------");

// ENUM (parecido a Objeto pero READ ONLY):
enum DatosPersonales {nombre, edad, ciudad}
// Define datos enumerados accesibles como propiedades:
DatosPersonales.nombre; // si no definimos nada, devuelve 0,1,2...

enum dominiosWeb {
  España = "ES",
  Francia = "FR",
  Alemania = "DE"
}
console.log("Este dato es constante:", dominiosWeb.España);
//dominiosWeb.Alemania = "AL"; ==> da error porque es "solo-lectura".
console.log("---------------------------------------------------------------");


// CAST (CONVERSION DE DATOS): "<tipo>variable" o "variable as tipo"
let texto_desconocido: any = "Dato que no sabemos qué es...";
let frase1: string = <string>texto_desconocido;
console.log("Frase1:", frase1);
console.log("la variable 'frase1' es de tipo:", typeof frase1);

let dato_desconocido:any = 123456;
frase1 = <string>dato_desconocido;
console.log("Frase1:", frase1);
console.log("Ahora, la variable 'frase1' es de tipo:", typeof frase1);

let frase2:string = <string>dato_desconocido;
console.log("Frase2:", frase2);
console.log("la variable 'frase2' es de tipo:", typeof frase2);

let num_desconocido:any = "2022";
let frase3:number = num_desconocido as number;
console.log("Frase3:", frase3);
console.log("la variable 'frase3' es de tipo:", typeof frase3);
console.log("Recuerda que esta es una conversión en tiempo de compilación, y no una conversión en tiempo de ejecución.");
console.log("---------------------------------------------------------------");











