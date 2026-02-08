import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Features from './components/Features'
import Games from './components/Games'
import Comparison from './components/Comparison'
import Venue from './components/Venue'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import SiteBackground from './components/SiteBackground'
import DeleteAccount from './components/DeleteAccount'
import PrivacyPolicy from './components/PrivacyPolicy'

const PageContent = () => (
  <main>
    <Hero />
    <Games />
    <Venue />
    {/* <Features />
    <TrustedBy /> */}
    <FAQ />
    <CTA />
  </main>
);

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname.replace('/', '');

    // Reset to top for specific standalone pages
    if (path === 'delete-account' || path === 'privacy-policy') {
      window.scrollTo(0, 0);
      return;
    }

    // Handle section scrolling for the main page
    if (path) {
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback for unknown paths
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      // Home page
      window.scrollTo(0, 0);
    }
  }, [location]);

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
      <SiteBackground />
      <Header isDark={isDark} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<PageContent />} />
      </Routes>
      <Footer />
    </div>
  )
}
