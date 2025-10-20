import React from 'react'
import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('services')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-background-image"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title fade-in">
            <span className="highlight">MPM</span>
          </h1>
          <p className="hero-description fade-in">
            Manipulación de Productos Industriales y Mejora de Procesos
          </p>
          <p className="hero-subdescription fade-in">
            Optimizamos sus procesos industriales con soluciones innovadoras y personalizadas. 
            Experiencia comprobada en el sector europeo.
          </p>
          <div className="hero-buttons fade-in">
            <button className="button-primary" onClick={scrollToContact}>
              Solicitar Consultoría
            </button>
            <button className="button-secondary" onClick={scrollToServices}>
              Ver Servicios
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-card card-1">
            <div className="icon-box">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="9 22 9 12 15 12 15 22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>+5</h3>
            <p>Proyectos Completados</p>
          </div>
          <div className="visual-card card-2">
            <div className="icon-box">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>+10</h3>
            <p>Años de Experiencia</p>
          </div>
          <div className="visual-card card-3">
            <div className="icon-box">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>98%</h3>
            <p>Satisfacción Cliente</p>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="grid-pattern"></div>
      </div>
    </section>
  )
}

export default Hero

