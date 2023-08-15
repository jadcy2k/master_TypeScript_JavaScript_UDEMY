// DECORADORES EN TYPESCRIPT:
// https://www.udemy.com/course/master-en-typescript-javascript-moderno-ecmascript-es12-apis-html5/learn/lecture/28700256
// https://www.udemy.com/course/master-en-typescript-javascript-moderno-ecmascript-es12-apis-html5/learn/lecture/28804396
const proyectar = ():void => {
  console.log("...proyectando la película.");  
};

//@ts-ignore
@proyectar // NOTA: el error se debe a que los decorators son una función experimental.
// Hay que activarlo en "tsconfig.json" (aún así se marca como error, pero funciona)

// NOTA: REVISAR LA CLASE 29-88 y en adelante.........

class Pelicula {  
  constructor (
    public titulo:string,
    public genero:string,
    public proyectado:boolean,
  ){}
}

console.log("---------------------------------------------------------------");


// DECORADORES DE MÉTODOS:
// ---------------------------------------
const info = (target:Object, propertyKey:string, descriptor:any) => {
  console.log("target:",target);  
  console.log("propertyKey:",propertyKey);
  console.log("descriptor",descriptor);  
};

class PC {
  @info
  encender (mensaje:string) {
    console.log("+++ Encendiendo...");
    console.log(mensaje);
  }
}

let pc:PC = new PC();
pc.encender("> Iniciando sesión en mi PC.");

console.log("---------------------------------------------------------------");

const modificar_mensaje = (mostrar:boolean) => {
  return (target:Object, propertyKey:string, descriptor:any) => {
    if (mostrar) {
      console.log("target:",target);  
      console.log("propertyKey:",propertyKey);
      console.log("descriptor",descriptor); 
    } else {
      descriptor.value = () => {
        console.log(">> Método bloqueado."); 
      }           
    }     
  };

}

class PC2 {
  @modificar_mensaje(false)
  encender (mensaje:string) {
    console.log("+++ Encendiendo...");
    console.log(mensaje);
  }
}

let pc2:PC2 = new PC2();
pc2.encender("> Iniciando sesión en mi otro PC2.");

console.log("---------------------------------------------------------------");

// DECORADORES DE PROPIEDADES Y PARÁMETROS:
// ---------------------------------------

let mi_propiedad = (target:Object|any, propertyKey:string) => {
  console.log("target:", target);
  console.log("propertyKey:",propertyKey);    
  const clase:string = target.constructor.name;
  console.log("La propiedad '" + propertyKey + "' está en la clase " + clase);  
}
class PC3 {
  @mi_propiedad marca:string = "APPLE";
}


