const mongoose = require('mongoose');

const equipoSchema = new mongoose.Schema({
  tipo:   { type: String,   required: true },
  estado: {
    type: String,
    enum: ['disponible', 'ocupado', 'dañado'],
    default: 'disponible'
  },
  laboratorio: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'Laboratorio',
    required: true
  }
});

module.exports =
  mongoose.models.Equipo ||
  mongoose.model('Equipo', equipoSchema);
