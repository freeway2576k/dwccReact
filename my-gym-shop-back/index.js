import express from 'express';
import cors from 'cors'; //para permitir quien diabloh se conecta
const app = express(); // pa crear el servidor de la mas alta CALIDAAH
import mongoose from 'mongoose'; //para la conexion a la bbdd
import path from 'path';
import rutasUsuarios from './routes/Usuarios.js';
import rutasArticulos from './routes/Articulo.js';
import rutasAuth from './routes/authentication.js';
import rutasFicheros from './routes/Ficheros.js';
import dotenv from 'dotenv'; //pa que no te hackiee las pass y las keys

dotenv.config();

const PORT = process.env.PORT;
app.use(express.json()); //pa q pueda manejar json en el body sino en las rutas se hace kkita
// ----------------------- lo del cors -------------------------------//
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], 
  }));
//--------------------------------------------------------------------//

//-------------------- las rutas y eso -------------------------------//
app.use('/atlas/auth', rutasAuth);
app.use('/atlas/usuarios', rutasUsuarios);
app.use('/atlas/articulos', rutasArticulos);
app.use('/atlas/ficheros', rutasFicheros);
app.use("/uploads", express.static(path.join("uploads")));
//--------------------------------------------------------------------//

app.get('/', (req, res) => {
  res.json({ mensaje: 'Hola desde Express' });
});

mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("conectado a la bbdd 'gym' de MongoDB"))
.catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log("jwt secreto", process.env.JWT_SECRET);
});
