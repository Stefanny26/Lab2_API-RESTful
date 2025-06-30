const express = require('express');
const router = express.Router();
const controller = require('../controllers/advanced.controller');

// Consulta 1
router.get('/usuarios', controller.getAllUsers);

// Consulta 2
router.get('/laboratorios-disponibles', controller.getLaboratoriosConEquiposDisponibles);

// Consulta 3
router.get('/equipos-disponibles/count', controller.contarEquiposDisponibles);

// Consulta 4
router.get('/usuarios/universitarios', controller.getCorreosInstitucionales);

// Consulta 5
router.get('/promedio-equipos', controller.getPromedioEquiposPorLaboratorio);

module.exports = router;
