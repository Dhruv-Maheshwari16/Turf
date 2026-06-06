import React, { memo, useRef } from "react";
import { motion } from "framer-motion";
import { Navigation, MapPin } from 'lucide-react';
import useSectionScroll from "../../hooks/useSectionScroll";
import GlassCard from "../ui/GlassCard";
import houseOfPoolBImg from "../../assets/House_of_pool_B.jpg";
import houseOfPoolImg from "../../assets/House_of_pool.jpg";
import dare2EscapeImg from "../../assets/Dare2Escape.png";

const VenueCard = memo(({ venue, idx }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative shrink-0 w-[300px] md:w-[350px] snap-center will-change-transform transform-gpu"
    >
      <GlassCard
        className="relative h-[480px] md:h-[520px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0a0c] backdrop-blur-none"
        spotlight={false}
      >
        {/* Image Layer with Zoom Effect */}
        <img
          src={venue.img}
          alt={venue.name}
          className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out"
          loading="lazy"
        />

        {/* Glass Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />

        {/* Status Badge */}
        

        {/* Popular Badge */}
        {venue.onboard && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20">
            <div className="px-4 py-1.5 rounded-full bg-indigo-600/20 border border-neutral-500/50 backdrop-blur-md">
              <span className="text-[10px] font-black tracking-[0.2em] bg-gradient-to-b from-gray-600 via-gray-800 to-black bg-clip-text text-transparent uppercase">
                Revealing soon
              </span>
            </div>
          </div>
        )}

        {/* Bottom Content Area */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          <div className="flex items-end justify-between gap-4">
            <div className="flex-1">
              {<div className="flex items-center gap-2 mb-2">
                <MapPin size={14} className="text-indigo-500" />
                <span className="text-[10px] text-indigo-400/80 font-bold tracking-widest uppercase">{venue.location}</span>
              </div>}
              <h4 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                {venue.name}
              </h4>
            </div>
          </div>
        </div>

      </GlassCard>
    </motion.div>
  );
});

export default function Venue() {
  const { ref: containerRef, y: yTranslate, opacity, scale } = useSectionScroll();
  const scrollRef = useRef(null);

  const venues = [
    {
      name: 'House of Pool',
      img: houseOfPoolImg,
      location: 'Vellore,Tamil Nadu',
      popular: true
    },
    {
      name: 'Dare2Escape',
      img: dare2EscapeImg,
      location: 'Vellore,Tamil Nadu',
      popular: true
    },
    {
      name: 'House of Pool Billiards',
      img: houseOfPoolBImg,
      location: 'Vellore,Tamil Nadu',
      popular: true
    }
  ];

  return (
    <section ref={containerRef} id="venue" className="relative py-20 min-h-[900px] overflow-hidden">

      {/* Decorative Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-indigo-600/[0.03] blur-[150px] pointer-events-none" />

      <motion.div
        style={{ y: yTranslate, opacity, scale }}
        className="relative z-10 mx-auto max-w-7xl px-6 transform-gpu will-change-transform"
      >
        {/* Header - Matching Typography from reference */}
        <div className="text-center mb-24">
          <p className="text-[10px] tracking-[0.4em] uppercase text-indigo-500 font-bold mb-4 opacity-80">
            Venues Nearby
          </p>
          <motion.h2
            className="text-4xl md:text-7xl font-black tracking-tighter leading-tight"
          >
            <span className="pr-0.5 bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
              Arenas
            </span>{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-400 bg-clip-text text-transparent">
              Near You.
            </span>
          </motion.h2>
          <p className="text-neutral-400 tracking-wider text-lg md:text-xl max-w-2xl mx-auto font-light mt-6 leading-relaxed opacity-70">
            From finding a slot to getting confirmation, we make every step simple and transparent so you can enjoy a stress-free game day
          </p>
        </div>

        {/* Horizontal scroll layout */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="relative overflow-x-auto snap-x snap-mandatory pt-10 pb-12 md:no-scrollbar"
          >
            <div className="flex gap-8 px-4 w-max">
              {venues.map((venue, i) => (
                <VenueCard key={i} venue={venue} idx={i} />
              ))}
            </div>
          </div>
        </div>

      </motion.div>
    </section >
  )
}
