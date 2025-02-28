import React from 'react'
import './../css/Faq.css'

export const Faq = () => {
  return (
    <main className="d-flex flex-column py-5">
      <section className="container">
        {/* Hero Section */}
        <div className="heroFaq mb-5">
          <h1>Preguntas Frecuentes</h1>
          <p>Encuentra respuestas rápidas sobre nuestros productos y servicios.</p>
        </div>

        {/* Lista de Preguntas Frecuentes */}
        <div className="card p-4">
          <h2 className="section-title mb-4">Tus Dudas Resueltas</h2>
          <div className="accordion" id="faqAccordion">
            {/* Pregunta 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  ¿Qué tipos de máquinas ofrecen para gimnasios?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Ofrecemos máquinas de musculación, equipo de cardio y accesorios de alta calidad diseñados para gimnasios comerciales, como pesas, cintas de correr y estaciones multifuncionales.
                </div>
              </div>
            </div>

            {/* Pregunta 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  ¿Cómo puedo realizar una compra?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Puedes navegar por nuestra tienda, seleccionar los artículos y añadirlos al carrito. Luego, procede al pago para completar tu compra o contáctanos para una cotización personalizada.
                </div>
              </div>
            </div>

            {/* Pregunta 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  ¿Ofrecen envío a mi ubicación?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Sí, realizamos envíos a gimnasios en todo el país. Contacta con nosotros para verificar los costos y tiempos de entrega según tu ubicación.
                </div>
              </div>
            </div>

            {/* Pregunta 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  ¿Qué garantía tienen sus productos?
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">
                  Nuestros productos tienen una garantía de 2 años contra defectos de fabricación. Ofrecemos también soporte técnico y mantenimiento posventa.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
