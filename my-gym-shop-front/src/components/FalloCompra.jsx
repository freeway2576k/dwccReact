import React from 'react'
import { Link } from 'react-router-dom'
import './../css/FalloCompra.css'
export const FalloCompra = () => {
  return (
    <main className="d-flex flex-column min-vh-100 justify-content-center">
      <section className="hero text-center">
        <div className="container">
          <i className="bi bi-exclamation-triangle display-1 text-danger mb-4"></i>
          <h1 className="display-4 fw-bold">¡Compra Fallida!</h1>
          <h2 className="section-title">No pudimos completar tu pedido</h2>
          <p className="lead mb-4">
            Lo sentimos, ocurrió un problema al procesar tu compra. Por favor, verifica tus datos o contáctanos para asistencia. ¡No te rindas, tu gimnasio merece lo mejor!
          </p>
          <Link to="/carrito" className="btn btn-naranja">Volver al Carrito</Link>
        </div>
      </section>
    </main>
  )
}
