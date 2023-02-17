const express = require('express');

this.app = express();
this.app.use('/api/hola', require('./routes'));
this.app.listen(8081, () => { 
  console.log('Servidor corriendo en 8081'); 
});