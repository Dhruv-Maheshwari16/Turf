import React from 'react';
import { Link } from 'react-router-dom';
import HyperIcon from './HyperIcon';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Particles in the background */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">

          {/* Brand and Description */}
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-1 mb-8 group cursor-pointer">
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
                  className="absolute inset-0 bg-indigo-500 blur-xl rounded-full group-hover:bg-indigo-500/30 transition-all"
                />

                <HyperIcon size={40} className="text-white relative z-10" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter mb-1">Hyper</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed font-light tracking-wider">
              Made for players, built for sports.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex gap-12 sm:gap-24 flex-wrap">
            {/* Explore Column */}
            <div>
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Explore</h4>
              <ul className="space-y-4">
                <li><Link to="/games" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">Games</Link></li>
                <li><Link to="/venue" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">Venues</Link></li>
                <li><Link to="/features" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">Features</Link></li>
                <li><Link to="/community" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">Community</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:gethyperindia@gmail.com" className="text-gray-500 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                    gethyperindia@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+917678457527" className="text-gray-500 text-sm hover:text-blue-400 transition-colors cursor-pointer">
                    +91 76784 57527
                  </a>
                </li>
                {/* <li><Link to="/contact" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">Support Center</Link></li> */}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Legal</h4>
              <ul className="space-y-4">
                <li><Link to="/" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">Privacy Policy</Link></li>
                <li><Link to="/" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5">
          <p className="text-gray-600 text-xs font-medium tracking-wide">
            © {currentYear} Hyper Technologies Inc. All rights reserved.
          </p>

          <div className="flex gap-4">
            {/* Social Placeholders with Glass effect */}
            <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 hover:border-blue-400 transition-all duration-500 cursor-pointer group">
              <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform"></div>
            </div>
            <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 hover:border-blue-400 transition-all duration-500 cursor-pointer group">
              <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform"></div>
            </div>
            <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-blue-500 hover:border-blue-400 transition-all duration-500 cursor-pointer group">
              <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;