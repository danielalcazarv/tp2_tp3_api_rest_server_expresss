class LibrosMemoria {
    
    constructor() {
        this.libros = []
    }

    getNext_Id(libros) {
        let lg = libros.length
        return lg? parseInt(libros[lg-1].id) + 1 : 1
    }

    obtenerLibros = async () => {
        try {
            return this.libros
        }
        catch(error) {
            console.log('error en obtenerLibros', error)
            return []
        }
    }

    obtenerLibro = async id => {
        try {
            return this.libros.filter(n => n.id == id)
        } catch (error) {
            console.log('error en obtenerLibroId', error)
            return []
        }
    }

    guardarLibro = async nota => {
        try {
            const id = this.getNext_Id(this.libros)
            const libroNuevo = {id, ...nota}
            this.notas.push(libroNuevo)
            return libroNuevo
        } catch (error) {
            console.log('error en guardarLibro:',error)
            let libro = {}
            return libro
        }
    }

        actualizarLibro = async (id, datosActualizados) => {
        try {
            const index = this.libros.findIndex(l => l.id == id)
            if (index === -1) return null
            this.libros[index] = { ...this.libros[index], ...datosActualizados }
            return this.libros[index]
        } catch (error) {
            console.log('error en actualizarLibro:', error)
            return null
        }
    }

    borrarLibro = async id => {
        try {
            const index = this.libros.findIndex(l => l.id == id)
            if (index === -1) return null
            const libroEliminado = this.libros.splice(index, 1)[0]
            return libroEliminado
        } catch (error) {
            console.log('error en borrarLibro:', error)
            return null
        }
    }
}

export default LibrosMemoria