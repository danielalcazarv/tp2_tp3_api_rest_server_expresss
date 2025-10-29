import express from 'express'
import ControladorLibros from '../controller/libros.js'

class RouterLibros {
    
    constructor() {
        this.controladorLibros = new ControladorLibros()
        this.router = express.Router()
    }

    start(){
        this.router.get('/libros', this.controladorLibros.obtenerLibros)
        this.router.get('/libros/:id', this.controladorLibros.obtenerLibro)
        this.router.post('/libros', this.controladorLibros.guardarLibro)
        this.router.put('/libros/:id', this.controladorLibros.actualizarLibro)
        this.router.delete('/libros/:id', this.controladorLibros.borrarLibro)

        return this.router
    }

}

export default RouterLibros