import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) return res.status(401).json({mensaje: "No es posible autenticar sin token"});

    try{
        const decodificado = jwt.verify(token, JWT_SECRET);
        req.usuario = decodificado;
        next();
    } catch (error){
        console.log(error);
        res.status(401).json({mensaje: "Token no valido"});
    }
};

export default authMiddleware;