import express from "express";
const router = express.Router();
import Stripe from 'stripe';
import authMiddleware from '../middleware/authMiddleware.js'; //pa proteger las rutas, llamarlo entre la ruta y el metodo

//-----------------------------------Para lo del Pago------------------------------------------//
//calve privade de Stripe

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
console.log("Stripe secret key:", process.env.STRIPE_SECRET_KEY);

//ruta para crear un checkout
router.post("/crear-checkout", authMiddleware, async (req, res) => {
    try{
      //obtener los items de la session
      console.log("Datos recibidos:", req.body);
      const {items, amount} = req.body;

      //verificamos los items
      if (!items || !Array.isArray(items) || items.length === 0){
        return res.status(400).json({error: "No hay items en la session"});
      }

      if (!amount || isNaN(amount) || amount <= 0){
        return res.status(400).json({error: "El monto no es un numero"});
      }
      //Creaamos los items para la sesion de pago
      const lineItems = items.map(item => ({
        price_data: {
          currency: "eur",
          product_data:{
            name: item.nombre,
          },
          unit_amount: item.precio * 100,
        },
        quantity: item.quantity,
      }));
      //crear la sesion de pago
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:5173/exito",
        cancel_url: "http://localhost:5173/fallo",
      });
      //respondemos con el ID de la sesion de Stripe
      res.json({id: session.id});
      
    }catch(error){
      console.log("error al crear checkout", error);
      return res.status(500).json({error: "Error al crear checkout"});
    }
});

//---------------------------------------------------------------------------------------------//

export default router;