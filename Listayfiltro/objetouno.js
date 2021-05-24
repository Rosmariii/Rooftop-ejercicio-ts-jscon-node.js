"use strict";
exports.__esModule = true;
exports.Nota = exports.Autor = void 0;
var Autor = /** @class */ (function () {
    function Autor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Autor.prototype.getNombre = function () {
        return this.nombre;
    };
    Autor.prototype.getApellido = function () {
        return this.apellido;
    };
    Autor.prototype.getEdad = function () {
        return this.edad;
    };
    Autor.prototype.setNombre = function (n) {
        this.nombre = n;
    };
    Autor.prototype.setApellido = function (a) {
        return this.apellido = a;
    };
    Autor.prototype.setEdad = function (e) {
        return this.edad = e;
    };
    return Autor;
}());
exports.Autor = Autor;
var Nota = /** @class */ (function () {
    function Nota(titulo, prioridad, cuerpo) {
        this.titulo = titulo;
        this.prioridad = prioridad;
        this.fecha = Date();
        this.cuerpo = cuerpo;
    }
    Nota.prototype.getTitulo = function () {
        return this.titulo;
    };
    Nota.prototype.getPriordad = function () {
        return this.prioridad;
    };
    Nota.prototype.getCuerpo = function () {
        return this.cuerpo;
    };
    Nota.prototype.setTitulo = function (t) {
        return this.titulo = t;
    };
    Nota.prototype.setPriordad = function (p) {
        return this.prioridad = p;
    };
    Nota.prototype.setCuerpo = function (c) {
        return this.cuerpo = c;
    };
    return Nota;
}());
exports.Nota = Nota;
