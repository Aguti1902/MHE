import React, { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('hero')}>
          <span className="logo-text">MHE</span>
          <span className="logo-subtitle">Materials Handling Europe</span>
        </div>
        
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a onClick={() => scrollToSection('about')}>Quiénes Somos</a>
          <a onClick={() => scrollToSection('services')}>Servicios</a>
          <a onClick={() => scrollToSection('benefits')}>Beneficios</a>
          <a onClick={() => scrollToSection('cases')}>Casos de Éxito</a>
          <a onClick={() => scrollToSection('contact')} className="nav-cta">Contacto</a>
        </nav>
      </div>
    </header>
  )
}

export default Header

