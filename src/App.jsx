import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import TrustedBy from './components/sections/TrustedBy'
import Features from './components/sections/Features'
import Games from './components/sections/Games'
import Venue from './components/sections/Venue'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'
import Footer from './components/layout/Footer'
import SiteBackground from './components/layout/SiteBackground'
import DeleteAccount from './pages/DeleteAccount'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import Hyper from './pages/Hyper'

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
    if (path === 'delete-account' || path === 'privacy-policy' || path === 'refund-policy' || path === 'hyper') {
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
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/hyper" element={<Hyper />} />
        <Route path="*" element={<PageContent />} />
      </Routes>
      <Footer />
    </div>
  )
}
