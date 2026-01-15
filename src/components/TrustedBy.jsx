import React, { memo, useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";
import ParticlesBackground from './ParticlesBackground';

// --- FEATURE-STYLE CARD (Centering Logic & Responsive Design) ---
const SpotlightCard = memo(({ children, className, isBackground = false }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group relative overflow-hidden transform-gpu bg-black/40 backdrop-blur-2xl border border-white/10 transition-all duration-500 
      ${isBackground ? 'opacity-40 hover:opacity-100' : 'opacity-100'} ${className}`}
    >
      {/* 1. Feature Spotlight Layer */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-inherit opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.25), 
              transparent 80%
            )
          `,
        }}
      />

      {/* 2. Top-Left Reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />

      {/* 3. CENTERED CONTENT WRAPPER */}
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center p-5 md:p-8">
        {children}
      </div>

      {/* 4. Bottom Edge Shine */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  );
});

const MarqueeRow = ({ items, direction = "left", speed = 80 }) => {
  const duplicatedItems = useMemo(() => [...items, ...items, ...items, ...items], [items]);
  return (
    <div className="flex overflow-hidden w-full mask-fade py-2 md:py-4">
      <motion.div
        animate={{ x: direction === "left" ? ["0%", "-25%"] : ["-25%", "0%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex gap-3 md:gap-6 whitespace-nowrap"
      >
        {duplicatedItems.map((t, i) => (
          <SpotlightCard
            key={i}
            isBackground={true}
            // SMALLER SIZES: Mobile (w-56) vs Laptop (w-80)
            className="w-56 h-56 md:w-80 md:h-72 rounded-[1.5rem] md:rounded-[2.5rem] shrink-0"
          >
            {/* Centered Avatar */}
            <img
              src={t.avatar}
              alt={t.name}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white/10 mb-4 md:mb-6"
            />

            {/* Centered Identity */}
            <div className="mb-2 md:mb-4">
              <h4 className="text-white font-bold text-xs md:text-base">{t.name}</h4>
              <p className="text-blue-400/60 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black">{t.handle}</p>
            </div>

            {/* Centered Quote Text */}
            <p className="text-gray-200 text-[10px] md:text-sm leading-relaxed italic whitespace-normal line-clamp-3 px-2 md:px-0">
              "{t.text}"
            </p>
          </SpotlightCard>
        ))}
      </motion.div>
    </div>
  );
};

export default function TrustedBy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 70, damping: 20 });

  // Responsive Motion values
  const y = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [200, 0, 0, -150]);
  const opacity = useTransform(smoothProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2], [0.96, 1]);

  const partners = [
    { name: 'Arena Pro', logo: 'https://cdn-icons-png.flaticon.com/512/21/21155.png' },
    { name: 'Turf Kings', logo: 'https://cdn-icons-png.flaticon.com/512/21/21155.png' },
  ];

  const testimonials = [
    { name: 'Kevin Joseph', handle: '@kevseph', avatar: 'https://i.pravatar.cc/100?u=1', text: 'Have shifted to hosting all my games on @Hyper. Lifesaver! Whatsapp was such a pain.' },
    { name: 'Naveen Pandian', handle: '@naveen_ro', avatar: 'https://i.pravatar.cc/100?u=2', text: 'Played a public game on @Hyper today. Met a lot of new players. Enjoyed the experience!' },
    { name: 'Sushanth', handle: '@sush', avatar: 'https://i.pravatar.cc/100?u=3', text: 'Checked out @Hyper today. Played baddy. Met a bunch of cool players.' },
    { name: 'Priya Singh', handle: '@priya_sports', avatar: 'https://i.pravatar.cc/100?u=4', text: 'Booked my court on @Hyper in seconds. No more back and forth messages!' },
  ];

  return (
    <section ref={containerRef} className="relative py-16 md:py-32 bg-[#050507] overflow-hidden">
      <ParticlesBackground />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[900px] h-[300px] md:h-[900px] bg-blue-600/[0.03] blur-[100px] md:blur-[160px] pointer-events-none" />

      <motion.div style={{ y, opacity, scale }} className="relative z-10 w-full transform-gpu">
        {/* HEADER */}
        <div className="text-center mb-10 md:mb-16 px-6">
          <p className="text-[8px] md:text-[10px] tracking-[0.5em] uppercase text-blue-500 font-black mb-4 md:mb-6">Global Ecosystem</p>
          <motion.h2 className="text-4xl md:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[0.9] bg-[length:200%_auto]" animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}>
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">Trusted By.{" "}</span><br className="md:hidden" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">Community.</span>
          </motion.h2>
          <p className="text-neutral-500 tracking-wider text-base md:text-xl max-w-2xl mx-auto font-light mt-6 md:mt-8 leading-relaxed opacity-60">
            A high-performance network designed to handle premium venues and competitive ecosystems at scale.
          </p>
        </div>

        {/* PARTNER LOGO CARDS */}
        <div className="flex justify-center w-full mb-8 md:mb-14 mask-fade px-4">
          <div className="flex gap-4 md:gap-6 overflow-x-auto pt-6 pb-6 no-scrollbar">
            {partners.map((partner, i) => (
              <SpotlightCard
                key={i}
                className="w-40 h-32 md:w-64 md:h-52 shrink-0 rounded-[1rem] md:rounded-[2rem]"
              >
                <img src={partner.logo} alt={partner.name} className="w-8 h-8 md:w-14 md:h-14 mb-2 md:mb-4 brightness-0 invert opacity-40 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-white font-bold tracking-tight text-xs md:text-xl">{partner.name}</h3>
                <p className="text-[7px] md:text-[10px] tracking-[0.3em] uppercase text-blue-400 font-black">Partner</p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* MARQUEE WALL */}
        <div className="flex flex-col gap-2 md:gap-4 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <MarqueeRow items={testimonials} direction="right" speed={120} />
          <MarqueeRow items={testimonials} direction="left" speed={100} />
          <MarqueeRow items={testimonials} direction="right" speed={120} />
        </div>
      </motion.div>

      <style jsx global>{`
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}