import React, { memo, useRef } from "react";
import { motion } from "framer-motion";
import { Navigation, MapPin } from 'lucide-react';
import useSectionScroll from "../hooks/useSectionScroll";

const VenueCard = memo(({ venue, idx }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="relative shrink-0 w-[300px] md:w-[350px] h-[480px] md:h-[520px] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm group snap-center will-change-transform transform-gpu"
    >
      {/* Image Layer with Zoom Effect */}
      <img
        src={venue.img}
        alt={venue.name}
        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000 ease-out"
        loading="lazy"
      />

      {/* Glass Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent pointer-events-none" />

      {/* Popular Badge */}
      {venue.popular && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
          <div className="px-4 py-1.5 rounded-full bg-blue-600/20 border border-neutral-500/50 backdrop-blur-md">
            <span className="text-[10px] font-black tracking-[0.2em] bg-gradient-to-b from-gray-600 via-gray-800 to-black bg-clip-text text-transparent uppercase">
              Popular Choice
            </span>
          </div>
        </div>
      )}

      {/* Bottom Content Area */}
      <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
        <div className="flex items-end justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={14} className="text-blue-500" />
              <span className="text-[10px] text-blue-400/80 font-bold tracking-widest uppercase">Vellore, TN</span>
            </div>
            <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              {venue.name}
            </h4>
          </div>
        </div>
      </div>

      {/* Glass Edge Shine (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  );
});

export default function Venue() {
  const { ref: containerRef, y: yTranslate, opacity, scale } = useSectionScroll();
  const scrollRef = useRef(null);

  const venues = [
    {
      name: 'Turf Nation',
      img: 'https://images.unsplash.com/photo-1570498839593-e565b39455fc?q=80&w=735&auto=format&fit=crop',
      location: 'https://www.google.com/maps/dir//Gorbachev+Rd...',
      popular: false
    },
    {
      name: 'House of Pool',
      img: 'https://images.unsplash.com/photo-1509077613385-f89402467146?q=80&w=1940&auto=format&fit=crop',
      location: 'https://www.google.com/maps/dir//gate+2nd+floor...',
      popular: false
    },
    {
      name: 'Slick and Kick',
      img: 'https://plus.unsplash.com/premium_photo-1684888476715-a00870431463?q=80&w=687&auto=format&fit=crop',
      location: 'https://www.google.com/maps/dir//No.40,+Kumaran+Street...',
      popular: false
    },
    {
      name: 'Hoops Arena',
      img: 'https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1000&auto=format&fit=crop',
      location: '',
      popular: false
    }
  ];

  return (
    <section ref={containerRef} id="venue" className="relative py-20 min-h-[900px] overflow-hidden">

      {/* Decorative Background Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-blue-500/[0.03] blur-[150px] pointer-events-none" />

      <motion.div
        style={{ y: yTranslate, opacity, scale }}
        className="relative z-10 mx-auto max-w-7xl px-6 transform-gpu will-change-transform"
      >
        {/* Header - Matching Typography from reference */}
        <div className="text-center mb-24">
          <p className="text-[10px] tracking-[0.4em] uppercase text-blue-500 font-bold mb-4 opacity-80">
            Ecosystem Nearby
          </p>
          <motion.h2
            className="text-4xl md:text-7xl font-black tracking-tighter leading-tight"
          >
            <span className="pr-0.5 bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
              Arenas
            </span>{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Near You.
            </span>
            <p className="text-neutral-400 tracking-wider text-lg md:text-xl max-w-2xl mx-auto font-light mt-6 opacity-60">
              From finding a slot to getting confirmation, we make every step simple and transparent so you can enjoy a stress-free game day
            </p>
          </motion.h2>
        </div>

        {/* Horizontal scroll layout */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="relative overflow-x-auto snap-x snap-mandatory pb-12"
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
