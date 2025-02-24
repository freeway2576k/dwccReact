import express from 'express';
const router = express.Router();
import Usuario from '../model/Usuario.js';
import authMiddleware from '../middleware/authMiddleware.js'; //pa proteger las rutas, llamarlo entre la ruta y el metodo

//--------------------Almacenar Usuario -------------------------------//
router.post( '/',authMiddleware, async(req, res) =>{
    try{
        const nuevoUsuario = new Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json({mensaje: "Usuario almacenado"});
    }catch(error){
        console.log(error);
        res.status(500).json({mensaje: "Error al almacenar usuario"});
    }
});
//--------------------------------------------------------------------//

//--------------------Obtener Usuarios ----------------------------------//
router.get('/',authMiddleware, async(req,res) => {
    try{
        const usuarios = await Usuario.find();
        res.json(usuarios);
    }catch(error){
        console.log(error);
        res.status(500).json({mensaje: "Error al buscar usuario"});
    }
})
//--------------------------------------------------------------------//

//--------------------Modificar Usuario ---------------------------------//
router.put('/:id',authMiddleware, async(req, res) =>{
    try{
        const usuarioModificado = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!usuarioModificado) return res.status(404).json({mensaje: "Usuario no encontrado"});
        res.json({mensaje: "Usuario modificado", usuario: usuarioModificado});
    }catch(error){
        console.log(error);
        res.status(500).json({mensaje: "Error al modificar usuario"});
    }
})
//--------------------------------------------------------------------//

//--------------------Eliminar Usuario ---------------------------------//
router.delete('/:id',authMiddleware, async(req, res) => {
    try{
        const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
        if(!usuarioEliminado) return res.status(404).json({mensaje: "Usuario no encontrado"});
        res.json({mensaje: "Usuario eliminado"});
    } catch(error){
        console.log(error);
        res.status(500).json({mensaje: "Error al eliminar usuario"});
    }
})
//--------------------------------------------------------------------//

export default router;