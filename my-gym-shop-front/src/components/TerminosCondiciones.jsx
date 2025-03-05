import React from 'react'
import './../css/TerminosCondiciones.css'
export const TerminosCondiciones = () => {
  return (
    <main className="d-flex flex-column py-5">
      <section className="container">
        <div className="heroCondiciones mb-5">
          <h1>Términos y Condiciones</h1>
          <p>Lee cuidadosamente nuestros términos antes de usar nuestros servicios.</p>
        </div>

        <div className="card p-4">
          <h2 className="section-title mb-4">Términos de Uso de The Gym Shop</h2>
          <div className="terms-content">
            <h3 className="terms-section-title">1. Aceptación de los Términos</h3>
            <p>
              Al utilizar los servicios y productos de The Gym Shop, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo, por favor no uses nuestros servicios.
            </p>

            <h3 className="terms-section-title">2. Uso de Productos</h3>
            <p>
              Nuestros productos están diseñados exclusivamente para uso en gimnasios comerciales. No se permite su uso en entornos residenciales sin autorización previa. The Gym Shop no se hace responsable de daños resultantes de un uso indebido.
            </p>

            <h3 className="terms-section-title">3. Compra y Pagos</h3>
            <p>
              Todas las compras realizadas a través de nuestra tienda en línea están sujetas a disponibilidad y confirmación de pago. Nos reservamos el derecho de cancelar cualquier pedido si detectamos irregularidades.
            </p>

            <h3 className="terms-section-title">4. Garantías y Devoluciones</h3>
            <p>
              Ofrecemos una garantía de 2 años contra defectos de fabricación. Para solicitudes de devolución, contacta nuestro soporte dentro de los 30 días posteriores a la compra, con pruebas de daño o mal funcionamiento.
            </p>

            <h3 className="terms-section-title">5. Privacidad</h3>
            <p>
              Nos comprometemos a proteger tu información personal conforme a nuestra Política de Privacidad. No compartiremos tus datos con terceros sin tu consentimiento, salvo que sea requerido por ley.
            </p>

            <h3 className="terms-section-title">6. Propiedad Intelectual</h3>
            <p>
              Todos los contenidos, marcas y diseños de The Gym Shop están protegidos por derechos de autor y no pueden ser utilizados sin permiso explícito.
            </p>

            <p className="mt-4">
              Al continuar utilizando nuestros servicios, aceptas estos términos. Para más información, contáctanos en <a href="mailto:info@The Gym Shop.com" className="text-muted">info@The Gym Shop.com</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
