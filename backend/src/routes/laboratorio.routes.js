const express = require('express');
const router = express.Router();
const laboratorioController = require('../controllers/laboratorio.controller');

// Listar todos los laboratorios (con equipos poblados)
router.get('/', laboratorioController.getAllLaboratorios);
router.get('/:id', laboratorioController.getLaboratorioById);

// Crear un laboratorio
router.post('/', laboratorioController.createLaboratorio);

// Actualizar un laboratorio
router.put('/:id', laboratorioController.updateLaboratorio);

// Eliminar un laboratorio
router.delete('/:id', laboratorioController.deleteLaboratorio);

module.exports = router;
