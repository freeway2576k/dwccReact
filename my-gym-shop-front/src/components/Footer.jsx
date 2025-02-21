import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">© 2024 The Gym Shop. Todos los derechos reservados.</p>
        <div>
          <a href="#" className="text-white me-3 text-decoration-none">Política de Privacidad</a>
          <a href="#" className="text-white text-decoration-none">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  )
}
