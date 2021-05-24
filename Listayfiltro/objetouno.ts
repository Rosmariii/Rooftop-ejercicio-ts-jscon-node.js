

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
    
    setNombre(n: string) {
        this.nombre = n
    }

    setApellido(a: string) {
        return this.apellido = a
    }
    
    setEdad(e: number) {
        return this.edad = e
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
    
    setTitulo(t: string) {
        return this.titulo = t
    }

    setPriordad(p: string) {
        return this.prioridad = p
    } 
    
    setCuerpo(c: string) {
        return this.cuerpo = c
    }
}

