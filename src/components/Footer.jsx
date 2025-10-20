import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-text">MHE</span>
            <span className="logo-subtitle">Materials Handling Europe</span>
          </div>
          <p className="footer-description">
            Soluciones integrales de manutención y manejo de materiales 
            para la industria europea. Más de 20 años de experiencia.
          </p>
          <div className="footer-certifications">
            <span className="cert-badge">ISO 9001</span>
            <span className="cert-badge">CE</span>
            <span className="cert-badge">EN 15635</span>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Servicios</h4>
          <ul>
            <li>Sistemas de Almacenaje</li>
            <li>Automatización Industrial</li>
            <li>Consultoría Logística</li>
            <li>Mantenimiento y Soporte</li>
            <li>Equipos de Manutención</li>
            <li>Auditoría y Seguridad</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Empresa</h4>
          <ul>
            <li><a onClick={() => scrollToSection('about')}>Quiénes Somos</a></li>
            <li><a onClick={() => scrollToSection('benefits')}>Por Qué Elegirnos</a></li>
            <li><a onClick={() => scrollToSection('cases')}>Casos de Éxito</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contacto</h4>
          <ul className="contact-list">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="10" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>C/ Riera, 24<br/>08830 Sant Boi de Llobregat</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>info@mhe-europe.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Materials Handling Europe, S.L. Todos los derechos reservados.</p>
          <div className="footer-links">
            <a href="#privacy">Política de Privacidad</a>
            <span className="separator">|</span>
            <a href="#legal">Aviso Legal</a>
            <span className="separator">|</span>
            <a href="#cookies">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

