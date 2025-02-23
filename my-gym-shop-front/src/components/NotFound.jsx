import React from 'react'
import './../css/notFound.css'
import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <main className="d-flex flex-column min-vh-100 justify-content-center">
      <section className="hero text-center">
        <div className="container">
          <h1 className="display-1 fw-bold">404</h1>
          <h2 className="section-title">¡ALTO FLACOW!</h2>
          <p className="lead mb-4">
            Parece que esta página tiene brazo de 35. No te preocupes, tu marido the gym shop está aquí para ayudarte a volver al entrenamiento.
          </p>
          <Link to={'/'} className="btn btn-naranja mt-4">Volver al Inicio</Link>
        </div>
      </section>
    </main>
  );
}
