import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Configurar __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Subir archivo (imágenes, documentos, etc.)
export const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No se subió ningún archivo" });
  }
  res.json({ fileUrl: req.file.filename });
};

// Eliminar archivo genérico
export const deleteFile = (req, res) => {
  const { folder, filename } = req.params;
  const filePath = path.join(__dirname, "../uploads", folder, filename);

  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).json({ message: "Archivo no encontrado" });
    }

    fs.unlink(filePath, (err) => {
      if (err) {
        return res.status(500).json({ message: "Error al eliminar el archivo", error: err });
      }
      res.json({ message: "Archivo eliminado correctamente" });
    });
  });
};
