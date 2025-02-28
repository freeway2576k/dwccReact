import express from 'express';
const router = express.Router();
import { enviarCorreoContacto } from '../controller/MailController.js';
import dotenv from 'dotenv';
dotenv.config();


//-----------------------------------Para lo del Contacto------------------------------------------//

  router.post('/enviar-correo-contacto', enviarCorreoContacto);
  //---------------------------------------------------------------------------------------------//

  export default router;