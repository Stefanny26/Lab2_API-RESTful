require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./src/app');
const PORT = 3001;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en puerto ${PORT}`);
    });
  })
  .catch(err => console.log(err));