import express from "express";
import multerConfig from "../middleware/multerConfig.js";
import { uploadFile, deleteFile } from "../controller/fileUploadController.js";
import authMiddleware from '../middleware/authMiddleware.js'; //pa proteger las rutas, llamarlo entre la ruta y el metodo

const router = express.Router();

//--------------------Subir Ficheros ----------------------------------//
router.post("/upload/:folder", authMiddleware, (req, res, next) => {
    const folder = req.params.folder;
    const upload = multerConfig(folder).single("file");
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json({ message: "Error al subir el archivo", error: err.message });
        }
        next();
    });
}, uploadFile);
//--------------------------------------------------------------------//

//--------------------Eliminar Ficheros -------------------------------//
router.delete("/delete/:folder/:filename", authMiddleware, deleteFile);
//--------------------------------------------------------------------//
export default router;
