"use strict";
// OBJETOS EN TYPESCRIPT:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// OBJETO CON VALORES:
// ------------------
var empresa = {
    nombre: "Microsoft Inc.",
    sector: "informática",
    servicios: ["sistemas operativos", "Ofimática", "Cloud", "Videojuegos"],
    facturacion: 55000000000,
};
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
// Ahora se lo asignamos al objeto:
var coche = {
    marca: "BMW",
    año: 1998,
    activo: false,
    mostrar_info1: function () { return this.marca + " del " + this.año; },
    mostrar_info2: function () { return coche.marca + " del " + coche.año; },
};
// mostrar_info1 y 2 son ambas formas de retornar string (con y sin funcion flecha.)
console.log("Coche basado en 'vehículo':", coche);
console.log("Mostrar info-1:", coche.mostrar_info1());
console.log("Mostrar info-2:", coche.mostrar_info2());
console.log("---------------------------------------------------------------");
// CLASES:
// -------
var Coche = /** @class */ (function () {
    function Coche() {
        this.marca = "Audi";
        this.modelo = "A6";
        this.año = 2020;
        this.activo = false;
        this.velocidad = 0;
    }
    Coche.prototype.acelerar = function () { this.velocidad++; };
    return Coche;
}());
var mi_coche1 = new Coche();
console.log("Mi coche 1, basado en la clase 'Coche':", mi_coche1);
mi_coche1.acelerar();
mi_coche1.acelerar();
mi_coche1.acelerar();
console.log("Velocidad actual:", mi_coche1.velocidad);
console.log("---------------------------------------------------------------");
// CONSTRUCTOR:
// ------------
var Moto = /** @class */ (function () {
    function Moto(marca, // accesibles desde fuera.
        modelo, arrancada, codigo) {
        if (arrancada === void 0) { arrancada = false; }
        this.marca = marca;
        this.modelo = modelo;
        this.arrancada = arrancada;
    }
    return Moto;
}());
var mi_moto = new Moto("Honda", "CBR1000", false, 12512563);
console.log("Mi motocicleta basada en clase 'Moto':", mi_moto);
console.log("---------------------------------------------------------------");
// VISIBILIDAD DE PROPIEDADES:
// ---------------------------
// PUBLIC: Accesible desde cualquier parte.
// PROTECTED: desde dentro de la clase y clases hijas.
// PRIVATE: sólo desde dentro de la clase.
var Ordenador = /** @class */ (function () {
    function Ordenador(marca, memoria, vel_procesador) {
        this.marca = marca;
        this.memoria = memoria;
        this.vel_procesador = vel_procesador;
    }
    return Ordenador;
}());
// NOTA: Aunque las props sean privadas (o protected) se mostrarán en log.
// Esa restricción solo sirve para desarrollo.
var mi_PC = new Ordenador("HP", 2056, 1.8);
console.log("Mi_PC basado en la clase 'Ordenador':", mi_PC);
// GETTERS y SETTERS:
// ------------------
var Laptop = /** @class */ (function () {
    function Laptop(marca, memoria, vel_procesador) {
        this.marca = marca;
        this.memoria = memoria;
        this.vel_procesador = vel_procesador;
    }
    Object.defineProperty(Laptop.prototype, "setRAM", {
        set: function (memoria) { this.memoria = memoria; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Laptop.prototype, "getRAM", {
        get: function () { return this.memoria; },
        enumerable: true,
        configurable: true
    });
    return Laptop;
}());
var mi_laptop = new Laptop("Apple", 1024, 2.2);
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
var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.saludar = function () { return ">> Hola, qué tal? <<"; };
    return Persona;
}());
console.log("El método 'saludar()' se puede invocar SIN instanciar la clase 'Persona'.");
console.log(Persona.saludar());
console.log("Otro ejemplo: El método 'random()' de la clase 'Math':", Math.random());
console.log("---------------------------------------------------------------");
// HERENCIA (extends)
// ------------------
// NOTA: Al extender una clase, las propiedades del padre NO pueden ser PRIVATE.
// En la clase hija, podemos pasarlas a PUBLIC si se necesita. Al revés NO.
var Tablet = /** @class */ (function (_super) {
    __extends(Tablet, _super);
    function Tablet(marca, memoria, vel_procesador) {
        var _this = _super.call(this, marca, memoria, vel_procesador) || this;
        _this.marca = marca;
        _this.memoria = memoria;
        _this.vel_procesador = vel_procesador;
        return _this;
    }
    return Tablet;
}(Laptop));
var mi_tablet = new Tablet("Samsung", 512, 1.8);
console.log("Mi_tablet está basada en 'Tablet' que extiende 'Laptop'", mi_tablet);
mi_tablet.setRAM = 4096;
console.log("Ampliamos la memoria usando un método de clase 'Laptop'", mi_tablet);
console.log("Ahora tiene ", mi_tablet.getRAM + " MB");
console.log("---------------------------------------------------------------");
// SUPER (acceder al padre)
// ------------------------
var Clase_padre = /** @class */ (function () {
    function Clase_padre() {
        this.prueba_padre = "Propiedad de la clase padre.";
    }
    return Clase_padre;
}());
var Clase_hija = /** @class */ (function (_super) {
    __extends(Clase_hija, _super);
    function Clase_hija() {
        var _this = _super.call(this) || this;
        _this.prueba_hija = "Propiedad de la clase hija.";
        return _this;
    }
    return Clase_hija;
}(Clase_padre));
var padre = new Clase_padre();
var hija = new Clase_hija();
console.log("Acceso a propiedades:");
console.log("  ++ Del padre:", padre.prueba_padre);
console.log("  ++ De la hija:", hija.prueba_hija);
console.log("  ++ Del padre desde la hija:", hija.prueba_padre);
console.log("Esto último es posible gracias a 'super()'");
console.log("---------------------------------------------------------------");
;
// OBJETO BASADO EN INTERFAZ:
var gtaV = {
    titulo: "GTA 5",
    categoria: "acción",
    año: 2013,
};
console.log("Objeto 'gtaV' creado a partir de la interface 'Vdeojuego'", gtaV);
// Agregando métodos:
var tetris = {
    titulo: "Tetris",
    categoria: "puzzle",
    año: 1989,
    mostrar: function () { console.log(tetris.titulo + " - " + tetris.categoria + " (" + tetris.año + ")"); },
    actualizar: function (consola) { return "Buscando actualizaciones para " + consola; }
};
console.log("Objeto 'tetris' basado en interface 'Videojuego'", tetris);
// Cuando invocamos métodos OPCIONALES, hemos de confirmar que existen (&&):
tetris.mostrar && tetris.mostrar();
console.log(tetris.actualizar && tetris.actualizar("PS4"));
console.log("---------------------------------------------------------------");
// CLASE BASADA EN INTERFAZ:
var Fifa = /** @class */ (function () {
    function Fifa(titulo, categoria, año, disponible) {
        var _this = this;
        this.titulo = titulo;
        this.categoria = categoria;
        this.año = año;
        this.disponible = disponible;
        this.mostrar = function () { console.log(_this.titulo + " - " + _this.categoria + " (" + _this.año + ")"); };
        this.actualizar = function (consola) {
            return "Buscando actualizaciones de FIFA para " + consola;
        };
    }
    return Fifa;
}());
// Objeto basado en Fifa:
var fifa23 = new Fifa("Fifa 23", "deportes", 2023);
console.log("Objeto 'fifa23' basado en clase 'Fifa' que implementa 'Videojuego':", fifa23);
fifa23.mostrar && fifa23.mostrar();
console.log(fifa23.actualizar && fifa23.actualizar("XBox Series-S"));
console.log("---------------------------------------------------------------");
