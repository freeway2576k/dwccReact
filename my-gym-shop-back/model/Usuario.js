import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
    nombre : {type: String, required: true},
    email : {type: String, required: true},
    telefono: {type: String, required: true},
    rol: {type: String, required: true},
    password : {type: String, required: true},
    fechaAlta : {type: Date, required: true},
});

export const Usuario = mongoose.model('Usuario', usuarioSchema);