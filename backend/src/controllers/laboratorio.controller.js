const Laboratorio = require('../models/laboratorio.model');

exports.getAllLaboratorios = async (req, res) => {
  try {
    const laboratorios = await Laboratorio.find().populate('equipos');
    res.json(laboratorios);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getLaboratorioById = async (req, res) => {
  try {
    const laboratorio = await Laboratorio.findById(req.params.id).populate('equipos');
    if (!laboratorio) return res.status(404).json({ error: 'Laboratorio no encontrado' });
    res.json(laboratorio);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createLaboratorio = async (req, res) => {
  try {
    const laboratorio = await Laboratorio.create(req.body);
    res.status(201).json(laboratorio);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateLaboratorio = async (req, res) => {
  try {
    const laboratorio = await Laboratorio.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!laboratorio) return res.status(404).json({ error: 'Laboratorio no encontrado' });
    res.json(laboratorio);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteLaboratorio = async (req, res) => {
  try {
    const laboratorio = await Laboratorio.findByIdAndDelete(req.params.id);
    if (!laboratorio) return res.status(404).json({ error: 'Laboratorio no encontrado' });
    res.json({ message: 'Laboratorio eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
