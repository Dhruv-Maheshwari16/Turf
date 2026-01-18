import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import CapabilityGrid from './components/CapabilityGrid'
import Comparison from './components/Comparison'
import Venue from './components/Venue'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'

const PageContent = () => (
  <main>
    <ParticlesBackground />
    <Hero />
    <CapabilityGrid />
    <Venue />
    <Features />
    <TrustedBy />
    <FAQ />
    <CTA />
  </main>
);

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const location = useLocation()

  useEffect(() => {
    // Path-based auto-scrolling
    const path = location.pathname.replace('/', '')
    if (path) {
      const element = document.getElementById(path)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className={isDark ? 'dark' : ''}>
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="*" element={<PageContent />} />
      </Routes>
      <Footer />
    </div>
  )
}
