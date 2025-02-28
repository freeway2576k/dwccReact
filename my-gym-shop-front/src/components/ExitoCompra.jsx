import { Link } from 'react-router-dom'
import "./../css/ExitoCompra.css"


export const ExitoCompra = () => {

  return (
    <main className="d-flex flex-column min-vh-100 justify-content-center">
      <section className="heroSuccess text-center">
        <div className="container">
          <i className="bi bi-check-circle display-1 text-success mb-4"></i>
          <h1 className="display-4 fw-bold">¡Compra Exitosa!</h1>
          <h2 className="section-title">Tu equipo está en camino</h2>
          <p className="lead mb-4">
            Gracias por tu compra en The Gym Shop. Recibirás tu equipo de gimnasio pronto. ¡Empieza a entrenar como un profesional!
          </p>
          <Link to="/tienda" className="btn btn-naranja">Volver a la Tienda</Link>
        </div>
      </section>
    </main>
  )
}
