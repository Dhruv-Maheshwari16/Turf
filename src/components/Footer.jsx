import React from 'react';
import ParticlesBackground from './ParticlesBackground';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative bg-[#050507] border-t border-white/5 pt-24 pb-12 overflow-hidden">
      {/* Particles in the background */}
      <ParticlesBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          
          {/* Brand and Description */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-transform group-hover:scale-110 duration-500"></div>
                <span className="text-2xl font-black text-white tracking-tighter">Hyper</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
                The world's most advanced venue booking platform. Designed for speed, built for performance, and dedicated to the sports community.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex gap-12 sm:gap-24 flex-wrap">
            {/* Explore Column */}
            <div>
                <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Explore</h4>
                <ul className="space-y-4">
                <li><a href="#venue" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">Venues</a></li>
                <li><a href="#features" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">Sports</a></li>
                <li><a href="#competitions" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">Tournaments</a></li>
                </ul>
            </div>

            {/* Company Column */}
            <div>
                <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Company</h4>
                <ul className="space-y-4">
                <li><a href="#about" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">About Us</a></li>
                <li><a href="#careers" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">Careers</a></li>
                <li><a href="#contact" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">Contact</a></li>
                </ul>
            </div>

            {/* Legal Column */}
            <div>
                <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-widest">Legal</h4>
                <ul className="space-y-4">
                <li><a href="#privacy" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">Privacy Policy</a></li>
                <li><a href="#terms" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">Terms of Service</a></li>
                <li><a href="#cookies" className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300">Cookies</a></li>
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