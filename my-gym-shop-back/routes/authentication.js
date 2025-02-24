import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Usuario from "../model/Usuario.js";
import { body, validationResult } from "express-validator";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

//--------------------Registro de Usuario -------------------------------//
router.post(
  "/registro",
  [
    body("nombre").notEmpty().withMessage("El nombre es requerido"),
    body("email").notEmpty().isEmail().withMessage("El email es requerido"),
    body("telefono").notEmpty().withMessage("El telefono es requerido"),
    body("password").notEmpty().withMessage("La contraseña es requerida"),
  ],
  async (req, res) => {
    console.log("datos recibidos", req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({
        mensaje: "los campos no superan los requisitos o estan vacios",
        errores: errors.array(),
      });

    const { nombre, email, telefono, rol, password } = req.body;

    try {
      let usuarioEncontrado = await Usuario.findOne({ email });
      if (usuarioEncontrado)
        return res.status(400).json({ mensaje: "El usuario ya existe" });
      const salt = await bcrypt.genSalt(10);
      const contrasenhaEncriptada = await bcrypt.hash(password, salt);
      const nuevoUsuario = new Usuario({
        nombre,
        email,
        telefono,
        rol,
        password: contrasenhaEncriptada,
      });

      await nuevoUsuario.save();
      res.status(201).json({ mensaje: "Usuario registrado" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: "Error en el servidor" });
    }
  }
);
//-----------------------------------------------------------------------//

//--------------------Login de Usuario ----------------------------------//
router.post(
  "/login",
  [
    body("email").notEmpty().isEmail().withMessage("El email es requerido"),
    body("password").notEmpty().withMessage("La contraseña es requerida"),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res
        .status(400)
        .json({
          mensaje: "Email o contrasenha incorrectos",
          errores: errors.array(),
        });
    const { email, password } = req.body;
    try {
      const usuarioEncontrado = await Usuario.findOne({email});
      if (!usuarioEncontrado)
        return res.status(404).json({ mensaje: "Usuario no encontrado" });

      const contrasenhaCorrecta = await bcrypt.compare(
        password,
        usuarioEncontrado.password
      );
      if (!contrasenhaCorrecta)
        return res.status(401).json({ mensaje: "Contraseña incorrecta" });

      const payload = { id: usuarioEncontrado._id, rol: usuarioEncontrado.rol };
      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

      res.json({ mensaje: "Usuario autenticado", token: token });
    } catch (error) {
      console.log(error);
      res.status(500).json({ mensaje: "Error en el servidor" });
    }
  }
);
//-----------------------------------------------------------------------//

export default router;
