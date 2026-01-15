import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

const Header = ({ isDark, toggleDarkMode }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    const diff = latest - previous;

    if (diff > 5 && latest > 150) {
      setIsVisible(false);
    } else if (diff < -5) {
      setIsVisible(true);
    }
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Venue', href: '#venue' },
    { label: 'Competitions', href: '#competitions' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={false}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isScrolled 
            ? (isDark ? "rgba(5, 5, 7, 0.8)" : "rgba(255, 255, 255, 0.8)") 
            : "rgba(0, 0, 0, 0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ 
          duration: 0.5,
          ease: [0.33, 1, 0.68, 1],
        }}
        className="fixed top-0 left-0 right-0 z-50 pointer-events-auto border-none"
      >
        <div className={`max-w-full mx-auto px-10 flex items-center justify-between transition-all duration-500 ${isScrolled ? 'py-4' : 'py-8'}`}>
          
          <div className="flex-1 flex justify-start">
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
            >
              <div className="relative w-9 h-9 flex items-center justify-center">
                 <div className="absolute inset-0 bg-indigo-500/20 blur-xl rounded-full group-hover:bg-indigo-500/40 transition-all" />
                 <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 text-indigo-500 dark:text-white relative z-10" stroke="currentColor" strokeWidth="3.5">
                   <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                 </svg>
              </div>
              <span className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">Hyper</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center gap-12">
            {navLinks.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-[14px] uppercase tracking-widest font-semibold text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* RIGHT: Actions */}
          <div className="hidden lg:flex items-center justify-end gap-8 flex-1">
            {/* THEME TOGGLE BUTTON (COMMENTED OUT)
            <button 
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-white/5 text-gray-400 dark:hover:text-white transition-colors"
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button> 
            */}

            {/* LOG IN BUTTON (COMMENTED OUT)
            <a href="#login" className="text-[15px] font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Log in
            </a> 
            */}
            
            <a 
              href="#cta" 
              className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[14px] font-bold shadow-2xl shadow-indigo-500/10 hover:scale-105 active:scale-95 transition-all"
            >
               Get App
            </a>
          </div>

          {/* Mobile UI */}
          <div className="lg:hidden flex items-center gap-5">
            {/* MOBILE THEME TOGGLE (COMMENTED OUT)
            <button onClick={toggleDarkMode} className="text-gray-400">
                {isDark ? <Sun size={22} /> : <Moon size={22} />}
            </button>
            */}
             <button onClick={() => setMobileMenuOpen(true)} className="text-gray-900 dark:text-white">
              <Menu size={30} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white dark:bg-[#050507] flex flex-col pt-32 px-12 md:hidden"
          >
             <button onClick={() => setMobileMenuOpen(false)} className="absolute top-10 right-10 text-gray-900 dark:text-white">
              <X size={36} />
            </button>
            <div className="flex flex-col gap-10">
              {navLinks.map((item) => (
                <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} className="text-5xl font-black tracking-tighter text-gray-900 dark:text-white">{item.label}</a>
              ))}
              <div className="h-px bg-gray-200 dark:bg-white/5 my-2" />
              
              {/* MOBILE LOG IN BUTTON (COMMENTED OUT)
              <a href="#login" className="text-2xl font-bold text-gray-500">Log in</a> 
              */}
              
              <a href="#cta" onClick={() => setMobileMenuOpen(false)} className="w-full py-6 bg-indigo-600 text-white text-center font-bold rounded-3xl text-2xl">Get App</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;