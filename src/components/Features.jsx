import React, { useState, memo, useRef } from "react";
import { motion } from "framer-motion";
import { BookOpen, Trophy, Globe } from "lucide-react";
import useSectionScroll from "../hooks/useSectionScroll";
import GlassCard from "./GlassCard";

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
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: idx * 0.15, duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
      className="shrink-0 w-[85vw] lg:w-full snap-center"
    >
      <GlassCard className="flex flex-col h-full min-h-[400px] lg:min-h-[450px] transition-all duration-500">
        <div className="relative z-10 flex flex-col h-full p-8 md:p-10">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-8 md:mb-10 text-indigo-400 transition-all duration-700">
            <feature.icon size={28} strokeWidth={1.5} className="transition-all duration-700" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-5 tracking-tight group-hover:text-indigo-400 transition-colors duration-500">
            {feature.title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-base md:text-lg font-light opacity-70 group-hover:opacity-100 transition-opacity duration-500">
            {feature.description}
          </p>
        </div>
      </GlassCard>
    </motion.div>
  );
});

const Features = () => {
  const { ref: containerRef, y, opacity, scale } = useSectionScroll();
  const scrollRef = useRef(null);

  return (
    <section ref={containerRef} id="features" className="relative py-20 min-h-[1000px] overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-indigo-500/[0.03] blur-[150px] pointer-events-none" />

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
          <p className="text-[10px] tracking-[0.4em] uppercase text-indigo-500 font-bold mb-4 opacity-80">
            The Infrastructure
          </p>
          <motion.h2
            className="text-4xl md:text-8xl font-black tracking-tighter leading-[1.1] md:leading-[0.9] bg-[length:200%_auto]"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          >
            <span className=" bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
              Play More{" "}
            </span>
            <br className="md:hidden" />
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-400 bg-clip-text text-transparent">
              Plan Less.
            </span>
          </motion.h2>
          <p className="text-neutral-500 tracking-wider text-base md:text-xl max-w-2xl mx-auto font-light mt-6 md:mt-8 leading-relaxed opacity-60">
            We take care of the planning so you can spend more time playing.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            ref={scrollRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2, margin: "0px 0px -150px 0px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-row overflow-x-auto lg:grid lg:grid-cols-3 gap-6 md:gap-8 pt-10 pb-10 snap-x snap-mandatory px-0 lg:px-6"
          >
            <div className="shrink-0 w-6 lg:hidden" />
            {FEATURES.map((feature, idx) => (
              <FeatureCard key={feature.id} feature={feature} idx={idx} />
            ))}
            <div className="shrink-0 w-6 lg:hidden" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;