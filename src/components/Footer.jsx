import React from 'react';
import { Link } from 'react-router-dom';
import HyperIcon from './HyperIcon';
import { motion } from 'framer-motion';
import { RiInstagramFill, RiWhatsappFill, RiMailFill } from "@remixicon/react";
import GlassCard from "./GlassCard";

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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 sm:gap-24 w-full md:w-auto md:ml-auto">
            {/* Explore Column */}
            <div className="space-y-8 md:text-right">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Explore</h4>
              <ul className="space-y-4">
                <li><Link to="/games" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-300 block">Games</Link></li>
                <li><Link to="/venue" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-300 block">Venues</Link></li>
                <li><Link to="/features" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-300 block">Features</Link></li>
                <li><Link to="/community" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-300 block">Community</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="space-y-8 md:text-right">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a href="mailto:gethyperindia@gmail.com" className="text-gray-500 text-sm hover:text-indigo-400 transition-colors cursor-pointer block truncate max-w-[150px] sm:max-w-none ml-auto">
                    gethyperindia@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+917678457527" className="text-gray-500 text-sm hover:text-indigo-400 transition-colors cursor-pointer block">
                    +91 76784 57527
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-8 col-span-2 sm:col-span-1 md:text-right">
              <h4 className="text-white font-bold text-sm uppercase tracking-widest">Policies</h4>
              <ul className="space-y-4 flex flex-col sm:block">
                <li><Link to="/privacy-policy" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-300 block">Privacy Policy</Link></li>
                <li><Link to="/refund-policy" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-300 block">Refund Policy</Link></li>
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
            {/* Social Icons with Premium Glass effect */}
            {[
              { id: 'insta', icon: RiInstagramFill, href: "https://instagram.com/gethyperindia", label: "Instagram" },
              { id: 'gmail', icon: RiMailFill, href: "mailto:gethyperindia@gmail.com", label: "Gmail" },
              { id: 'wa', icon: RiWhatsappFill, href: "https://wa.me/917678457527", label: "WhatsApp" }
            ].map((social) => (
              <motion.a
                key={social.id}
                href={social.href}
                target={social.id !== 'gmail' ? "_blank" : undefined}
                rel={social.id !== 'gmail' ? "noopener noreferrer" : undefined}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="relative w-12 h-12 flex items-center justify-center cursor-pointer group"
              >
                {/* Background Glass Plate */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl transition-colors duration-500 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/40"
                  variants={{
                    initial: { scale: 1, rotate: 0 },
                    hover: { boxShadow: "0 0 25px rgba(99,102,241,0.2)" },
                    tap: { scale: 0.95 }
                  }}
                />

                {/* Reflection/Shimmer */}
                <motion.div
                  className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none"
                  variants={{
                    initial: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full translate-y-full"
                    animate={{ x: ["-100%", "100%"], y: ["100%", "-100%"] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  />
                </motion.div>

                {/* The Icon */}
                <social.icon
                  size={28}
                  className="relative z-10 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300 transform-gpu"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;