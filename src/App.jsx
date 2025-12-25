import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import CapabilityGrid from './components/CapabilityGrid'
import Comparison from './components/Comparison'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const [isDark, setIsDark] = useState(false)

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
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <CapabilityGrid />
        <Comparison />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
