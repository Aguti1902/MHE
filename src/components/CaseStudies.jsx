import React from 'react'
import './CaseStudies.css'

function CaseStudies() {
  const cases = [
    {
      sector: 'Automoción',
      company: 'Empresa Líder del Sector Industrial',
      challenge: 'Necesidad de optimizar la manipulación de componentes industriales pesados, reducir tiempos de ciclo y mejorar la seguridad operativa en planta.',
      solution: 'Implementación de sistemas automatizados de manipulación, optimización de flujos de trabajo y monitoreo remoto de procesos críticos.',
      results: [
        'Reducción del 35% en tiempos operativos',
        'Disminución del 25% en incidencias de seguridad',
        'Aumento del 40% en productividad general',
        'ROI alcanzado en 14 meses'
      ],
      location: 'Barcelona, España'
    },
    {
      sector: 'Logística Industrial',
      company: 'Centro de Distribución Europeo',
      challenge: 'Gestión ineficiente de mercancías industriales con alta rotación, cuellos de botella en la cadena de suministro y falta de trazabilidad.',
      solution: 'Instalación de soluciones tecnológicas para la cadena de suministro, inspección visual automatizada y documentación de procesos en tiempo real.',
      results: [
        'Mayor eficiencia en la cadena de suministro (+45%)',
        'Reducción del 30% en incidencias operativas',
        'Trazabilidad completa de mercancías',
        'Mejora del 99% en precisión de inventario'
      ],
      location: 'Rotterdam, Países Bajos'
    },
    {
      sector: 'Manufactura',
      company: 'Fabricante Industrial',
      challenge: 'Procesos manuales lentos, alta tasa de errores en control de calidad y dificultades en la documentación de procesos productivos.',
      solution: 'Implementación de inspección visual automatizada, mejora de procesos mediante metodologías Lean y documentación visual completa.',
      results: [
        'Reducción del 50% en errores de calidad',
        'Disminución del 20% en incidencias de producción',
        'Control de calidad automático al 100%',
        'Documentación trazable en tiempo real'
      ],
      location: 'Lyon, Francia'
    },
    {
      sector: 'Químico Industrial',
      company: 'Planta de Procesamiento',
      challenge: 'Manipulación de materiales peligrosos con requisitos estrictos de seguridad, necesidad de monitoreo continuo y cumplimiento normativo.',
      solution: 'Sistema de monitoreo remoto de procesos, sensores industriales IoT, protocolos de seguridad avanzados y alertas en tiempo real.',
      results: [
        'Cero incidencias de seguridad en 18 meses',
        'Monitoreo 24/7 de procesos críticos',
        'Cumplimiento 100% de normativas',
        'Reducción del 40% en paradas no planificadas'
      ],
      location: 'Milán, Italia'
    }
  ]

  return (
    <section id="cases" className="case-studies">
      <div className="section-container">
        <h2 className="section-title">Casos de Éxito</h2>
        <p className="section-subtitle">
          Hemos trabajado con empresas líderes del sector industrial, logrando mejoras significativas en sus procesos con reducciones en incidencias en más del 20%
        </p>
        
        <div className="cases-container">
        {cases.map((caseStudy, index) => (
          <div key={index} className="case-card" style={{animationDelay: `${index * 0.15}s`}}>
            <div className="case-header">
              <div className="case-sector">{caseStudy.sector}</div>
              <div className="case-location">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {caseStudy.location}
              </div>
            </div>
            
            <h3 className="case-company">{caseStudy.company}</h3>
            
            <div className="case-section">
              <h4>Desafío</h4>
              <p>{caseStudy.challenge}</p>
            </div>
            
            <div className="case-section">
              <h4>Solución</h4>
              <p>{caseStudy.solution}</p>
            </div>
            
            <div className="case-section">
              <h4>Resultados</h4>
              <ul className="case-results">
                {caseStudy.results.map((result, idx) => (
                  <li key={idx}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      
      <div className="cases-footer">
        <p>¿Quiere que su empresa sea nuestro próximo caso de éxito?</p>
        <button 
          className="button-primary"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Hablemos de su proyecto
        </button>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies

