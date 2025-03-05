import React from 'react'
import { Link } from 'react-router-dom'
import './../css/PanelGestion.css'
export const PanelGestion = () => {
  return (
    <main className="d-flex flex-column py-5">
    <section className="container">
      <div className="heroGestion mb-5">
        <h1>Panel de Gestión</h1>
        <p>Administra usuarios y artículos de tu gimnasio desde aquí.</p>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <Link to="/gestion-usuarios" className="card-link">
            <div className="card h-100 p-4 text-center">
              <i className="bi bi-people-fill display-4 text-naranja mb-3"></i>
              <h3 className="card-title">Gestión de Usuarios</h3>
              <p className="card-text">Administra los usuarios del sistema, incluyendo roles y permisos.</p>
            </div>
          </Link>
        </div>

        <div className="col-md-6">
          <Link to="/gestion-articulos" className="card-link">
            <div className="card h-100 p-4 text-center">
              <i className="bi bi-box-seam-fill display-4 text-naranja mb-3"></i>
              <h3 className="card-title">Gestión de Artículos</h3>
              <p className="card-text">Controla el inventario de máquinas y accesorios para gimnasios.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  </main>
  )
}
