import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    nombre : {type: String, required: true},
    email : {type: String, required: true},
    telefono: {type: String, required: true},
    rol: {type: String, required: true},
    password: {type: String, required: true}
}, { timestamps: true });

const Usuario = mongoose.model('Usuario', usuarioSchema, 'usuarios');

export default Usuario;