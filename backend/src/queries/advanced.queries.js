const User = require('../models/user.model');
const Laboratorio = require('../models/laboratorio.model');
const Equipo = require('../models/equipo.model');

module.exports = {
  // 1. Listar usuarios
  listarUsuarios: async (req, res) => {
    try {
      const usuarios = await User.find();
      res.json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 2. Laboratorios con equipos disponibles
  laboratoriosConEquiposDisponibles: async (req, res) => {
    try {
      const laboratorios = await Laboratorio.find().populate({
        path: 'equipos',
        match: { estado: 'disponible' }
      });
      res.json(laboratorios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 3. Contar equipos por estado disponible
  contarEquiposDisponibles: async (req, res) => {
    try {
      const totalDisponibles = await Equipo.countDocuments({ estado: 'disponible' });
      res.json({ totalDisponibles });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 4. Buscar usuarios con correos institucionales
  buscarCorreosInstitucionales: async (req, res) => {
    try {
      const universitarios = await User.find({ correo: { $regex: /@universidad\.edu$/ } });
      res.json(universitarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // 5. Promedio de equipos por laboratorio
  promedioEquiposPorLaboratorio: async (req, res) => {
    try {
      const resultado = await Laboratorio.aggregate([
        {
          $lookup: {
            from: 'equipos',
            localField: '_id',
            foreignField: 'laboratorio',
            as: 'equipos'
          }
        },
        {
          $project: {
            nombre: 1,
            totalEquipos: { $size: '$equipos' }
          }
        },
        {
          $group: {
            _id: null,
            promedio: { $avg: '$totalEquipos' }
          }
        }
      ]);
      res.json(resultado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
