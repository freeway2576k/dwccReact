import { useState } from 'react'

export const Contacto = () => {

  //-----------------------doonde guardamos el objecto contaco -------------------------//

  const [contacto, setContacto] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const manejarCambiosInput = (e) =>{
    const { name, value} = e.target;
    setContacto(prevContacto =>{
      return {...prevContacto, [name]: value}
    })
   }
  //------------------------------------------------------------------------------------//
  const enviarCorreo = (e) => {
    e.preventDefault();
    //meter validacion de camposs
    console.log("datos recolectados", contacto);

      fetch('http://localhost:5000/atlas/mail/enviar-correo', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(contacto),
      })
          .then(response => response.json())
          .then(data => {
              if (data.message) {
                  console.log('¡Mensaje enviado con éxito!');
                  // Opcional: Reseteamos el formulario
              } else {
                  console.log('Hubo un problema al enviar el mensaje. Intenta de nuevo.');
              }
          })
          .catch(error => {
              console.error('Error:', error);
              console.log('Hubo un error en la conexión con el servidor. Intenta nuevamente.');
          });
  }
  

  return (
    <main className="d-flex flex-column py-5">
      <section className="container">
        <div className="heroContacto mb-5">
          <h1>Contacto</h1>
          <p>Estamos aquí para ayudarte a equipar tu gimnasio.</p>
        </div>

        <div className="row g-4">
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
                    name='nombre'
                    value={contacto.nombre}
                    onChange={manejarCambiosInput}
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name='email'
                    value={contacto.email}
                    onChange={manejarCambiosInput}
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
                    name='mensaje'
                    value={contacto.mensaje}
                    onChange={manejarCambiosInput}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-naranja w-100" onClick={enviarCorreo}>Enviar</button>
              </form>
            </div>
          </div>

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
