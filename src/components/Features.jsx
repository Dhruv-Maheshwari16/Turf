import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import { BookOpen, Trophy, Globe } from "lucide-react";
import useSectionScroll from "../hooks/useSectionScroll";

const FEATURES = [
  {
    id: 1,
    title: 'Instant Venue Booking',
    description: 'Book turfs, courts, and esports arenas in seconds. Real-time availability and seamless payment processing.',
    icon: BookOpen
  },
  {
    id: 2,
    title: 'Esports & Leaderboards',
    description: 'Organize tournaments, track scores, and maintain leaderboards. Build communities around your venue.',
    icon: Trophy
  },
  {
    id: 3,
    title: 'Tier-2 City Optimization',
    description: 'Designed for emerging markets with local payment options and regional language support.',
    icon: Globe
  }
];

const FeatureCard = memo(({ feature, idx }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: idx * 0.15, duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative flex flex-col h-full min-h-[400px] lg:min-h-[450px] rounded-[2rem] border border-white/10 bg-black/5 backdrop-blur-[2px] overflow-hidden transform-gpu will-change-transform shrink-0 w-[85vw] lg:w-full snap-center transition-all duration-500"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.35), transparent 40%)`
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 md:mb-10 text-white transition-all duration-700 group-hover:border-blue-400/40 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]">
          <feature.icon size={28} strokeWidth={1.5} className="group-hover:text-blue-400 group-hover:scale-110 transition-all duration-700" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-5 tracking-tight group-hover:text-blue-400 transition-colors duration-500">
          {feature.title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light opacity-70 group-hover:opacity-100 transition-opacity duration-500">
          {feature.description}
        </p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  );
});

const Features = () => {
  const { ref: containerRef, y, opacity, scale } = useSectionScroll();

  return (
    <section ref={containerRef} id="features" className="relative py-20 min-h-[1000px] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-blue-500/[0.03] blur-[150px] pointer-events-none" />

      <motion.div
        style={{ y, opacity, scale }}
        className="max-w-7xl mx-auto relative z-10 will-change-transform transform-gpu"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-20 md:mb-28 px-6"
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-blue-500 font-bold mb-4 opacity-80">
            The Infrastructure
          </p>
          <motion.h2
            className="text-4xl md:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[0.9] bg-[length:200%_auto]"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
              Unified OS.{" "}
            </span>
            <br className="md:hidden" />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Limitless.
            </span>
          </motion.h2>
          <p className="text-neutral-500 tracking-wider text-base md:text-xl max-w-2xl mx-auto font-light mt-6 md:mt-8 leading-relaxed opacity-60">
            A high-performance toolkit designed to handle venue bookings and competitive ecosystems at scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -150px 0px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-3 gap-6 md:gap-8 pb-10 snap-x snap-mandatory no-scrollbar px-0 lg:px-6"
        >
          <div className="shrink-0 w-6 lg:hidden" />
          {FEATURES.map((feature, idx) => (
            <FeatureCard key={feature.id} feature={feature} idx={idx} />
          ))}
          <div className="shrink-0 w-6 lg:hidden" />
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default Features;