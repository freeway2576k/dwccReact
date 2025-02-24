import mongoose from 'mongoose';

const articuloSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    categoria: {type: String, required: true},
    precio: {type: Number, required: true},
    stock: {type: Number, required: true},
    marca: {type: String, required: true},
    peso: {type: Number, required: true},
    dimensiones: {type: String, required: true},
    estado: {type: String, required: true},
    descripcion: {type: String, required: true}   
}, { timestamps: true });

const Articulo = mongoose.model('Articulo', articuloSchema, 'articulos');

export default Articulo;