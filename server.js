import express from 'express'

const app = express();


app.get('/', (req, res) => {
    res.send('iniciando server express');
});


const PORT = 8080;
const server = app.listen(PORT, 
    () => console.log(`Servidor express escuchando en http://localhost:${PORT}`)
)
server.on('error', error => console.log('Servidor express en error:', error) )

