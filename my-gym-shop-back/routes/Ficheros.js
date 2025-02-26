import express from "express";
import multerConfig from "../middleware/multerConfig.js";
import { uploadFile, deleteFile } from "../controller/fileUploadController.js";
const router = express.Router();

//--------------------Subir Ficheros ----------------------------------//
router.post("/upload/:folder", (req, res, next) => {
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
router.delete("/delete/:folder/:filename", deleteFile);
//--------------------------------------------------------------------//
export default router;
