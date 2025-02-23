import React from 'react'
import '../css/footer.css'
export const Footer = () => {
  return (
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6 mb-4">
                    <h5>Sobre Nosotros</h5>
                    <p>Somos una empresa dedicada a ofrecer las mejores soluciones para nuestros clientes con pasión y compromiso.</p>
                </div>

                <div class="col-md-2 col-sm-6 mb-4">
                    <h5>Enlaces</h5>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Tienda</a></li>
                        <li><a href="#">Contacto</a></li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>

                <div class="col-md-3 col-sm-6 mb-4">
                    <h5>Contacto</h5>
                    <ul>
                        <li>Email: info@ejemplo.com</li>
                        <li>Teléfono: +123 456 7890</li>
                        <li>Dirección: Calle Ejemplo 123</li>
                    </ul>
                </div>

                <div class="col-md-3 col-sm-6 mb-4">
                    <h5>Síguenos</h5>
                    <div class="footer-social">
                        <a href="#"><i class="bi bi-facebook"></i></a>
                        <a href="#"><i class="bi bi-twitter"></i></a>
                        <a href="#"><i class="bi bi-instagram"></i></a>
                        <a href="#"><i class="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom text-center">
                <p class="mb-0">&copy; 2025 MiMarca. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
  )
}
