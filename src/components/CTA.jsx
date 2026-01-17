import React, { memo, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import useSectionScroll from "../hooks/useSectionScroll";

const CTA = memo(() => {
  const { ref: containerRef, y, opacity, scale } = useSectionScroll();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section ref={containerRef} id="cta" className="relative py-16 overflow-hidden">

      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none opacity-40" />

      {/* THE ANIMATED WRAPPER */}
      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto max-w-5xl px-6 transform-gpu will-change-transform"
      >
        {/* THE MAIN GLASS CARD */}
        <div
          onMouseMove={handleMouseMove}
          className="group relative rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm p-12 md:p-24 overflow-hidden text-center shadow-2xl"
        >
          {/* Spotlight Effect inside Card */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: useMotionTemplate`
                radial-gradient(
                  500px circle at ${mouseX}px ${mouseY}px,
                  rgba(59, 130, 246, 0.1),
                  transparent 70%
                )
              `,
            }}
          />

          {/* Inner Reflection Highlight (Top Edge) */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* DUAL GRADIENT HEADING */}
          <motion.h2
            className="text-4xl md:text-7xl font-black tracking-tighter leading-[1.05] mb-10"
          >
            <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent">
              Ready to transform <br className="hidden md:block" /> your{" "}
            </span>
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto] pr-2"
            >
              venue?
            </motion.span>
          </motion.h2>

          <p className="text-gray-400 text-lg md:text-2xl mb-14 max-w-2xl mx-auto font-light leading-relaxed opacity-80">
            Join hundreds of venues already using Hyper to streamline bookings and grow their business.
          </p>

          {/* STORE BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-20">
            {/* App Store */}
            <motion.a
              href="#appstore"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn flex items-center gap-5 px-8 py-5 rounded-2xl bg-black/5 backdrop-blur-xl border border-neutral-500/10 text-white transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]"
            >
              <img
                src="https://i.postimg.cc/tggCchGf/app-store-(1).png"
                alt="App Store"
                className="w-10 h-10 rotate-[15deg] transition-transform duration-500 group-hover/btn:rotate-0"
              />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Download on the</span>
                <span className="text-xl font-black">App Store</span>
              </div>
            </motion.a>

            {/* Google Play */}
            <motion.a
              href="#playstore"
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group/btn flex items-center gap-5 px-8 py-5 rounded-2xl bg-black/5 backdrop-blur-xl border border-neutral-500/10 text-white transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]"
            >
              <img
                src="https://i.postimg.cc/0jzkNxNq/app.png"
                alt="Google Play"
                className="w-10 h-10 rotate-[-15deg] transition-transform duration-500 group-hover/btn:rotate-0"
              />
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Get it on</span>
                <span className="text-xl font-black">Google Play</span>
              </div>
            </motion.a>
          </div>

          {/* Bottom Edge Shine (Reflective Line) */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
});

export default CTA;