import React, { memo, useMemo, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import useSectionScroll from "../hooks/useSectionScroll";
import GlassCard from "./GlassCard";

// --- IMPROVED SPOTLIGHT CARD WITH GLASS CARD ---
const SpotlightCard = memo(({ children, className, isBackground = false, rounded = "2.5rem" }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      className={`group relative overflow-hidden transform-gpu transition-all duration-500 
      ${isBackground ? 'opacity-40 hover:opacity-100' : 'opacity-100'} ${className}`}
      style={{ borderRadius: rounded }}
    >
      <GlassCard className="h-full w-full" rounded={rounded}>
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center text-center p-5 md:p-8">
          {children}
        </div>
      </GlassCard>
    </motion.div>
  );
});

const MarqueeRow = ({ items, direction = "left", speed = 80, isMobile }) => {
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
            className="w-56 h-56 md:w-80 md:h-72 shrink-0"
            rounded={isMobile ? "1.5rem" : "2.5rem"}
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white/10 mb-4 md:mb-6"
            />
            <div className="mb-2 md:mb-4">
              <h4 className="text-white font-bold text-xs md:text-base">{t.name}</h4>
              <p className="text-indigo-400/60 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-black">{t.handle}</p>
            </div>
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
  const [isMobile, setIsMobile] = useState(false);
  const { ref: containerRef, y, opacity, scale } = useSectionScroll();
  const scrollRef = useRef(null);

  useEffect(() => {
    const checkLayout = () => setIsMobile(window.innerWidth < 768);
    checkLayout();
    window.addEventListener('resize', checkLayout);
    return () => window.removeEventListener('resize', checkLayout);
  }, []);

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
    <section ref={containerRef} id="community" className="relative py-2 overflow-hidden min-h-[1000px]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-indigo-600/[0.03] blur-[150px] pointer-events-none" />

      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-7xl mx-auto relative z-10 will-change-transform"
      >
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-20 md:mb-28 px-6"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-indigo-500 font-bold mb-4 opacity-80">
            Global Ecosystem
          </p>
          <motion.h2
            className="text-4xl md:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[0.9] bg-[length:200%_auto]"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
              Trusted By.{" "}
            </span>
            <br className="md:hidden" />
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-400 bg-clip-text text-transparent">
              Community.
            </span>
          </motion.h2>
          <p className="text-neutral-500 tracking-wider text-base md:text-xl max-w-2xl mx-auto font-light mt-6 md:mt-8 leading-relaxed opacity-60">
            A high-performance network designed to handle premium venues and competitive ecosystems at scale.
          </p>
        </motion.div>

        {/* PARTNER LOGO CARDS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -150px 0px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative flex justify-center w-full mb-8 md:mb-14 mask-fade px-4"
        >
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pt-6 pb-6 px-2"
          >
            {partners.map((partner, i) => (
              <SpotlightCard
                key={i}
                className="w-56 h-56 md:w-64 md:h-52 shrink-0"
                rounded={isMobile ? "1rem" : "2rem"}
              >
                <img src={partner.logo} alt={partner.name} className="w-8 h-8 md:w-14 md:h-14 mb-2 md:mb-4 brightness-0 invert opacity-40 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-white font-bold tracking-tight text-xs md:text-xl">{partner.name}</h3>
                <p className="text-[7px] md:text-[10px] tracking-[0.3em] uppercase text-indigo-400 font-black">Partner</p>
              </SpotlightCard>
            ))}
          </div>
        </motion.div>

        {/* MARQUEE WALL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-col gap-2 md:gap-4 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
        >
          <MarqueeRow items={testimonials} direction="right" speed={120} isMobile={isMobile} />
          <MarqueeRow items={testimonials} direction="left" speed={100} isMobile={isMobile} />
          <MarqueeRow items={testimonials} direction="right" speed={120} isMobile={isMobile} />
        </motion.div>
      </motion.div>
      <style jsx global>{`
        .mask-fade {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
}