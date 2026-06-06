import React, { memo } from "react";
import { motion } from "framer-motion";
import useSectionScroll from "../../hooks/useSectionScroll";
import GlassCard from "../ui/GlassCard";

const CTA = memo(() => {
  const { ref: containerRef, y, opacity, scale } = useSectionScroll();

  return (
    <section ref={containerRef} id="App" className="relative py-16 overflow-hidden">

      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-indigo-600/[0.03] blur-[160px] rounded-full pointer-events-none opacity-40" />

      {/* THE ANIMATED WRAPPER */}
      <motion.div
        style={{ y, scale }}
        className="relative z-10 mx-auto max-w-5xl px-6 transform-gpu will-change-transform"
      >
        <GlassCard
          className="p-12 md:p-24 text-center shadow-2xl overflow-hidden rounded-[3.5rem]"
          background="bg-black/10"
          blur="backdrop-blur-[15px]"
        >
          {/* THE MAIN CONTENT */}
          <div className="relative z-10">


            {/* DUAL GRADIENT HEADING */}
            <motion.h2
              className="text-4xl md:text-7xl font-black tracking-tight leading-[1.1] mb-11 px-6 break-words overflow-visible pb-2"
            >
              <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent pr-[0.05em]">
                Install the app<br className="hidden md:block" /> Get{" "}
              </span>
              <motion.span
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="inline-block bg-gradient-to-r from-indigo-400 via-indigo-400 to-indigo-400 bg-clip-text text-transparent bg-[length:200%_auto] pr-[0.1em]"
              >
                HYPER
              </motion.span>
              <span className="bg-gradient-to-b from-white via-white to-gray-500 bg-clip-text text-transparent px-2">
                Now
              </span>
            </motion.h2>

            <p className="text-gray-400 text-lg md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed opacity-80 px-4">
              Download the app to discover venues, book instantly, and elevate your sports experience.
            </p>

            {/* STORE BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-20">
              {/* App Store */}
              <motion.a
                href="https://apps.apple.com/us/app/hyper-book-sports-more/id6759787068"
                target="_blank"
                rel="noopener noreferrer"
                initial="initial"
                whileHover="hovered"
                whileTap={{ scale: 0.95 }}
                className="group/btn relative overflow-hidden flex items-center gap-5 px-8 py-5 rounded-2xl bg-black/5 backdrop-blur-xl border border-neutral-500/10 text-white transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-[0_0_50px_rgba(99,102,241,0.3)]"
              >
                {/* Shimmer Effect */}
                <motion.div
                  variants={{
                    initial: { x: "-100%", opacity: 0 },
                    hovered: {
                      x: "250%",
                      opacity: [0, 0.4, 0.4, 0],
                      scale: 1.05,
                      transition: { repeat: Infinity, duration: 1.5, ease: "linear", repeatDelay: 0.2 }
                    }
                  }}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), transparent)",
                    skewX: "-20deg",
                  }}
                />

                <img
                  src="https://i.postimg.cc/tggCchGf/app-store-(1).png"
                  alt="App Store"
                  className="w-10 h-10 rotate-[15deg] transition-transform duration-500 group-hover/btn:rotate-0 relative z-10"
                />
                <div className="flex flex-col text-left relative z-10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Download on the</span>
                  <span className="text-xl font-black">App Store</span>
                </div>
              </motion.a>

              {/* Google Play */}
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.hitendras940.hyper"
                target="_blank"
                rel="noopener noreferrer"
                initial="initial"
                whileHover="hovered"
                whileTap={{ scale: 0.95 }}
                className="group/btn relative overflow-hidden flex items-center gap-5 px-8 py-5 rounded-2xl bg-black/5 backdrop-blur-xl border border-neutral-500/10 text-white transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-[0_0_50px_rgba(99,102,241,0.3)]"
              >
                {/* Shimmer Effect */}
                <motion.div
                  variants={{
                    initial: { x: "-100%", opacity: 0 },
                    hovered: {
                      x: "250%",
                      opacity: [0, 0.4, 0.4, 0],
                      scale: 1.05,
                      transition: { repeat: Infinity, duration: 1.5, ease: "linear", repeatDelay: 0.2 }
                    }
                  }}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0), transparent)",
                    skewX: "-20deg",
                  }}
                />

                <img
                  src="https://i.postimg.cc/0jzkNxNq/app.png"
                  alt="Google Play"
                  className="w-10 h-10 rotate-[-15deg] transition-transform duration-500 group-hover/btn:rotate-0 relative z-10"
                />
                <div className="flex flex-col text-left relative z-10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">Get it on</span>
                  <span className="text-xl font-black">Google Play</span>
                </div>
              </motion.a>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
});

export default CTA;