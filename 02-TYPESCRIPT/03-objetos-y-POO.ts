// OBJETOS EN TYPESCRIPT:


// OBJETO CON VALORES:
// ------------------
let empresa = {
  nombre: "Microsoft Inc.",
  sector: "informática",
  servicios: ["sistemas operativos", "Ofimática", "Cloud", "Videojuegos"],
  facturacion: 55000000000,
}
console.log("Objeto empresa:", empresa);
console.log("La prop. facturacion es de tipo:", typeof empresa.facturacion);

// Por el hecho de crear un objeto así, TS crea los tipos:
/*
let empresa: {
    nombre: string;
    sector: string;
    servicios: string[];
    facturacion: number;
}
*/

// empresa.facturacion = "muchos millones"; ==> Type 'string' is not assignable to type 'number'.ts(2322)
console.log("---------------------------------------------------------------");



// OBJETO CON TIPOS:
// -----------------

// Ahora hacemos el proceso inverso: Primero creamos el tipo:
type vehiculo = {
  marca:string,
  año:number,
  activo:boolean,
  mostrar_info1: () => string,
  mostrar_info2: () => string,
}
// Ahora se lo asignamos al objeto:
let coche:vehiculo = {
  marca: "BMW",
  año: 1998,
  activo: false,
  mostrar_info1(){return this.marca + " del " + this.año},
  mostrar_info2: () => `${coche.marca} del ${coche.año}`,
}
// mostrar_info1 y 2 son ambas formas de retornar string (con y sin funcion flecha.)
console.log("Coche basado en 'vehículo':", coche);
console.log("Mostrar info-1:", coche.mostrar_info1());
console.log("Mostrar info-2:", coche.mostrar_info2());

console.log("---------------------------------------------------------------");


// CLASES:
// -------

class Coche {
  marca: string = "Audi";
  modelo: string = "A6";
  año: number = 2020;
  activo: boolean = false;
  velocidad: number = 0;
  acelerar(){this.velocidad++}
}
let mi_coche1:Coche = new Coche();
console.log("Mi coche 1, basado en la clase 'Coche':", mi_coche1);
mi_coche1.acelerar();
mi_coche1.acelerar();
mi_coche1.acelerar();
console.log("Velocidad actual:", mi_coche1.velocidad);
console.log("---------------------------------------------------------------");


// CONSTRUCTOR:
// ------------

class Moto {
  constructor (
    public marca: string, // accesibles desde fuera.
    public modelo: string,
    public arrancada: boolean = false,
    codigo: number, // si NO lo hacemos público, no se mostrará en el log.
  ){}
}

let mi_moto:Moto = new Moto("Honda", "CBR1000",false, 12512563);
console.log("Mi motocicleta basada en clase 'Moto':", mi_moto);
console.log("---------------------------------------------------------------");


// VISIBILIDAD DE PROPIEDADES:
// ---------------------------

// PUBLIC: Accesible desde cualquier parte.
// PROTECTED: desde dentro de la clase y clases hijas.
// PRIVATE: sólo desde dentro de la clase.

class Ordenador {
  constructor (
    public marca:string,
    protected memoria:number,
    private vel_procesador:number,    
  ){}
}
// NOTA: Aunque las props sean privadas (o protected) se mostrarán en log.
// Esa restricción solo sirve para desarrollo.
let mi_PC:Ordenador = new Ordenador("HP", 2056, 1.8);
console.log("Mi_PC basado en la clase 'Ordenador':", mi_PC);

// GETTERS y SETTERS:
// ------------------

class Laptop {
  constructor (
    public marca:string,
    protected memoria:number,
    protected vel_procesador:number,    
  ){}

  set setRAM (memoria:number) {this.memoria = memoria}
  get getRAM ():number {return this.memoria}
}

let mi_laptop:Laptop = new Laptop("Apple", 1024, 2.2);
// NOTA: Aunque las props sean privadas (o protected) se mostrarán en log.
// Esa restricción solo sirve para desarrollo.
console.log("Mi_laptop basado en la clase 'Laptop':", mi_laptop);
mi_laptop.setRAM = 5012;
console.log("Laptop con más memoria:", mi_laptop);
// El setter 'getRAM' manipula una propiedad privada.
console.log("Ahora tiene:", mi_laptop.getRAM + " MB");

console.log("---------------------------------------------------------------");


// STATIC (se invoca desde la clase y NO desde instancia).
// -------

class Persona {
  static saludar = () => {return ">> Hola, qué tal? <<"}
}

console.log("El método 'saludar()' se puede invocar SIN instanciar la clase 'Persona'.");
console.log(Persona.saludar());
console.log("Otro ejemplo: El método 'random()' de la clase 'Math':", Math.random());
console.log("---------------------------------------------------------------");


// HERENCIA (extends)
// ------------------

// NOTA: Al extender una clase, las propiedades del padre NO pueden ser PRIVATE.
// En la clase hija, podemos pasarlas a PUBLIC si se necesita. Al revés NO.
class Tablet extends Laptop {
  constructor (
    public marca:string,
    protected memoria:number,
    protected vel_procesador:number,    
  ){
    super(marca, memoria, vel_procesador);
  }
}
let mi_tablet:Tablet = new Tablet("Samsung", 512, 1.8);
console.log("Mi_tablet está basada en 'Tablet' que extiende 'Laptop'", mi_tablet);
mi_tablet.setRAM = 4096;
console.log("Ampliamos la memoria usando un método de clase 'Laptop'", mi_tablet);
console.log("Ahora tiene ", mi_tablet.getRAM + " MB");
console.log("---------------------------------------------------------------");


// SUPER (acceder al padre)
// ------------------------

class Clase_padre {
  public prueba_padre: string;

  constructor (){
    this.prueba_padre = "Propiedad de la clase padre.";
  }  
}

class Clase_hija extends Clase_padre {
  public prueba_hija: string;
  constructor () {
    super();
    this.prueba_hija = "Propiedad de la clase hija."
  }
}

let padre:Clase_padre = new Clase_padre();
let hija:Clase_hija = new Clase_hija();

console.log("Acceso a propiedades:");
console.log("  ++ Del padre:", padre.prueba_padre);
console.log("  ++ De la hija:", hija.prueba_hija);
console.log("  ++ Del padre desde la hija:", hija.prueba_padre);
console.log("Esto último es posible gracias a 'super()'");
console.log("---------------------------------------------------------------");


// ABSTRACT (no se puede instanciar, sólo extender!!). Si quieremos instanciar una clase abstracta,
// debemos extender una clase que NO sea abstracta extendiendo de ella:

abstract class Transporte {}
//@ts-ignore
let coche1 = new Transporte(); // ERROR: no se puede instanciar.

class Vehicle extends Transporte {}
let coche2 = new Vehicle(); // OK.



// INTERFAZ:
// ---------

// Define el "molde" o "contrato" para crear objetos y clases:
interface Videojuego {
  titulo: string;
  categoria: string;
  año: number;
  disponible?: boolean; //propiedades opcionales (con ?)
  mostrar?: () => void;
  actualizar?: (consola:string) => string;
};

// OBJETO BASADO EN INTERFAZ:
let gtaV:Videojuego = {
  titulo: "GTA 5",
  categoria: "acción",
  año: 2013,  
}
console.log("Objeto 'gtaV' creado a partir de la interface 'Vdeojuego'", gtaV);

// Agregando métodos:
let tetris:Videojuego = {
  titulo: "Tetris",
  categoria: "puzzle",
  año: 1989,
  mostrar: () => {console.log(tetris.titulo + " - " + tetris.categoria + " (" + tetris.año + ")" )},
  actualizar: (consola) => {return "Buscando actualizaciones para "+ consola}
}
console.log("Objeto 'tetris' basado en interface 'Videojuego'", tetris);
// Cuando invocamos métodos OPCIONALES, hemos de confirmar que existen (&&):
tetris.mostrar && tetris.mostrar();
console.log(tetris.actualizar && tetris.actualizar("PS4"));
console.log("---------------------------------------------------------------");

// CLASE BASADA EN INTERFAZ:
class Fifa implements Videojuego {
  constructor (
    public titulo: string,
    public categoria: string,
    public año: number,    
    public disponible?: boolean,
  ){}
  mostrar = () => {console.log(this.titulo + " - " + this.categoria + " (" + this.año + ")" )};
  actualizar = (consola:string) => {
    return "Buscando actualizaciones de FIFA para "+ consola
  };
}

// Objeto basado en Fifa:
let fifa23:Fifa = new Fifa ("Fifa 23", "deportes", 2023);
console.log("Objeto 'fifa23' basado en clase 'Fifa' que implementa 'Videojuego':", fifa23);
fifa23.mostrar && fifa23.mostrar();
console.log(fifa23.actualizar && fifa23.actualizar("XBox Series-S"));
console.log("---------------------------------------------------------------");





























