import React from 'react'
import './../css/inicio.css'
import { Link } from "react-router-dom";
export const Inicio = () => {
    return (
        <main className="d-flex flex-column">
     
        <section className="hero">
          <div className="container">
            <h1>Equipos de Gimnasio de Élite</h1>
            <p>Eleva tu gimnasio al siguiente nivel con nuestras máquinas de musculación de calidad profesional.</p>
            <Link to="/contacto" className="btn btn-naranja mt-4">Solicita una Cotización</Link>
          </div>
        </section>
  
        <section className="py-5">
          <div className="container">
            <h2 className="section-title text-center">¿Por qué elegirnos?</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="feature-card text-center">
                  <i className="bi bi-shield-check"></i>
                  <h3>Calidad Garantizada</h3>
                  <p>Máquinas diseñadas para soportar uso intensivo en gimnasios comerciales.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card text-center">
                  <i className="bi bi-truck"></i>
                  <h3>Entrega a Gimnasios</h3>
                  <p>Envíos rápidos y confiables directamente a tu instalación.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card text-center">
                  <i className="bi bi-person-gear"></i>
                  <h3>Soporte Técnico</h3>
                  <p>Asesoramiento y mantenimiento especializado para tu negocio.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <section className="py-5 bg-dark text-white text-center">
          <div className="container">
            <h2 className="mb-4">¿Listo para equipar tu gimnasio?</h2>
            <p className="lead">Accede a nuestro catalogo hoy y obtén una solución personalizada para tu negocio.</p>
            <Link to="/tienda" className="btn btn-naranja mt-3">Ir a la tienda</Link>
          </div>
        </section>
      </main>
    );
}
