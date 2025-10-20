import React from 'react'
import './Services.css'

function Services() {
  const services = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Manipulación de Mercancías Industriales',
      description: 'Soluciones completas para el manejo eficiente de productos industriales, desde materias primas hasta productos terminados, garantizando seguridad y optimización en cada etapa del proceso.',
      features: ['Sistemas de transporte', 'Manipulación automatizada', 'Equipos especializados', 'Gestión de cargas pesadas'],
      image: '/images/modern-warehouse-shelves-with-pile-of-cardboard-bo-2025-02-25-00-49-19-utc.jpg'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Optimización de Procesos',
      description: 'Análisis exhaustivo y rediseño de flujos de trabajo para maximizar la eficiencia operativa, reducir tiempos de ciclo y eliminar desperdicios en sus procesos industriales.',
      features: ['Análisis de flujos', 'Reducción de tiempos', 'Mejora continua', 'Lean Manufacturing'],
      image: '/images/boxes-with-goods-lying-in-modern-warehouse-2024-11-07-13-16-48-utc.jpg'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="8.5" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="17 11 19 13 23 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Soluciones Tecnológicas para la Cadena de Suministro',
      description: 'Implementación de tecnología avanzada para digitalizar y automatizar la cadena de suministro, mejorando la visibilidad, trazabilidad y control en tiempo real.',
      features: ['WMS/TMS', 'IoT Industrial', 'Trazabilidad RFID', 'Integración de sistemas'],
      image: '/images/young-male-worker-of-warehouse-carrying-boxes-2025-03-15-05-44-51-utc.JPG'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Inspección Visual Automatizada',
      description: 'Las imágenes industriales permiten inspeccionar productos en tiempo real, asegurando calidad y reduciendo errores de fabricación mediante visión artificial.',
      features: ['Control de calidad', 'Visión artificial', 'Detección de defectos', 'Trazabilidad visual'],
      image: '/images/warehouse-full-of-cartons-of-aluminum-cutouts-2025-01-09-02-58-10-utc.jpg'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="7" y1="2" x2="7" y2="22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="17" y1="2" x2="17" y2="22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="2" y1="7" x2="7" y2="7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="2" y1="17" x2="7" y2="17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="17" y1="17" x2="22" y2="17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="17" y1="7" x2="22" y2="7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Monitoreo Remoto de Procesos',
      description: 'El monitoreo remoto por imágenes asegura supervisión continua y la gestión eficiente de procesos industriales desde cualquier ubicación.',
      features: ['Supervisión 24/7', 'Alertas en tiempo real', 'Análisis predictivo', 'Dashboards interactivos'],
      image: '/images/woman-worker-carpenter-checking-the-quality-of-woo-2025-04-13-02-35-36-utc.jpg'
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="14 2 14 8 20 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="16" y1="13" x2="8" y2="13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="16" y1="17" x2="8" y2="17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="10 9 9 9 8 9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: 'Documentación y Control de Calidad',
      description: 'La documentación visual facilita el control de calidad y la trazabilidad en la producción, mejorando seguridad y productividad.',
      features: ['Trazabilidad completa', 'Auditorías documentadas', 'Cumplimiento normativo', 'Certificaciones de calidad'],
      image: '/images/all-this-needs-to-go-today-shot-of-the-inside-of-2025-04-06-07-43-53-utc.jpg'
    }
  ]

  return (
    <section id="services" className="services">
      <div className="section-container">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-subtitle">
          Especialistas en manipulación de productos industriales y optimización de procesos para mejorar su eficiencia
        </p>
        
        <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card" style={{animationDelay: `${index * 0.1}s`}}>
            {service.image && (
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-icon-overlay">{service.icon}</div>
              </div>
            )}
            <div className="service-content">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default Services

