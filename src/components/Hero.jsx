import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground'; // Ensure the path is correct

const Hero = () => {
  const { scrollY } = useScroll();

  // Scroll animations for the text content
  const yText = useTransform(scrollY, [200, 500], [0, 120]);
  const opacityText = useTransform(scrollY, [200, 500], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050507]">
      
      {/* 1. Background Logic */}
      <ParticlesBackground />

      {/* 2. Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full flex flex-col items-center text-center pointer-events-none">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="flex flex-col items-center"
        >
          {/* Status Badge */}
          <div className="mb-8 relative group cursor-default pointer-events-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-[0.2rem] text-white uppercase">GAME ON</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="relative text-[15vw] md:text-[180px] font-black tracking-tighter leading-[0.8] select-none text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-500 drop-shadow-2xl">
            HYPER
          </h1>

          {/* Subtitle */}
          <p className="mt-8 text-xl md:text-3xl text-gray-300 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
            The high-performance infrastructure for <br className="hidden md:block" />
            <span className="text-blue-400 font-semibold">next-gen</span> sports & esports.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;