const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: String,
  correo: { type: String, unique: true, required: true }
});

// Verifica si ya está compilado (útil en desarrollo o hot reload)
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
