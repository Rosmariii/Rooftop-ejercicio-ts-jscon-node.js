

export class Autor {
    nombre: string;
    apellido: string;
    edad: number;

    constructor(nombre:string, apellido:string, edad:number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getNombre() {
        return this.nombre
    }
    
    getApellido() {
        return this.apellido
    }
    
    getEdad() {
        return this.edad
    }
    
    setNombre() {
        return this.nombre
    }

    setApellido() {
        return this.apellido
    }
    
    setEdad() {
        return this.edad
    }
}

export class Nota {
    titulo: string;
    prioridad: string;
    private fecha: string;
    cuerpo: string;
   

    constructor(titulo: string, prioridad: string, cuerpo:string) {
        this.titulo = titulo;
        this.prioridad = prioridad
        this.fecha = Date();
        this.cuerpo = cuerpo;    

    }

    getTitulo() {
        return this.titulo
    }

    getPriordad() {
        return this.prioridad
    } 
    
    getCuerpo() {
        return this.cuerpo
    }
    
    setTitulo() {
        return this.titulo
    }

    setPriordad() {
        return this.prioridad
    } 
    
    setCuerpo() {
        return this.cuerpo
    }
}

