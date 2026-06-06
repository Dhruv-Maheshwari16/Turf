import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import HyperIcon from '../icons/HyperIcon';

const getMobileStoreUrl = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'https://apps.apple.com/us/app/hyper-book-sports-more/id6759787068';
  }
  if (/android/i.test(userAgent)) {
    return 'https://play.google.com/store/apps/details?id=com.hitendras940.hyper';
  }
  return null;
};

const Header = ({ isDark, toggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const handleGetAppClick = (e) => {
    const storeUrl = getMobileStoreUrl();
    if (storeUrl) {
      e.preventDefault();
      window.location.href = storeUrl;
    }
  };

  const navLinks = [
    { label: 'Games', href: '/games' },
    { label: 'Venues', href: '/venue' },
    // { label: 'Features', href: '/features' },
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
            ? (isDark ? "rgba(5, 5, 7, 0.6)" : "rgba(255, 255, 255, 0.6)")
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

              <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-1 uppercase">Hyper</span>
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

          <div className="flex items-center justify-end gap-3 md:gap-8 flex-1">
            <motion.div
              initial="initial"
              whileHover="hovered"
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link
                to="/App"
                onClick={handleGetAppClick}
                className="relative overflow-hidden block px-5 py-2 md:px-8 md:py-3 rounded-xl bg-indigo-600 text-white text-[12px] md:text-[14px] font-bold shadow-lg shadow-indigo-500/20 transition-all duration-300 group hover:scale-105"
              >
                <motion.div
                  variants={{
                    initial: { x: "-100%", opacity: 0 },
                    hovered: {
                      x: "250%",
                      opacity: [0, 0.4, 0.4, 0],
                      scale: 1.05,
                      transition: { repeat: Infinity, duration: 1.2, ease: "linear", repeatDelay: 0.1 }
                    }
                  }}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0), transparent)",
                    skewX: "-20deg",
                  }}
                />
                <span className="relative z-10 uppercase tracking-wide">Get App</span>
              </Link>
            </motion.div>

            <div className="lg:hidden flex items-center">
              <button onClick={() => setMobileMenuOpen(true)} className="text-gray-900 dark:text-white">
                <Menu size={30} />
              </button>
            </div>
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
            className="fixed inset-0 z-[100] bg-white dark:bg-[#000000] flex flex-col pt-32 px-12 md:hidden"
          >
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-10 right-10 text-gray-900 dark:text-white">
              <X size={36} />
            </button>
            <div className="flex flex-col gap-10">
              {navLinks.map((item) => (
                <Link key={item.label} to={item.href} onClick={() => setMobileMenuOpen(false)} className="text-5xl font-black tracking-tighter text-gray-900 dark:text-white">{item.label}</Link>
              ))}
              <div className="h-px bg-gray-200 dark:bg-white/5 my-2" />
              <motion.div
                initial="initial"
                whileHover="hovered"
                whileTap={{ scale: 0.98 }}
                className="relative w-full"
              >
                <Link
                  to="/App"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleGetAppClick(e);
                  }}
                  className="relative overflow-hidden block w-full py-6 bg-indigo-600 text-white text-center font-bold rounded-3xl text-2xl transition-all duration-300"
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    variants={{
                      initial: { x: "-100%", opacity: 0 },
                      hovered: {
                        x: "250%",
                        opacity: [0, 0.4, 0.4, 0],
                        scale: 1.02,
                        transition: { repeat: Infinity, duration: 1.2, ease: "linear", repeatDelay: 0.1 }
                      }
                    }}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0), transparent)",
                      skewX: "-20deg",
                    }}
                  />
                  <span className="relative z-10">Get App</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;