import React from 'react'
import './../css/SobreNosotros.css'
export const SobreNosotros = () => {
  return (
    <main className="d-flex flex-column">
      <section className="hero">
        <div className="container">
          <h1>Sobre Nosotros</h1>
          <p>Construimos el futuro del fitness profesional con equipos de primera calidad para gimnasios.</p>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <h2 className="section-title text-center">Nuestra Misión</h2>
          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <p className="lead">
                En GymForce, nos dedicamos a proporcionar a los gimnasios las herramientas más avanzadas y duraderas del mercado. Nuestro objetivo es potenciar el éxito de tu negocio con equipos que combinan innovación, resistencia y diseño.
              </p>
              <a href="#contacto" className="btn btn-naranja mt-3">Contáctanos</a>
            </div>
            <div className="col-md-6">
              <div className="feature-card">
                <img
                  src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069"
                  alt="Máquina de gimnasio"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-dark text-white">
        <div className="container">
          <h2 className="section-title text-center">Nuestros Valores</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="bi bi-gear-wide-connected"></i>
                <h3>Innovación</h3>
                <p>Tecnología de vanguardia para optimizar el entrenamiento.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="bi bi-hammer"></i>
                <h3>Durabilidad</h3>
                <p>Máquinas construidas para resistir el uso intensivo diario.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-card text-center">
                <i className="bi bi-people"></i>
                <h3>Compromiso</h3>
                <p>Apoyamos a los gimnasios en cada paso de su crecimiento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
