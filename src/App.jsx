import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Benefits from './components/Benefits'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import LegalNotice from './components/LegalNotice'
import CookiesPolicy from './components/CookiesPolicy'
import CookieBanner from './components/CookieBanner'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  useEffect(() => {
    // Detectar la ruta en el hash de la URL
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash === 'privacy' || hash === 'legal' || hash === 'cookies') {
        setCurrentPage(hash)
      } else {
        setCurrentPage('home')
      }
    }

    handleHashChange()
    window.addEventListener('hashchange', handleHashChange)
    
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const renderPage = () => {
    switch (currentPage) {
      case 'privacy':
        return <PrivacyPolicy />
      case 'legal':
        return <LegalNotice />
      case 'cookies':
        return <CookiesPolicy />
      default:
        return (
          <main>
            <Hero />
            <About />
            <Services />
            <Benefits />
            <CaseStudies />
            <Contact />
          </main>
        )
    }
  }

  return (
    <div className="App">
      <Header />
      {renderPage()}
      <Footer />
      <CookieBanner />
    </div>
  )
}

export default App

