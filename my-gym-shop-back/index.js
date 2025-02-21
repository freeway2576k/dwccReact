const express = require('express');
const cors = require('cors'); //para permitir quien diabloh se conecta
const app = express(); // pa crear el servidor de la mas alta CALIDAAH
const mongoose = require('mongoose'); //para la conexion a la bbdd
const multer = require('multer'); // para la subida de archivos

const PORT = 5000;

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  }));


app.get('/', (req, res) => {
  res.json({ mensaje: 'Hola desde Express' });
});

mongoose.connect("mongodb://localhost:27017/gym")
.then(()=> console.log("conectado a la bbdd 'gym' de MongoDB"))
.catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
