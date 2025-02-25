import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

// Configurar __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Middleware de Multer dinámico para diferentes carpetas de destino
 * @param {string} folderName - Nombre de la carpeta de destino (e.g. "imgProductos", "curriculums")
 * @returns {multer.Multer} Middleware de Multer configurado
 */
const multerConfig = (folderName) => {
  const uploadDir = path.join(__dirname, "../uploads", folderName);

  // Verificar si la carpeta existe, si no, crearla
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  // Configuración de almacenamiento de archivos
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    }
  });

  return multer({ storage });
};

export default multerConfig;
