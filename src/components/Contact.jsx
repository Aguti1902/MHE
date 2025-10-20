import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    asunto: '',
    mensaje: ''
  })
  
  const [formStatus, setFormStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Aquí se integraría con un backend o servicio de email
    // Por ahora, simulamos el envío
    setFormStatus('sending')
    
    setTimeout(() => {
      setFormStatus('success')
      setFormData({
        nombre: '',
        empresa: '',
        email: '',
        asunto: '',
        mensaje: ''
      })
      
      setTimeout(() => {
        setFormStatus('')
      }, 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contacte con Nosotros</h2>
          <p className="contact-intro">
            ¿Listo para optimizar sus operaciones logísticas? Nuestro equipo de expertos 
            está preparado para analizar sus necesidades y proponerle la mejor solución.
          </p>
          
          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="10" r="3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4>Dirección</h4>
                <p>C/ Riera, 24<br/>08830 Sant Boi de Llobregat<br/>Barcelona, España</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="22,6 12,13 2,6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4>Email</h4>
                <p>info@mhe-europe.com</p>
                <p className="small-text">Respuesta en 24h</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4>Horario</h4>
                <p>Lunes a Viernes<br/>8:00 - 18:00</p>
                <p className="small-text">Emergencias: 24/7</p>
              </div>
            </div>
          </div>
          
          <div className="certifications">
            <p><strong>Certificaciones:</strong></p>
            <div className="cert-badges">
              <span className="badge">ISO 9001</span>
              <span className="badge">CE</span>
              <span className="badge">EN 15635</span>
            </div>
          </div>
        </div>
        
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Solicite Información</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre *</label>
                <input 
                  type="text" 
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Su nombre"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="empresa">Empresa *</label>
                <input 
                  type="text" 
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  placeholder="Nombre de su empresa"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input 
                type="email" 
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="su@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="asunto">Asunto *</label>
              <select 
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
              >
                <option value="">Seleccione un asunto</option>
                <option value="consulta-general">Consulta General</option>
                <option value="solicitud-presupuesto">Solicitud de Presupuesto</option>
                <option value="soporte-tecnico">Soporte Técnico</option>
                <option value="nuevos-proyectos">Nuevos Proyectos</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea 
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Cuéntenos sobre su proyecto o consulta..."
              ></textarea>
            </div>
            
            {formStatus === 'success' && (
              <div className="form-message success">
                ✓ ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
              </div>
            )}
            
            {formStatus === 'sending' && (
              <div className="form-message sending">
                Enviando mensaje...
              </div>
            )}
            
            <button 
              type="submit" 
              className="button-primary submit-button"
              disabled={formStatus === 'sending'}
            >
              {formStatus === 'sending' ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
            
            <p className="form-privacy">
              Al enviar este formulario, acepta nuestra política de privacidad y 
              el tratamiento de sus datos personales.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

