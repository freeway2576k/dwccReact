import React from "react";
import "./../css/Carrito.css";
import useCartStore from "../store/cartStore";
import {loadStripe} from "@stripe/stripe-js";
import useAuthStore from "../store/authStore";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Carrito = () => {
  const token = useAuthStore.getState().token;
  
  const {
    carrito,
    envio,
    precioTotal,
    precioSubtotal,
    precioTotalEnvio,
    agregarProducto,
    removerProducto,
    incrementarCantidad,
    decrementarCantidad,
    borrarCarrito,
  } = useCartStore();

  const finalizarCompra = async () =>{
    console.log("iniciando checkout");
    console.log("process.env.REACT_APP_STRIPE_PUBLIC_KEY", import.meta.env.VITE_STRIPE_PUBLIC_KEY);
    const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
    console.log("stripe cargado, enviando al backend", JSON.stringify({ items: carrito, amount: precioTotalEnvio().toFixed(2) }));

    const response = await fetch("http://localhost:5000/atlas/pago/crear-checkout", {
      method: "POST",
      headers: {
        "Authorization": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: carrito, amount: precioTotalEnvio().toFixed(2) })
    });

    const session = await response.json();
    console.log("session response", session);

    if (!session.id) {
      console.log("no se pudo crear el checkout");
      return;
    }

    const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
    if (error) {
      console.log("error al redireccionar al checkout", error);
    }
  }


  return (
    <main className="d-flex flex-column py-5">
      <div className="heroCarrito mb-5">
        <h1>Carrito de Compra</h1>
        <p>Revisa tus artículos antes de proceder al pago.</p>
      </div>
      {carrito.length === 0 && (
        <motion.section className="container"
        initial={{opacity: 0}}
        transition={{duration: 0.3, ease: "easeInOut"}}
        animate={{opacity: 1}}>
          <div className="card p-4 mb-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="section-title">
                Tu carrito esta muy solo, agrega algo anda 🤙
              </h2>
              
            </div>
            <Link to="/tienda" className="btn btn-naranja">Volver a la Tienda</Link>
          </div>
        </motion.section>
      )}
      {carrito.length > 0 && (
        <section className="container">
          <div className="card p-4 mb-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="section-title">Tus Artículos</h2>
              <button
                className="btn btn-outline-danger"
                onClick={borrarCarrito}
              >
                Vaciar Carrito
              </button>
            </div>
            <div className="row g-4">
              <AnimatePresence>
              {carrito.map((articulo, index) => (
                <motion.div className="col-md-4" key={articulo._id}
                layout
                initial={{opacity: 0, y: -30}}
                animate={{opacity: 1, y: 0}}
                exit={{scale: 0.1, opacity: 0}}
                transition={{duration: 0.2, ease: "easeInOut", delay: index * 0.1}}
                >
                  <div className="card h-100 p-3">
                    <div className="d-flex align-items-center">
                      <img
                        src={
                          "http://localhost:5000/uploads/imgProductos/" +
                          articulo.imagen
                        }
                        alt="Máquina de Pesas"
                        className="cart-img me-3"
                      />
                      <div>
                        <h3 className="card-title">{articulo.nombre}</h3>
                        <p>
                          <strong>Precio:</strong> ${articulo.precio.toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="d-flex align-items-center mb-2">
                        <span className="me-2">
                          <strong>Cantidad:</strong>
                        </span>
                        <div className="input-group input-group-sm w-50">
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => decrementarCantidad(articulo._id)}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            className="form-control text-center"
                            value={articulo.quantity}
                            readOnly
                          />
                          <button
                            className="btn btn-outline-dark"
                            onClick={() => incrementarCantidad(articulo._id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <p>
                        <strong>Subtotal:</strong> $
                        {precioSubtotal(articulo._id).toFixed(2)}
                      </p>
                    </div>
                    <button
                      className="btn btn-outline-danger btn-sm mt-auto"
                      onClick={() => removerProducto(articulo._id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </motion.div>
              ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
            <h2 className="section-title mb-4">Resumen</h2>
            <div className="d-flex justify-content-between mb-3">
              <span>Subtotal:</span>
              <span>${precioTotal().toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Envio:</span>
              <span>${envio.toFixed(2)}</span>
            </div>
            <div className="d-flex justify-content-between fw-bold">
              <span>Total:</span>
              <span>${precioTotalEnvio().toFixed(2)}</span>
            </div>
            <button className="btn btn-naranja mt-4 w-100" onClick={finalizarCompra}>
              Proceder al Pago
            </button>
          </div>
        </section>
      )}
    </main>
  );
};
