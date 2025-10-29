import ServicioLibros from "../service/libros.js"

class ControladorLibros {

    constructor() {
        this.servicioLibros = new ServicioLibros()
    }

    obtenerLibros = async (req, res) => {
        try {
            const libros = await this.servicioLibros.obtenerLibros()
            res.send(libros)
        } catch (error) {
            console.log('error obtenerLibros', error)
            res.status(500).json({ error: 'Error al obtener libros' })
        }
    }

    obtenerLibro = async (req, res) => {
        try {
            const { id } = req.params
            const libro = await this.servicioLibros.obtenerLibro(id)
            if (!libro || libro.length === 0) {
                return res.status(404).json({ error: 'Libro no encontrado' })
            }
            res.json(libro[0])
        } catch (error) {
            console.log('error obtenerLibro', error)
            res.status(500).json({ error: 'Error al obtener libro' })
        }
    }

    guardarLibro = async (req, res) => {
        try {
            let libro = req.body
            let libroGuardado = await this.servicioLibros.guardarLibro(libro)
            res.status(201).json(libroGuardado)
        } catch (error) {
            console.log('error guardarLibro', error)
            res.status(500).json({ error: 'Error al guardar libro' })
        }
    }

    actualizarLibro = async (req, res) => {
        try {
            const { id } = req.params
            const datosActualizados = req.body
            const libroActualizado = await this.servicioLibros.librosMem.actualizarLibro(parseInt(id), datosActualizados)
            if (!libroActualizado) {
                return res.status(404).json({ error: 'Libro no encontrado' })
            }
            res.json(libroActualizado)
        } catch (error) {
            console.log('error actualizarLibro', error)
            res.status(500).json({ error: 'Error al actualizar libro' })
        }
    }

    borrarLibro = async (req, res) => {
        try {
            const { id } = req.params
            const libroBorrado = await this.servicioLibros.borrarLibro(parseInt(id))
            if (!libroBorrado) {
                return res.status(404).json({ error: 'Libro no encontrado' })
            }
            res.json(libroBorrado)
        } catch (error) {
            console.log('error borrarLibro', error)
            res.status(500).json({ error: 'Error al borrar libro' })
        }
    }
}

export default ControladorLibros
