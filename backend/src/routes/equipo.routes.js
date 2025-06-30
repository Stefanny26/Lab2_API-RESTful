const express = require('express');
const router = express.Router();
const equipoController = require('../controllers/equipo.controller');

// Listar todos los equipos (con laboratorio poblado)
router.get('/', equipoController.getAllEquipos);
router.get('/:id', equipoController.getEquipoById);

// Crear un equipo
router.post('/', equipoController.createEquipo);

// Actualizar un equipo
router.put('/:id', equipoController.updateEquipo);

// Eliminar un equipo
router.delete('/:id', equipoController.deleteEquipo);

module.exports = router;
