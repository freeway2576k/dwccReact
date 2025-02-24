import express from 'express';
const router = express.Router();
import Articulo from '../model/Articulo.js';
import authMiddleware from '../middleware/authMiddleware.js'; //pa proteger las rutas, llamarlo entre la ruta y el metodo

//--------------------Almacenar Articulo -------------------------------//
router.post( '/',authMiddleware, async(req, res) =>{
    try{
        const nuevoArticulo = new Articulo(req.body);
        await nuevoArticulo.save();
        res.status(201).json({mensaje: "Articulo almacenado"});
    }catch(error){
        console.log(error);
        res.status(500).json({mensaje: "Error al almacenar articulo"});
    }
});
//--------------------------------------------------------------------//

//--------------------Obtener Articulos ----------------------------------//
router.get('/',authMiddleware, async(req,res) => {
    try{
        const articulos = await Articulo.find();
        res.json(articulos);
    }catch(error){
        console.log(error);
        res.status(500).json({mensaje: "Error al buscar articulo"});
    }
})
//--------------------------------------------------------------------//

//--------------------Modificar Articulo ---------------------------------//
router.put('/:id',authMiddleware, async(req, res) =>{
    try{
        const articuloModificado = await Articulo.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!articuloModificado) return res.status(404).json({mensaje: "Articulo no encontrado"});
        res.json({mensaje: "Articulo modificado", articulo: articuloModificado});
    }catch(error){
        console.log(error);
        res.status(500).json({mensaje: "Error al modificar articulo"});
    }
})
//--------------------------------------------------------------------//

//--------------------Eliminar Articulo ---------------------------------//
router.delete('/:id',authMiddleware, async(req, res) => {
    try{
        const articuloEliminado = await Articulo.findByIdAndDelete(req.params.id);
        if(!articuloEliminado) return res.status(404).json({mensaje: "Articulo no encontrado"});
        res.json({mensaje: "Articulo eliminado"});
    } catch(error){
        console.log(error);
        res.status(500).json({mensaje: "Error al eliminar articulo"});
    }
})
//--------------------------------------------------------------------//

export default router;