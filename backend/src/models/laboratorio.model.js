const mongoose = require('mongoose');

const laboratorioSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    ubicacion: { type: String, required: true }
  },
  {
    toObject: { virtuals: true },
    toJSON:   { virtuals: true }
  }
);

// Virtual para “equipos” relacionados
laboratorioSchema.virtual('equipos', {
  ref: 'Equipo',
  localField: '_id',
  foreignField: 'laboratorio'
});

module.exports =
  mongoose.models.Laboratorio ||
  mongoose.model('Laboratorio', laboratorioSchema);
