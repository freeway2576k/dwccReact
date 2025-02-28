import React from 'react'

export const Contacto = () => {
  return (
    <main className="d-flex flex-column py-5">
      <section className="container">
        {/* Hero Section */}
        <div className="heroContacto mb-5">
          <h1>Contacto</h1>
          <p>Estamos aquí para ayudarte a equipar tu gimnasio.</p>
        </div>

        {/* Formulario y Información de Contacto */}
        <div className="row g-4">
          {/* Formulario */}
          <div className="col-md-6">
            <div className="card p-4">
              <h2 className="section-title mb-4">Envía tu Mensaje</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ej. usuario@gym.com"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Mensaje</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Escribe tu consulta aquí..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-naranja w-100">Enviar</button>
              </form>
            </div>
          </div>

          {/* Información de Contacto */}
          <div className="col-md-6">
            <div className="card p-4 h-100">
              <h2 className="section-title mb-4">Nuestra Información</h2>
              <div className="contact-info">
                <p><i className="bi bi-geo-alt-fill me-2"></i> Dirección: Calle Fitness 123, Ciudad Deportiva</p>
                <p><i className="bi bi-telephone-fill me-2"></i> Teléfono: +123 456 7890</p>
                <p><i className="bi bi-envelope-fill me-2"></i> Email: info@gymforce.com</p>
                <p><i className="bi bi-clock-fill me-2"></i> Horario: Lunes a Viernes, 9:00 - 18:00</p>
              </div>
              <div className="mt-4">
                <h3 className="mb-3">Síguenos</h3>
                <div className="social-links">
                  <a href="#" className="text-muted me-3"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-muted me-3"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="text-muted me-3"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
