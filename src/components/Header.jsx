import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import HyperIcon from './HyperIcon';

const Header = ({ isDark, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { label: 'Games', href: '/games' },
    { label: 'Venues', href: '/venue' },
    { label: 'Features', href: '/features' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          y: 0,
          opacity: 1,
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
            <Link
              to="/"
              className="flex items-center gap-1 cursor-pointer group"
            >
              <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Glow effect pulse */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-indigo-500 blur-2xl rounded-full group-hover:bg-indigo-500/40 transition-all"
                />

                <HyperIcon size={40} className="text-indigo-500 dark:text-white relative z-10" />
              </div>

              <span className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white mb-1">Hyper</span>
            </Link>
          </div>

          <div className="hidden lg:flex items-center justify-center gap-12">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-[14px] uppercase tracking-widest font-semibold text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center justify-end gap-8 flex-1">
            <Link
              to="/App"
              className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-[14px] font-bold shadow-2xl shadow-indigo-500/10 hover:scale-105 active:scale-95 transition-all"
            >
              Get App
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-5">
            <button onClick={() => setMobileMenuOpen(true)} className="text-gray-900 dark:text-white">
              <Menu size={30} />
            </button>
          </div>
        </div>
      </motion.nav>

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
                <Link key={item.label} to={item.href} onClick={() => setMobileMenuOpen(false)} className="text-5xl font-black tracking-tighter text-gray-900 dark:text-white">{item.label}</Link>
              ))}
              <div className="h-px bg-gray-200 dark:bg-white/5 my-2" />
              <Link to="/App" onClick={() => setMobileMenuOpen(false)} className="w-full py-6 bg-indigo-600 text-white text-center font-bold rounded-3xl text-2xl">Get App</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;