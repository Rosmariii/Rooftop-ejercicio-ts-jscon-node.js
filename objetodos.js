"use strict";
exports.__esModule = true;
var objetouno_1 = require("./objetouno");
var autor = new objetouno_1.Autor('Juan', 'Gomez', 34);
console.log(autor.getApellido());
var notepad = new objetouno_1.Nota('clases', 'alta', 'Las clases del dia 25 se dicatarn normalmente, no faltar.');
console.log(notepad.getPriordad());
