import React from 'react'
import './Benefits.css'

function Benefits() {
  const benefits = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Reducción de Tiempos Operativos',
      description: 'Optimizamos sus procesos para reducir significativamente los tiempos de operación, permitiendo ciclos de trabajo más rápidos y eficientes en toda su cadena productiva.',
      stat: '-40% tiempo'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="17 6 23 6 23 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Mayor Eficiencia en la Cadena de Suministro',
      description: 'Implementamos soluciones que mejoran el flujo de materiales, reducen cuellos de botella y aumentan la productividad global de su cadena de suministro.',
      stat: '+45% eficiencia'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Seguridad en la Manipulación de Productos',
      description: 'Garantizamos la seguridad en todos los procesos de manipulación mediante equipos certificados, formación especializada y cumplimiento estricto de normativas.',
      stat: '100% seguro'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Soluciones Personalizadas Según Sus Necesidades',
      description: 'Cada empresa es única. Desarrollamos soluciones completamente adaptadas a sus requerimientos específicos, garantizando el máximo retorno de inversión.',
      stat: '100% a medida'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="17" x2="12.01" y2="17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Reducción de Costes Operativos',
      description: 'Nuestras soluciones optimizan recursos, reducen desperdicios y minimizan gastos operativos, resultando en ahorros significativos a medio y largo plazo.',
      stat: '-35% costes'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2v20M2 12h20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Experiencia Internacional Comprobada',
      description: 'Amplia trayectoria implementando proyectos exitosos en toda Europa, con un profundo conocimiento del sector industrial y sus desafíos.',
      stat: 'Europa'
    }
  ]

  return (
    <section id="benefits" className="benefits">
      <div className="section-container">
        <h2 className="section-title">Beneficios para su Empresa</h2>
        <p className="section-subtitle">
          Soluciones que mejoran la eficiencia, reducen tiempos y aumentan la productividad de sus operaciones
        </p>
        
        <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card" style={{animationDelay: `${index * 0.1}s`}}>
            <div className="benefit-header">
              <div className="benefit-icon">{benefit.icon}</div>
              <div className="benefit-stat">{benefit.stat}</div>
            </div>
            <h3 className="benefit-title">{benefit.title}</h3>
            <p className="benefit-description">{benefit.description}</p>
          </div>
        ))}
      </div>
      
      <div className="benefits-cta">
        <div className="cta-content">
          <h3>¿Listo para transformar la industria?</h3>
          <p>Contáctenos y descubra cómo podemos optimizar sus procesos</p>
          <button 
            className="button-primary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Solicitar servicio
          </button>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits

