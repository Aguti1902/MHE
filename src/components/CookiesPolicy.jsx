import React from 'react'
import './LegalPages.css'

function CookiesPolicy() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>Política de Cookies</h1>
        <p className="last-updated">Última actualización: Octubre 2024</p>

        <section className="legal-section">
          <h2>1. Datos del Responsable</h2>
          <div className="company-data">
            <p><strong>Razón Social:</strong> MATERIALS HANDLING EUROPE, S.L.</p>
            <p><strong>CIF:</strong> B65531022</p>
            <p><strong>Domicilio:</strong> C/ Riera, 24 – 08830 Sant Boi de Llobregat (Barcelona), España</p>
            <p><strong>Email:</strong> info@mhe-europe.com</p>
          </div>
        </section>

        <section className="legal-section">
          <h2>2. ¿Qué son las Cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (ordenador, tablet, smartphone) cuando visita un sitio web. Las cookies permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo, para que no tenga que volver a configurarlas cada vez que visite el sitio o navegue de una página a otra.</p>
        </section>

        <section className="legal-section">
          <h2>3. ¿Qué Cookies Utiliza Este Sitio Web?</h2>
          <p>Este sitio web utiliza las siguientes categorías de cookies:</p>
          
          <h3>3.1. Cookies Técnicas (Necesarias)</h3>
          <p>Son aquellas que permiten al usuario la navegación a través del sitio web y la utilización de las diferentes opciones o servicios que en ella existen. Estas cookies son esenciales para el funcionamiento del sitio web.</p>
          <ul>
            <li><strong>Duración:</strong> Sesión</li>
            <li><strong>Finalidad:</strong> Navegación básica y funcionalidad del sitio</li>
            <li><strong>Gestor:</strong> MATERIALS HANDLING EUROPE, S.L. (propias)</li>
          </ul>

          <h3>3.2. Cookies de Preferencias</h3>
          <p>Permiten recordar información para que el usuario acceda al servicio con determinadas características (idioma, región, etc.).</p>
          <ul>
            <li><strong>Duración:</strong> 1 año</li>
            <li><strong>Finalidad:</strong> Recordar preferencias del usuario</li>
            <li><strong>Gestor:</strong> MATERIALS HANDLING EUROPE, S.L. (propias)</li>
          </ul>

          <h3>3.3. Cookies Analíticas</h3>
          <p>Permiten cuantificar el número de usuarios y realizar análisis estadísticos de cómo los usuarios utilizan el sitio web.</p>
          <ul>
            <li><strong>Proveedor:</strong> Google Analytics (si se implementa)</li>
            <li><strong>Duración:</strong> 2 años</li>
            <li><strong>Finalidad:</strong> Estadísticas de uso y audiencia</li>
            <li><strong>Más información:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidad de Google</a></li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Tabla de Cookies Utilizadas</h2>
          <div className="cookies-table">
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Duración</th>
                  <th>Finalidad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>session_id</td>
                  <td>Técnica</td>
                  <td>Sesión</td>
                  <td>Identificación de sesión</td>
                </tr>
                <tr>
                  <td>user_preferences</td>
                  <td>Preferencias</td>
                  <td>1 año</td>
                  <td>Guardar preferencias del usuario</td>
                </tr>
                <tr>
                  <td>_ga</td>
                  <td>Analítica</td>
                  <td>2 años</td>
                  <td>Distinguir usuarios (Google Analytics)</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Analítica</td>
                  <td>24 horas</td>
                  <td>Distinguir usuarios (Google Analytics)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="legal-section">
          <h2>5. Consentimiento</h2>
          <p>Al acceder a este sitio web por primera vez, se le mostrará una ventana informativa donde se le informa del uso de cookies y donde puede consultar esta Política de Cookies.</p>
          <p>Si usted consiente el uso de cookies, continúa navegando o hace clic en algún enlace, se entenderá que ha consentido nuestra política de cookies y, por tanto, la instalación de las mismas en su equipo o dispositivo.</p>
        </section>

        <section className="legal-section">
          <h2>6. ¿Cómo Gestionar o Deshabilitar las Cookies?</h2>
          <p>Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones de su navegador de internet:</p>
          <ul>
            <li><strong>Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Configuración de cookies en Chrome</a></li>
            <li><strong>Firefox:</strong> <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Configuración de cookies en Firefox</a></li>
            <li><strong>Safari:</strong> <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Configuración de cookies en Safari</a></li>
            <li><strong>Edge:</strong> <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Configuración de cookies en Edge</a></li>
          </ul>
          <p><strong>Importante:</strong> Si deshabilita las cookies, es posible que algunas funcionalidades del sitio web no estén disponibles.</p>
        </section>

        <section className="legal-section">
          <h2>7. Cookies de Terceros</h2>
          <p>Este sitio web puede utilizar servicios de terceros que recopilan información con fines estadísticos, de uso del sitio por parte del usuario y para la prestación de otros servicios relacionados con la actividad del sitio web y otros servicios de Internet.</p>
          <p>En particular, este sitio web utiliza o puede utilizar:</p>
          <ul>
            <li><strong>Google Analytics:</strong> Para estadísticas sobre el comportamiento de los visitantes. Puede desactivar Google Analytics desde <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">este enlace</a>.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>8. Actualización de la Política de Cookies</h2>
          <p>MATERIALS HANDLING EUROPE, S.L. puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.</p>
          <p>Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicará a los usuarios mediante aviso informativo en el sitio web.</p>
        </section>

        <section className="legal-section">
          <h2>9. Más Información</h2>
          <p>Para cualquier consulta sobre nuestra Política de Cookies, puede contactar con nosotros en:</p>
          <ul>
            <li><strong>Email:</strong> info@mhe-europe.com</li>
            <li><strong>Dirección:</strong> C/ Riera, 24 – 08830 Sant Boi de Llobregat (Barcelona)</li>
          </ul>
          <p>También puede consultar nuestra <a href="#privacy" onClick={scrollToTop}>Política de Privacidad</a> y nuestro <a href="#legal" onClick={scrollToTop}>Aviso Legal</a>.</p>
        </section>

        <div className="legal-actions">
          <button className="button-primary" onClick={() => window.history.back()}>Volver</button>
          <button className="button-secondary" onClick={scrollToTop}>Ir arriba</button>
        </div>
      </div>
    </div>
  )
}

export default CookiesPolicy

