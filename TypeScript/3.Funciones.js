"use strict";
//Parametros obligatoros, por defecto y opcionales (?)
function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activo la " + objeto + " en la " + momento + ".";
    }
    else {
        mensaje = quien + " activo la " + objeto + ".";
    }
    console.log(mensaje);
}
activar("Gordon");
activar("Gordon", "Computadora");
activar("Gordon", "Computadora", "mañana");
// Funciones de Flecha 
var miFuncion = function (a) {
    return a;
};
// Recibe como argumento a y retorna a
var miFuncionF = function (a) { return a; };
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
var miFuncion3 = function (nombre3) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
console.log(miFuncion("Hola Alonso."));
console.log(miFuncion("Hola Jose."));
console.log(miFuncion3("Jose."));
console.log(miFuncion3F("Jose."));
// Porque son buenas las funciones de flecha
// Cuando se ejecuta un timeout dentro de un objeto
// El timeout apunta al objeto global no a su scope.
var hulk = {
    nombre: "Hulk",
    smash: function () {
        setTimeout(function () {
            console.log(this.nombre + " smash!!");
        }, 1500);
    }
};
// Importancia de la flecha hace que trabaje sobre el scope.
// El this no es afectado.
var ironman = {
    nombre: "Ironman",
    smash: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombre + " smash!!");
        }, 1500);
    }
};
hulk.smash();
ironman.smash();
