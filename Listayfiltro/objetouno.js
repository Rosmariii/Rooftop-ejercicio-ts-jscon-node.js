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
    Autor.prototype.setNombre = function () {
        return this.nombre;
    };
    Autor.prototype.setApellido = function () {
        return this.apellido;
    };
    Autor.prototype.setEdad = function () {
        return this.edad;
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
    Nota.prototype.setTitulo = function () {
        return this.titulo;
    };
    Nota.prototype.setPriordad = function () {
        return this.prioridad;
    };
    Nota.prototype.setCuerpo = function () {
        return this.cuerpo;
    };
    return Nota;
}());
exports.Nota = Nota;

//module.exports = Persona