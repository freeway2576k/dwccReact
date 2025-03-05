import React from 'react'
import '../css/footer.css'
import { Link } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-6 mb-4">
                    <h5>Sobre Nosotros</h5>
                    <p>Construimos el futuro del fitness profesional con equipos de primera calidad para gimnasios.</p>
                </div>

                <div className="col-md-2 col-sm-6 mb-4">
                    <h5>Enlaces</h5>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Tienda</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                <div className="col-md-3 col-sm-6 mb-4">
                    <h5>Contacto</h5>
                    <ul>
                        <li>Email: info@ejemplo.com</li>
                        <li>Teléfono: +123 456 7890</li>
                        <li>Dirección: Calle Ejemplo 123</li>
                    </ul>
                </div>

                <div className="col-md-3 col-sm-6 mb-4">
                    <h5>Síguenos</h5>
                    <div className="footer-social">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom text-center">
                <p className="mb-0">&copy; 2025 The Gym Shop. Todos los derechos reservados.</p>
                <Link to={'/terminos-y-condiciones'}> terminos y condiciones</Link>
            </div>
        </div>
    </footer>
  )
}
