import { Link } from 'react-router-dom'
import './../css/NoAutorizado.css';
export const NoAutorizado = () => {
  return (
    <main className="d-flex flex-column min-vh-100 justify-content-center">
      <section className="hero text-center">
        <div className="container">
          <h1 className="display-1 fw-bold">403</h1>
          <h2 className="section-title">¡Acceso Denegado!</h2>
          <p className="lead mb-4">
            Lo sentimos, no tienes permiso para levantar este peso. Contacta al administrador si crees que es un error.
          </p>
          <a href="/" className="btn btn-naranja">Volver al Inicio</a>
        </div>
      </section>
    </main>
  )
}