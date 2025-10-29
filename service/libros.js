import LibrosMemoria from "../model/librosMemoria.js";

class ServicioLibros {

    constructor() {
        this.librosMem = new LibrosMemoria()
    }

    async obtenerLibros(){
        let libros = await this.librosMem.obtenerLibros()
        return libros
    }

    async obtenerLibro(id) {
        return await this.librosMem.obtenerLibro(id)
    }

    async guardarLibro(libro) {
        return await this.librosMem.guardarLibro(libro)
    }

    async borrarLibro(id) {
        return await this.librosMem.borrarLibro(id)
    }

}

export default ServicioLibros