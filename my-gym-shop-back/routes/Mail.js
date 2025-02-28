
import nodemailer from 'nodemailer';
import express from 'express';
const router = express.Router();
import dotenv from 'dotenv';
dotenv.config();


//-----------------------------------Para lo del Contacto------------------------------------------//
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false,
    }
  });
  
  console.log('EMAIL_USER:', process.env.EMAIL_USER);
  console.log('EMAIL_PASS:', process.env.EMAIL_PASS);
  
  router.post('/enviar-correo', (req, res) => {
    console.log('Datos Recibidos:', req.body);
    const { nombre, email, mensaje } = req.body;
  
    const mailOptions = {
        from: email,
        to: 'felipe.meneses.test@gmail.com', // aquí a qien se lo mandas
        subject: 'Mensaje de contacto',
        text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            return res.status(500).json({ error: 'Error al enviar el mensaje, por favor inténtelo nuevamente.' });
        } else {
            console.log('Email enviado: ' + info.response);
            return res.status(200).json({ message: 'Mensaje enviado correctamente' });
        }
    });
  });
  //---------------------------------------------------------------------------------------------//

  export default router;