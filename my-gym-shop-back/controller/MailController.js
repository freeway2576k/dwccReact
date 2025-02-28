import { transporter } from "../config/MailConfig.js";

export const enviarCorreoContacto = (req, res) => {
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
}
