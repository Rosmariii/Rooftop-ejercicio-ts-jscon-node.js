import {Autor, Nota} from'./objetouno' 

var autor = new Autor('Juan', 'Gomez', 34 )

console.log(autor.getApellido())

var notepad = new Nota('clases', 'alta', 'Las clases del dia 25 se dicatarn normalmente, no faltar.')

console.log(notepad.getPriordad())
