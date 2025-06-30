const Equipo = require('../models/equipo.model');

exports.getAllEquipos = async (req, res) => {
  try {
    const equipos = await Equipo.find().populate('laboratorio');
    res.json(equipos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEquipoById = async (req, res) => {
  try {
    const equipo = await Equipo.findById(req.params.id).populate('laboratorio');
    if (!equipo) return res.status(404).json({ error: 'Equipo no encontrado' });
    res.json(equipo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.create(req.body);
    res.status(201).json(equipo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!equipo) return res.status(404).json({ error: 'Equipo no encontrado' });
    res.json(equipo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.findByIdAndDelete(req.params.id);
    if (!equipo) return res.status(404).json({ error: 'Equipo no encontrado' });
    res.json({ message: 'Equipo eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
