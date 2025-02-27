import React from "react";
import "./../css/Carrito.css";
import useCartStore from "../store/cartStore";

export const Carrito = () => {
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

  return (
    <main className="d-flex flex-column py-5">
      <div className="heroCarrito mb-5">
        <h1>Carrito de Compra</h1>
        <p>Revisa tus artículos antes de proceder al pago.</p>
      </div>
      {carrito.length === 0 && (
        <section className="container">
          <div className="card p-4 mb-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="section-title">
                Tu carrito esta muy solo, agrega algo anda 🤙
              </h2>
            </div>
          </div>
        </section>
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
              {carrito.map((articulo, index) => (
                <div className="col-md-4">
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
                          <strong>Precio:</strong> ${articulo.precio}
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
                        {precioSubtotal(articulo._id)}
                      </p>
                    </div>
                    <button
                      className="btn btn-outline-danger btn-sm mt-auto"
                      onClick={() => removerProducto(articulo._id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
            <h2 className="section-title mb-4">Resumen</h2>
            <div className="d-flex justify-content-between mb-3">
              <span>Subtotal:</span>
              <span>${precioTotal()}</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Envio:</span>
              <span>${envio}</span>
            </div>
            <div className="d-flex justify-content-between fw-bold">
              <span>Total:</span>
              <span>${precioTotalEnvio()}</span>
            </div>
            <button className="btn btn-naranja mt-4 w-100">
              Proceder al Pago
            </button>
          </div>
        </section>
      )}
    </main>
  );
};
