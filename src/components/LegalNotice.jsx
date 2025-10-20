import React from 'react'
import './LegalPages.css'

function LegalNotice() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Aviso Legal</h1>
        <p className="last-updated">Última actualización: Octubre 2024</p>

        <section className="legal-section">
          <h2>1. Datos Identificativos</h2>
          <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:</p>
          <div className="company-data">
            <p><strong>Titular del sitio web:</strong> MATERIALS HANDLING EUROPE, S.L.</p>
            <p><strong>NIF/CIF:</strong> B65531022</p>
            <p><strong>Domicilio Social:</strong> C/ Riera, 24 – 08830 Sant Boi de Llobregat (Barcelona), España</p>
            <p><strong>Email:</strong> info@mhe-europe.com</p>
            <p><strong>Registro Mercantil:</strong> [Pendiente de datos]</p>
          </div>
        </section>

        <section className="legal-section">
          <h2>2. Objeto</h2>
          <p>El presente Aviso Legal regula el acceso y uso del sitio web <strong>www.mhe-europe.com</strong> (en adelante, "el Sitio Web"), titularidad de MATERIALS HANDLING EUROPE, S.L.</p>
          <p>El acceso al Sitio Web es gratuito salvo en lo relativo al coste de la conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado por los usuarios.</p>
        </section>

        <section className="legal-section">
          <h2>3. Condiciones de Uso</h2>
          <p>El simple acceso a este Sitio Web no implica entablar ningún tipo de relación comercial entre MATERIALS HANDLING EUROPE, S.L. y el usuario.</p>
          <p>El usuario se compromete a utilizar el Sitio Web de conformidad con la ley, el presente Aviso Legal, las buenas costumbres y el orden público. Asimismo, se compromete a no utilizar el Sitio Web con fines ilícitos o lesivos contra MATERIALS HANDLING EUROPE, S.L. o cualquier tercero.</p>
        </section>

        <section className="legal-section">
          <h2>4. Propiedad Intelectual e Industrial</h2>
          <p>Todos los contenidos del Sitio Web, incluyendo, sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad exclusiva de MATERIALS HANDLING EUROPE, S.L. o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual sobre los mismos.</p>
          <p>Quedan expresamente prohibidas la reproducción, distribución, comunicación pública, transformación o cualquier otra modalidad de explotación de los contenidos de este Sitio Web sin autorización previa y por escrito de MATERIALS HANDLING EUROPE, S.L.</p>
        </section>

        <section className="legal-section">
          <h2>5. Exclusión de Garantías y Responsabilidad</h2>
          <p>MATERIALS HANDLING EUROPE, S.L. no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo:</p>
          <ul>
            <li>Errores u omisiones en los contenidos.</li>
            <li>Falta de disponibilidad del Sitio Web o transmisión de virus o programas maliciosos.</li>
            <li>Uso indebido del Sitio Web por parte de un usuario.</li>
            <li>Contenidos de las páginas a las que se pueda acceder mediante enlaces desde el Sitio Web.</li>
          </ul>
          <p>MATERIALS HANDLING EUROPE, S.L. se reserva el derecho a efectuar sin previo aviso las modificaciones que considere oportunas en su Sitio Web, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados.</p>
        </section>

        <section className="legal-section">
          <h2>6. Enlaces (Links)</h2>
          <p>Los enlaces contenidos en el Sitio Web pueden dirigir a páginas web de terceros. MATERIALS HANDLING EUROPE, S.L. no asume ninguna responsabilidad por el contenido, informaciones o servicios que pudieran aparecer en dichos sitios, que tendrán exclusivamente carácter informativo y que en ningún caso implican relación alguna entre MATERIALS HANDLING EUROPE, S.L. y los titulares de dichos sitios.</p>
        </section>

        <section className="legal-section">
          <h2>7. Protección de Datos</h2>
          <p>Para información sobre el tratamiento de datos personales, consulte nuestra <a href="#privacy" onClick={scrollToTop}>Política de Privacidad</a>.</p>
        </section>

        <section className="legal-section">
          <h2>8. Legislación Aplicable y Jurisdicción</h2>
          <p>Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier controversia relativa a este Sitio Web, MATERIALS HANDLING EUROPE, S.L. y el usuario acuerdan someterse a los Juzgados y Tribunales de Barcelona capital, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.</p>
        </section>

        <section className="legal-section">
          <h2>9. Contacto</h2>
          <p>Para cualquier consulta relacionada con el presente Aviso Legal, puede contactar con nosotros a través de:</p>
          <ul>
            <li><strong>Email:</strong> info@mhe-europe.com</li>
            <li><strong>Dirección postal:</strong> C/ Riera, 24 – 08830 Sant Boi de Llobregat (Barcelona)</li>
          </ul>
        </section>

        <div className="legal-actions">
          <button className="button-primary" onClick={() => window.history.back()}>Volver</button>
          <button className="button-secondary" onClick={scrollToTop}>Ir arriba</button>
        </div>
      </div>
    </div>
  )
}

export default LegalNotice

