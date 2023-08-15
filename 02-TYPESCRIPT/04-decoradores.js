"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// DECORADORES EN TYPESCRIPT:
// https://www.udemy.com/course/master-en-typescript-javascript-moderno-ecmascript-es12-apis-html5/learn/lecture/28700256
// https://www.udemy.com/course/master-en-typescript-javascript-moderno-ecmascript-es12-apis-html5/learn/lecture/28804396
var proyectar = function () {
    console.log("...proyectando la película.");
};
//@ts-ignore
var Pelicula = /** @class */ (function () {
    function Pelicula(titulo, genero, proyectado) {
        this.titulo = titulo;
        this.genero = genero;
        this.proyectado = proyectado;
    }
    Pelicula = __decorate([
        proyectar // NOTA: el error se debe a que los decorators son una función experimental.
        // Hay que activarlo en "tsconfig.json" (aún así se marca como error, pero funciona)
        // NOTA: REVISAR LA CLASE 29-88 y en adelante.........
        ,
        __metadata("design:paramtypes", [String, String, Boolean])
    ], Pelicula);
    return Pelicula;
}());
console.log("---------------------------------------------------------------");
// DECORADORES DE MÉTODOS:
// ---------------------------------------
var info = function (target, propertyKey, descriptor) {
    console.log("target:", target);
    console.log("propertyKey:", propertyKey);
    console.log("descriptor", descriptor);
};
var PC = /** @class */ (function () {
    function PC() {
    }
    PC.prototype.encender = function (mensaje) {
        console.log("+++ Encendiendo...");
        console.log(mensaje);
    };
    __decorate([
        info,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], PC.prototype, "encender", null);
    return PC;
}());
var pc = new PC();
pc.encender("> Iniciando sesión en mi PC.");
console.log("---------------------------------------------------------------");
var modificar_mensaje = function (mostrar) {
    return function (target, propertyKey, descriptor) {
        if (mostrar) {
            console.log("target:", target);
            console.log("propertyKey:", propertyKey);
            console.log("descriptor", descriptor);
        }
        else {
            descriptor.value = function () {
                console.log(">> Método bloqueado.");
            };
        }
    };
};
var PC2 = /** @class */ (function () {
    function PC2() {
    }
    PC2.prototype.encender = function (mensaje) {
        console.log("+++ Encendiendo...");
        console.log(mensaje);
    };
    __decorate([
        modificar_mensaje(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], PC2.prototype, "encender", null);
    return PC2;
}());
var pc2 = new PC2();
pc2.encender("> Iniciando sesión en mi otro PC2.");
console.log("---------------------------------------------------------------");
// DECORADORES DE PROPIEDADES Y PARÁMETROS:
// ---------------------------------------
var mi_propiedad = function (target, propertyKey) {
    console.log("target:", target);
    console.log("propertyKey:", propertyKey);
    var clase = target.constructor.name;
    console.log("La propiedad '" + propertyKey + "' está en la clase " + clase);
};
var PC3 = /** @class */ (function () {
    function PC3() {
        this.marca = "APPLE";
    }
    __decorate([
        mi_propiedad,
        __metadata("design:type", String)
    ], PC3.prototype, "marca", void 0);
    return PC3;
}());
