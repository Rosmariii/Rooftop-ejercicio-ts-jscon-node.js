const { Nota } = require('./objetouno');
const { Autor } = require('./objetouno');


var autor = new Autor('Ada', 'Lovelace', 28)
var notepad = new Nota('Nota', 'alta', 'Describir los algoritmos para ser procesados en una maquina')

var autor1 = new Autor('Pedro', 'Lopez', 29)
var notepad1 = new Nota('limpieza', 'media', 'Comprar articulos de limpieza')

var autor2 = new Autor('Marie', 'Curie', 44)
var notepad2 = new Nota('Premio Nobel', 'Alta', 'Ir a recibir el premio Nobel')

var notasyAutores = [ {...autor, ...notepad }, {...autor1, ...notepad1}, {...autor2, ...notepad2} ]


let lista = notasyAutores.filter(item => item.edad > 30)
console.log(lista)