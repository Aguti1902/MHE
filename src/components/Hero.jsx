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
            Soluciones Integrales en <span className="highlight">Manejo de Materiales</span>
          </h1>
          <p className="hero-description fade-in">
            Optimizamos sus procesos logísticos e industriales con tecnología avanzada 
            y más de 20 años de experiencia en el sector. Soluciones personalizadas 
            para cada necesidad de su empresa.
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
            <h3>+500</h3>
            <p>Proyectos Completados</p>
          </div>
          <div className="visual-card card-2">
            <div className="icon-box">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>20+</h3>
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

