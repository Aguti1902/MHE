import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      {/* Hero con imagen de fondo */}
      <div className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content section-container">
          <h2 className="about-hero-title">Quiénes Somos</h2>
          <p className="about-hero-subtitle">
            Líderes en soluciones de manutención y manejo de materiales para la industria europea
          </p>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="about-main section-container">
        {/* Presentación con imagen */}
        <div className="about-presentation">
          <div className="about-text-block">
            <h3 className="about-section-title">Materials Handling Europe, S.L.</h3>
            <div className="about-highlight-box">
              <p className="about-highlight-text">
                En MHE nos especializamos en la <strong>manipulación de productos industriales 
                y en la optimización de procesos</strong>.
              </p>
            </div>
            <p className="about-description">
              Nuestro objetivo es mejorar la eficiencia y reducir tiempos para nuestros clientes, 
              ofreciendo soluciones innovadoras y seguras. Trabajamos con empresas líderes del 
              sector industrial europeo, proporcionando tecnología de vanguardia y soluciones 
              personalizadas que aumentan la productividad y rentabilidad en sus procesos de 
              manipulación de materiales.
            </p>
          </div>
          <div className="about-image-modern">
            <img src="/images/people-working-in-warehouse-2024-11-25-16-13-51-utc.jpg" alt="Equipo MHE" />
            <div className="image-badge">
              <span className="badge-icon">⭐</span>
              <span className="badge-text">98% Satisfacción</span>
            </div>
          </div>
        </div>

        {/* Misión y Visión */}
        <div className="about-mission-vision">
          <div className="mission-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4>Nuestra Misión</h4>
            <p>
              Proporcionar soluciones eficientes, innovadoras y personalizadas que permitan 
              a nuestros clientes optimizar sus procesos de almacenamiento, transporte y 
              manipulación de materiales, aumentando su productividad y rentabilidad.
            </p>
          </div>
          <div className="mission-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
                <path d="M11 8a3 3 0 0 1 0 6" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h4>Nuestra Visión</h4>
            <p>
              Ser el partner estratégico líder en Europa para soluciones de manutención, 
              reconocidos por nuestra innovación tecnológica, excelencia operativa y 
              compromiso con el éxito de nuestros clientes.
            </p>
          </div>
        </div>

        {/* Valores en grid moderno */}
        <div className="about-values-section">
          <h3 className="values-title">Nuestros Valores</h3>
          <div className="values-modern-grid">
            <div className="value-modern-card">
              <div className="value-number">01</div>
              <div className="value-icon-modern">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2"/>
                  <circle cx="12" cy="7" r="4" strokeWidth="2"/>
                </svg>
              </div>
              <h5>Compromiso</h5>
              <p>Con la calidad y satisfacción de nuestros clientes en cada proyecto</p>
            </div>
            <div className="value-modern-card">
              <div className="value-number">02</div>
              <div className="value-icon-modern">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" strokeWidth="2"/>
                </svg>
              </div>
              <h5>Innovación</h5>
              <p>Aplicando tecnología de vanguardia en cada solución que desarrollamos</p>
            </div>
            <div className="value-modern-card">
              <div className="value-number">03</div>
              <div className="value-icon-modern">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeWidth="2"/>
                </svg>
              </div>
              <h5>Experiencia</h5>
              <p>Amplia trayectoria en el sector industrial europeo</p>
            </div>
            <div className="value-modern-card">
              <div className="value-number">04</div>
              <div className="value-icon-modern">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeWidth="2"/>
                </svg>
              </div>
              <h5>Personalización</h5>
              <p>Cada solución diseñada específicamente para sus necesidades únicas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

