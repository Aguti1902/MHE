import React, { useState, useEffect } from 'react'
import './CookieBanner.css'

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('mhe-cookies-accepted')
    if (!cookiesAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('mhe-cookies-accepted', 'true')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('mhe-cookies-accepted', 'false')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="cookie-banner">
      <div className="cookie-banner-content">
        <div className="cookie-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" strokeWidth="2"/>
            <circle cx="8" cy="10" r="1.5" fill="currentColor"/>
            <circle cx="15" cy="9" r="1.5" fill="currentColor"/>
            <circle cx="10" cy="15" r="1.5" fill="currentColor"/>
            <circle cx="16" cy="14" r="1.5" fill="currentColor"/>
          </svg>
        </div>
        <div className="cookie-text">
          <h4>Uso de Cookies</h4>
          <p>
            Utilizamos cookies propias y de terceros para mejorar nuestros servicios y mostrarle publicidad relacionada con sus preferencias. 
            Si continúa navegando, consideramos que acepta su uso. Puede obtener más información en nuestra{' '}
            <a href="#/cookies-policy" onClick={() => setIsVisible(false)}>Política de Cookies</a>.
          </p>
        </div>
        <div className="cookie-buttons">
          <button className="cookie-btn cookie-btn-accept" onClick={handleAccept}>
            Aceptar
          </button>
          <button className="cookie-btn cookie-btn-reject" onClick={handleReject}>
            Rechazar
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner

