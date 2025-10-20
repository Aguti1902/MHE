import React from 'react'
import './LegalPages.css'

function PrivacyPolicy() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Política de Privacidad</h1>
        <p className="last-updated">Última actualización: Octubre 2024</p>

        <section className="legal-section">
          <h2>1. Responsable del Tratamiento</h2>
          <div className="company-data">
            <p><strong>Razón Social:</strong> MATERIALS HANDLING EUROPE, S.L.</p>
            <p><strong>CIF:</strong> B65531022</p>
            <p><strong>Domicilio Social:</strong> C/ Riera, 24 – 08830 Sant Boi de Llobregat (Barcelona), España</p>
            <p><strong>Email de contacto:</strong> info@mhe-europe.com</p>
          </div>
        </section>

        <section className="legal-section">
          <h2>2. Finalidad del Tratamiento</h2>
          <p>Los datos personales que nos facilite a través del formulario de contacto de esta web serán tratados con las siguientes finalidades:</p>
          <ul>
            <li>Gestionar y responder a sus consultas y solicitudes de información.</li>
            <li>Enviarle información comercial sobre nuestros productos y servicios, siempre que nos haya dado su consentimiento expreso.</li>
            <li>Mantener la relación comercial y/o contractual con usted.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Base Legal</h2>
          <p>El tratamiento de sus datos se basa en:</p>
          <ul>
            <li><strong>Consentimiento del interesado:</strong> Al rellenar y enviar el formulario de contacto.</li>
            <li><strong>Ejecución de un contrato:</strong> Para gestionar la prestación de nuestros servicios.</li>
            <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicarnos con usted.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Destinatarios de los Datos</h2>
          <p>Sus datos personales no serán cedidos a terceros, salvo obligación legal. Únicamente podrán tener acceso a sus datos:</p>
          <ul>
            <li>Personal autorizado de MATERIALS HANDLING EUROPE, S.L.</li>
            <li>Proveedores de servicios tecnológicos necesarios para la gestión de la web (hosting, email, etc.).</li>
            <li>Administraciones públicas cuando así lo requiera la legislación vigente.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>5. Conservación de los Datos</h2>
          <p>Los datos personales se conservarán mientras se mantenga la relación comercial o contractual, o hasta que usted solicite su supresión. Una vez finalizada la relación, los datos se conservarán bloqueados durante los plazos legalmente establecidos.</p>
        </section>

        <section className="legal-section">
          <h2>6. Derechos del Usuario</h2>
          <p>Como titular de los datos, usted tiene derecho a:</p>
          <ul>
            <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted.</li>
            <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
            <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
            <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos.</li>
            <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento.</li>
            <li><strong>Portabilidad:</strong> Recibir sus datos en un formato estructurado.</li>
            <li><strong>Revocación del consentimiento:</strong> Retirar el consentimiento en cualquier momento.</li>
          </ul>
          <p>Para ejercer estos derechos, puede dirigirse a nosotros mediante email a <strong>info@mhe-europe.com</strong> o por correo postal a la dirección indicada, adjuntando copia de su DNI o documento equivalente.</p>
        </section>

        <section className="legal-section">
          <h2>7. Reclamación ante la Autoridad de Control</h2>
          <p>Si considera que el tratamiento de sus datos personales no se ajusta a la normativa vigente, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD):</p>
          <p><strong>Web:</strong> www.aepd.es</p>
          <p><strong>Dirección:</strong> C/ Jorge Juan, 6 - 28001 Madrid</p>
        </section>

        <section className="legal-section">
          <h2>8. Medidas de Seguridad</h2>
          <p>MATERIALS HANDLING EUROPE, S.L. ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad e integridad de sus datos personales, así como para evitar su pérdida, alteración y/o acceso por parte de terceros no autorizados.</p>
        </section>

        <section className="legal-section">
          <h2>9. Cookies</h2>
          <p>Este sitio web utiliza cookies. Para más información, consulte nuestra <a href="#cookies" onClick={scrollToTop}>Política de Cookies</a>.</p>
        </section>

        <section className="legal-section">
          <h2>10. Modificaciones</h2>
          <p>MATERIALS HANDLING EUROPE, S.L. se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria. Las modificaciones serán publicadas en esta página web.</p>
        </section>

        <div className="legal-actions">
          <button className="button-primary" onClick={() => window.history.back()}>Volver</button>
          <button className="button-secondary" onClick={scrollToTop}>Ir arriba</button>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy

