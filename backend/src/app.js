const express = require('express');
const cors = require('cors'); // <--- Agrega esta línea
const app = express();

app.use(cors()); // <--- Y esta línea
app.use(express.json());

// Rutas normales
app.use('/users', require('./routes/user.routes'));
app.use('/laboratorios', require('./routes/laboratorio.routes'));
app.use('/equipos', require('./routes/equipo.routes'));

// Rutas de consultas avanzadas
app.use('/consultas', require('./routes/advanced.routes'));

module.exports = app;
