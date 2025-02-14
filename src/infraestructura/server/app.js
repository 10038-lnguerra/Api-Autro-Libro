const express = require('express');
const AutorController = require('../adaptadores/controllers/AutorController');
const LibroController = require('../adaptadores/controllers/LibroController');

const app = express();
app.use(express.json());

// Rutas
app.post('/autores', AutorController.crear);
app.get('/autores', AutorController.listar);

app.post('/libros', LibroController.crear);
app.get('/libros', LibroController.listar);

module.exports = app;
