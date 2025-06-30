const User = require('../models/user.model');
const Equipo = require('../models/equipo.model');
const Laboratorio = require('../models/laboratorio.model');

module.exports = {
  // 1. Listar todos los usuarios
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // 2. Buscar laboratorios con equipos disponibles
  getLaboratoriosConEquiposDisponibles: async (req, res) => {
    try {
      const laboratorios = await Laboratorio.find().populate({
        path: 'equipos',
        match: { estado: 'disponible' }
      });
      res.json(laboratorios);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // 3. Contar equipos disponibles
  contarEquiposDisponibles: async (req, res) => {
    try {
      const total = await Equipo.countDocuments({ estado: 'disponible' });
      res.json({ total });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // 4. Buscar usuarios con correo institucional
  getCorreosInstitucionales: async (req, res) => {
    try {
      const usuarios = await User.find({ correo: { $regex: /@universidad\.edu$/ } });
      res.json(usuarios);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // 5. Promedio de equipos por laboratorio
  getPromedioEquiposPorLaboratorio: async (req, res) => {
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
      res.json(resultado[0] || { promedio: 0 });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};
