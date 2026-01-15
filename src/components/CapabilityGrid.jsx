import React, { useState, useMemo, memo, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import { Search } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

const SportCard = memo(({ sport, index, isMobile, getFanStyles, isActive, isHovered, showBlueBorder, onClick, onHover }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const { x, y, rotate, zIndex } = !isMobile ? getFanStyles(index) : { x: 0, y: 0, rotate: 0, zIndex: 1 };

  return (
    <motion.div
      initial={false}
      animate={isMobile ? {
        scale: isActive ? 1.05 : 1,
        x: 0, y: 0, rotate: 0,
        zIndex: isActive ? 10 : 1
      } : {
        x,
        y: isHovered ? y - 60 : y,
        rotate: isHovered ? 0 : rotate,
        scale: isHovered ? 1.1 : isActive ? 1.05 : 1,
        zIndex: isHovered ? 50 : zIndex
      }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
      onMouseEnter={() => !isMobile && onHover(index)}
      onMouseLeave={() => !isMobile && onHover(null)}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      style={{ zIndex }}
      className={`${isMobile ? "snap-center shrink-0 w-[280px]" : "absolute w-[280px]"} cursor-pointer group transform-gpu`}
    >
      <div className={`relative h-[400px] rounded-[2.5rem] overflow-hidden border transition-all duration-500 ${
        showBlueBorder ? "border-blue-400 shadow-[0_0_50px_rgba(96,165,250,0.3)]" : "border-white/10"
      } bg-white/[0.03] backdrop-blur-sm`}>
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: useMotionTemplate`radial-gradient(450px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.2), transparent 80%)` }}
        />
        <img src={sport.image} className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${showBlueBorder ? 'opacity-95 scale-110' : 'opacity-50 scale-100 group-hover:opacity-80'}`} alt={sport.name} loading="lazy" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/20 to-transparent opacity-90" />

        <div className="absolute bottom-10 w-full text-center z-10 px-6">
          <h3 className={`text-2xl font-bold transition-all duration-500 ${showBlueBorder ? 'text-blue-400 scale-110' : 'text-white'}`}>{sport.name}</h3>
          <p className="text-[10px] tracking-[0.3em] text-blue-400/80 font-black uppercase mt-1">{sport.sub}</p>
        </div>
      </div>
    </motion.div>
  );
});

const CapabilityGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null); // No card selected by default
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkLayout = () => setIsMobile(window.innerWidth < 1440);
    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, []);

  const { scrollYProgress } = useScroll({ 
    target: containerRef, 
    offset: ["start end", "end start"] 
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 20 });

  const yTranslate = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [150, 0, 0, -200]);
  const mainOpacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const mainScale = useTransform(smoothProgress, [0, 0.2], [0.94, 1]);

  const sports = useMemo(() => [
    { id: 1, name: "Badminton", sub: "Indoor Courts", image: "https://images.unsplash.com/photo-1708312604073-90639de903fc?q=80&w=600" },
    { id: 2, name: "Box Cricket", sub: "Turf Arenas", image: "https://i.postimg.cc/TwKWRSvd/pexels-divyam-chaudhary-3755406-19714741.jpg" },
    { id: 3, name: "Padel Tennis", sub: "Padel Courts", image: "https://images.unsplash.com/photo-1737229373505-db4d9b27220c?q=80&w=600" },
    { id: 4, name: "Football", sub: "Pro Turfs", image: "https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?q=80&w=600" },
    { id: 5, name: "Pickleball", sub: "Pickleball Courts", image: "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?q=80&w=600" },
    { id: 6, name: "Esports", sub: "Gaming Arenas", image: "https://images.unsplash.com/photo-1554213352-5ffe6534af08?q=80&w=600" },
  ], []);

  const getFanStyles = (index) => {
    const center = (sports.length - 1) / 2;
    const offset = index - center;
    const yCurve = Math.pow(offset, 2) * 15;
    const zIndex = 10 - Math.abs(Math.round(offset));
    return { x: offset * 220, y: yCurve, rotate: offset * 8, zIndex: zIndex };
  };

  return (
    <section ref={containerRef} className="relative py-32 min-h-[1000px] overflow-hidden bg-[#050507]">
      <ParticlesBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/[0.03] blur-[150px] pointer-events-none" />

      <motion.div 
        style={{ y: yTranslate, opacity: mainOpacity, scale: mainScale }} 
        className="relative z-10 mx-auto max-w-[1600px] px-4 w-full text-center transform-gpu"
      >
        {/* Typography Section - EXACTLY matching your good file */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-blue-500 font-bold mb-4 opacity-80">
            Sports Ecosystem
          </p>
          <motion.h2
            className="text-4xl md:text-7xl font-black tracking-tighter leading-tight bg-[length:200%_auto]"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">One Platform.</span>{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">Every Sport.</span>
          </motion.h2>
          <p className="text-neutral-400 tracking-wider text-lg md:text-xl max-w-2xl mx-auto font-light mt-6 opacity-60">
            Professional-grade facilities and venues designed for peak performance.
          </p>
        </motion.div>

        {/* Cards Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className={`relative ${isMobile ? "flex overflow-x-auto snap-x snap-mandatory gap-6 pb-20 px-10 no-scrollbar" : "flex items-center justify-center h-[550px] mb-14"}`}
        >
          {sports.map((sport, index) => (
            <SportCard
              key={sport.id}
              sport={sport}
              index={index}
              isMobile={isMobile}
              getFanStyles={getFanStyles}
              isActive={activeIndex === index}
              isHovered={hoveredIndex === index}
              showBlueBorder={hoveredIndex !== null ? (hoveredIndex === index) : (activeIndex !== null && activeIndex === index)}
              onClick={() => setActiveIndex(index)}
              onHover={setHoveredIndex}
            />
          ))}
        </motion.div>

        {/* Button Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-14 flex justify-center hover:scale-105 transition-transform duration-300"
        >
          <motion.button
            initial="initial"
            whileHover="hovered"
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden px-12 py-6 rounded-2xl font-black tracking-[0.2em] text-[11px] text-white bg-blue-600 shadow-xl flex items-center gap-4 group transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
          >
            <motion.div
              variants={{
                initial: { x: "-100%", opacity: 0 },
                hovered: {
                  x: "250%",
                  opacity: [0, 1, 1, 0],
                  transition: { repeat: Infinity, duration: 1.2, ease: "linear", repeatDelay: 0.1 }
                }
              }}
              className="absolute inset-0 w-[60%] h-full pointer-events-none"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)",
                skewX: "-25deg",
              }}
            />

            <span className="relative z-10 flex items-center gap-4">
              <Search
                size={18}
                strokeWidth={3}
                className="group-hover:rotate-90 transition-transform duration-500 ease-out"
              />
              EXPLORE ALL SPORTS
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
      <style jsx global>{`.no-scrollbar::-webkit-scrollbar { display: none; }`}</style>
    </section>
  );
};

export default CapabilityGrid;